'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { practiceQuestions } from '@/lib/sanskrit-data';
import { CheckCircle, XCircle, RotateCw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function PracticePage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const { toast } = useToast();

  const currentQuestion = practiceQuestions[currentQuestionIndex];

  const handleCheckAnswer = () => {
    if (!selectedOption) {
      toast({
        title: "Please select an answer",
        variant: "destructive",
      });
      return;
    }

    const correct = selectedOption === currentQuestion.answer;
    setIsCorrect(correct);
    setIsAnswered(true);
  };

  const handleNextQuestion = () => {
    setIsAnswered(false);
    setSelectedOption(null);
    if (currentQuestionIndex < practiceQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Loop back to the beginning for endless practice
      setCurrentQuestionIndex(0);
      toast({
        title: "Quiz Complete!",
        description: "You've finished the questions. Starting over.",
      })
    }
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
          <CardTitle>Question {currentQuestionIndex + 1} of {practiceQuestions.length}</CardTitle>
          <CardDescription className="text-lg pt-2">{currentQuestion.question}</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={selectedOption || ''}
            onValueChange={setSelectedOption}
            disabled={isAnswered}
          >
            {currentQuestion.options.map((option, index) => (
              <Label
                key={index}
                className={`flex items-center space-x-2 p-4 rounded-md border transition-colors ${
                  isAnswered && option === currentQuestion.answer ? 'border-green-500 bg-green-50' : ''
                } ${
                  isAnswered && option === selectedOption && option !== currentQuestion.answer ? 'border-red-500 bg-red-50' : ''
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
        <CardFooter className="flex flex-col items-stretch gap-4">
          {isAnswered ? (
            <div className={`p-4 rounded-md flex items-center gap-2 ${isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {isCorrect ? <CheckCircle /> : <XCircle />}
              <span className="font-bold">{isCorrect ? "Correct!" : `Incorrect. The answer is ${currentQuestion.answer}.`}</span>
            </div>
          ) : null}

          {isAnswered ? (
            <Button onClick={handleNextQuestion} size="lg">
              {currentQuestionIndex < practiceQuestions.length - 1 ? 'Next Question' : 'Restart Quiz'}
              <RotateCw className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleCheckAnswer} size="lg">
              Check Answer
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
