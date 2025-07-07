'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { practiceQuestions } from '@/lib/sanskrit-data';
import { ChevronLeft, ChevronRight, RotateCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function PracticePage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // Store user's selected answer for each question index
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const { toast } = useToast();

  const currentQuestion = practiceQuestions[currentQuestionIndex];
  const selectedOption = answers[currentQuestionIndex];
  const isAnswered = selectedOption !== undefined;

  const handleSelectOption = (option: string) => {
    if (isAnswered) return; // Don't allow changing answer

    const newAnswers = { ...answers, [currentQuestionIndex]: option };
    setAnswers(newAnswers);

    const isCorrect = option === currentQuestion.answer;
    if (isCorrect) {
        toast({ title: "Correct!" });
    } else {
        toast({ title: "Incorrect!", description: `The correct answer is: ${currentQuestion.answer}`, variant: "destructive" });
    }

    if (Object.keys(newAnswers).length === practiceQuestions.length && !quizCompleted) {
        setQuizCompleted(true);
        toast({
            title: "Quiz Complete!",
            description: "You've finished all the questions.",
        });
    }
  };
  
  const handleQuestionChange = (index: number) => {
    if (index >= 0 && index < practiceQuestions.length) {
      setCurrentQuestionIndex(index);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setQuizCompleted(false);
    toast({
        title: "Quiz Restarted",
        description: "Your answers have been cleared.",
    });
  };

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
          <div className="flex justify-between items-center">
            <CardTitle>Question {currentQuestionIndex + 1} of {practiceQuestions.length}</CardTitle>
            <Select onValueChange={(value) => handleQuestionChange(parseInt(value))} value={currentQuestionIndex.toString()}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Jump to..." />
              </SelectTrigger>
              <SelectContent>
                {practiceQuestions.map((_, index) => (
                  <SelectItem key={index} value={index.toString()}>
                    Question {index + 1}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <CardDescription className="text-lg pt-2">{currentQuestion.question}</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup
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
                <Button variant="outline" onClick={() => handleQuestionChange(currentQuestionIndex + 1)} disabled={currentQuestionIndex === practiceQuestions.length - 1}>
                Next <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
            <Button onClick={handleRestart} variant="secondary" className="w-full">
              <RotateCw className="mr-2 h-4 w-4" /> Restart Quiz
            </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
