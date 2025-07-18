
'use client';

import { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { practiceQuestions as defaultPracticeQuestions } from '@/lib/sanskrit-data';
import { ChevronLeft, ChevronRight, RotateCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type PracticeQuestion = typeof defaultPracticeQuestions[0];

export default function PracticePage() {
  const [allQuestions, setAllQuestions] = useState<PracticeQuestion[]>(defaultPracticeQuestions);

  useEffect(() => {
    try {
      const storedQuestions = localStorage.getItem('ai-generated-mcqs');
      if (storedQuestions) {
        const parsedQuestions: PracticeQuestion[] = JSON.parse(storedQuestions);
        setAllQuestions(prev => [...prev, ...parsedQuestions]);
      }
    } catch (error) {
      console.error("Failed to load AI-generated questions from local storage", error);
    }
  }, []);

  const allChapterIds = useMemo(() => ['all', ...Array.from(new Set(allQuestions.map(q => q.chapterId)))], [allQuestions]);

  const [filteredQuestions, setFilteredQuestions] = useState(allQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setFilteredQuestions(allQuestions);
    handleRestart(allQuestions);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allQuestions]);

  const handleFilterChange = (chapterId: string) => {
    let questionsToSet;
    if (chapterId === 'all') {
      questionsToSet = allQuestions;
    } else {
      questionsToSet = allQuestions.filter(q => q.chapterId === chapterId);
    }
    setFilteredQuestions(questionsToSet);
    handleRestart(questionsToSet);
  };

  const currentQuestion = filteredQuestions[currentQuestionIndex];
  const selectedOption = answers[currentQuestionIndex];
  const isAnswered = selectedOption !== undefined;

  const handleSelectOption = (option: string) => {
    if (isAnswered) return;

    const newAnswers = { ...answers, [currentQuestionIndex]: option };
    setAnswers(newAnswers);

    const isCorrect = option === currentQuestion.answer;
    if (isCorrect) {
        toast({ title: "Correct!" });
    } else {
        toast({ title: "Incorrect!", description: `The correct answer is: ${currentQuestion.answer}`, variant: "destructive" });
    }

    if (Object.keys(newAnswers).length === filteredQuestions.length && !quizCompleted) {
        setQuizCompleted(true);
        toast({
            title: "Quiz Complete!",
            description: "You've finished all the questions for this section.",
        });
    }
  };
  
  const handleQuestionChange = (index: number) => {
    if (index >= 0 && index < filteredQuestions.length) {
      setCurrentQuestionIndex(index);
    }
  };

  const handleRestart = (questions = filteredQuestions) => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setQuizCompleted(false);
    // Shuffle only if there are questions
    if (questions.length > 0) {
      setFilteredQuestions([...questions].sort(() => Math.random() - 0.5));
    } else {
      setFilteredQuestions([]);
    }
    toast({
        title: "Quiz Restarted",
        description: "Your answers have been cleared.",
    });
  };

  if (!currentQuestion) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <header className="mb-8">
          <h1 className="text-4xl font-headline font-bold">Practice Quiz</h1>
          <p className="text-lg text-muted-foreground mt-2">
            Test your knowledge with these questions.
          </p>
        </header>
        <Card>
            <CardContent className="p-8">
                <p className="text-muted-foreground mb-4">No questions for this selection. Please choose a chapter.</p>
                <Select onValueChange={handleFilterChange} defaultValue="all">
                    <SelectTrigger className="w-[280px] mx-auto">
                        <SelectValue placeholder="Filter by Chapter..." />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Chapters</SelectItem>
                        {allChapterIds.slice(1).map(id => <SelectItem key={id} value={id}>{id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</SelectItem>)}
                    </SelectContent>
                </Select>
            </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-headline font-bold">Practice Quiz</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Test your knowledge with these questions.
        </p>
      </header>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center mb-4">
            <CardTitle>Question {currentQuestionIndex + 1} of {filteredQuestions.length}</CardTitle>
             <Select onValueChange={handleFilterChange} defaultValue={currentQuestion.chapterId || 'all'}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by Chapter..." />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="all">All Chapters</SelectItem>
                    {allChapterIds.slice(1).map(id => <SelectItem key={id} value={id}>{id.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</SelectItem>)}
                </SelectContent>
            </Select>
          </div>
          <CardDescription className="text-lg pt-2">{currentQuestion.question}</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup
            key={currentQuestionIndex}
            value={selectedOption || ''}
            onValueChange={handleSelectOption}
            disabled={isAnswered}
          >
            {currentQuestion.options.map((option, index) => (
              <Label
                key={index}
                className={`flex items-center space-x-2 p-4 rounded-md border transition-colors ${
                  isAnswered && option === currentQuestion.answer ? 'border-green-500 bg-green-50 dark:bg-green-900/20 dark:border-green-700' : ''
                } ${
                  isAnswered && option === selectedOption && option !== currentQuestion.answer ? 'border-red-500 bg-red-50 dark:bg-red-900/20 dark:border-red-700' : ''
                } ${
                    !isAnswered ? 'cursor-pointer hover:bg-secondary' : 'cursor-not-allowed'
                }`}
              >
                <RadioGroupItem value={option} id={`option-${index}`} />
                <span>{option}</span>
              </Label>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter className="flex-col gap-4">
            <div className="flex justify-between items-center w-full">
                <Button variant="outline" onClick={() => handleQuestionChange(currentQuestionIndex - 1)} disabled={currentQuestionIndex === 0}>
                <ChevronLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
                <Button variant="outline" onClick={() => handleQuestionChange(currentQuestionIndex + 1)} disabled={currentQuestionIndex === filteredQuestions.length - 1}>
                Next <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
            <Button onClick={() => handleRestart(filteredQuestions)} variant="secondary" className="w-full">
              <RotateCw className="mr-2 h-4 w-4" /> Restart Quiz
            </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
