'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { dailyTasks as defaultTasks } from '@/lib/sanskrit-data';

export interface Task {
  id: string;
  title: string;
  description: string;
  progress: number;
  goal: number;
  href: string;
}

interface DailyTasksContextType {
  tasks: Task[];
  updateTaskProgress: (taskId: string, amount: number) => void;
  resetTasks: () => void;
}

const DailyTasksContext = createContext<DailyTasksContextType | undefined>(undefined);

const getTodayDateString = () => new Date().toISOString().split('T')[0];

export const DailyTasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(() => 
    defaultTasks.map((task, index) => ({
      ...task,
      id: `task-${index}`,
      progress: 0,
    }))
  );

  useEffect(() => {
    try {
        const storedTasks = localStorage.getItem('dailyTasks');
        const storedDate = localStorage.getItem('lastResetDate');
        const today = getTodayDateString();

        if (storedDate === today && storedTasks) {
            setTasks(JSON.parse(storedTasks));
        } else {
            // Reset tasks for a new day
            const initialTasks = defaultTasks.map((task, index) => ({
                ...task,
                id: `task-${index}`,
                progress: 0,
            }));
            setTasks(initialTasks);
            localStorage.setItem('dailyTasks', JSON.stringify(initialTasks));
            localStorage.setItem('lastResetDate', today);
        }
    } catch (error) {
        console.error("Failed to access localStorage. Daily tasks will not be persisted.", error);
    }
  }, []);

  useEffect(() => {
    try {
        if (tasks.length > 0 && tasks.some(t => t.progress > 0)) {
            localStorage.setItem('dailyTasks', JSON.stringify(tasks));
        }
    } catch (error) {
        console.error("Failed to save tasks to localStorage.", error);
    }
  }, [tasks]);

  const updateTaskProgress = (taskId: string, amount: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId
          ? { ...task, progress: Math.min(task.goal, task.progress + amount) }
          : task
      )
    );
  };
  
  const resetTasks = () => {
    try {
        const today = getTodayDateString();
        const initialTasks = defaultTasks.map((task, index) => ({
        ...task,
        id: `task-${index}`,
        progress: 0,
        }));
        setTasks(initialTasks);
        localStorage.setItem('dailyTasks', JSON.stringify(initialTasks));
        localStorage.setItem('lastResetDate', today);
    } catch (error) {
        console.error("Failed to reset tasks in localStorage.", error);
    }
  };

  const value = { tasks, updateTaskProgress, resetTasks };

  return (
    <DailyTasksContext.Provider value={value}>
      {children}
    </DailyTasksContext.Provider>
  );
};

export const useDailyTasks = () => {
  const context = useContext(DailyTasksContext);
  if (context === undefined) {
    throw new Error('useDailyTasks must be used within a DailyTasksProvider');
  }
  return context;
};
