
'use client';

import { useState, useRef } from 'react';
import { Mic, StopCircle, Loader2, Send, Languages, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
// Types for the API response
interface PronunciationFeedbackOutput {
  feedback: string;
  success: boolean;
}
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function PronunciationPage() {
  const { toast } = useToast();
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [feedback, setFeedback] = useState<PronunciationFeedbackOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [textToSpeak, setTextToSpeak] = useState('विद्या ददाति विनयम्।');
  const [permissionError, setPermissionError] = useState(false);

  const handleStartRecording = async () => {
    setPermissionError(false);
    setAudioBlob(null);
    setFeedback(null);
    
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorderRef.current = new MediaRecorder(stream);
        const audioChunks: Blob[] = [];

        mediaRecorderRef.current.ondataavailable = (event) => {
          audioChunks.push(event.data);
        };

        mediaRecorderRef.current.onstop = () => {
          const newAudioBlob = new Blob(audioChunks, { type: 'audio/webm' });
          setAudioBlob(newAudioBlob);
          // Stop all tracks on the stream to release the microphone
           if (mediaRecorderRef.current) {
                mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
           }
        };

        mediaRecorderRef.current.start();
        setIsRecording(true);
      } catch (err) {
        console.error('Error accessing microphone:', err);
        setPermissionError(true);
        toast({
          variant: "destructive",
          title: "Microphone Access Denied",
          description: "Please allow microphone access in your browser settings to use this feature.",
        });
      }
    }
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const blobToDataURI = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const handleGetFeedback = async () => {
    if (!audioBlob) {
      toast({
        variant: "destructive",
        title: "No Audio Recorded",
        description: "Please record your pronunciation first.",
      });
      return;
    }

    setIsLoading(true);
    setFeedback(null);
    try {
      const audioDataUri = await blobToDataURI(audioBlob);
      const response = await fetch('/api/ai/pronunciation-feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ audioDataUri, text: textToSpeak }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to get feedback');
      }
      
      const result = await response.json();
      setFeedback(result);
    } catch (error) {
      console.error('Error getting feedback:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not get feedback from the AI. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-2xl">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="font-headline text-2xl flex items-center gap-2">
            <Mic className="text-primary" />
            Pronunciation Practice
          </CardTitle>
          <CardDescription>
            Speak the Sanskrit phrase below and get instant feedback from our AI coach.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center p-6 bg-secondary rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">Phrase to speak:</p>
            <p className="text-4xl font-headline font-semibold">{textToSpeak}</p>
          </div>

          {permissionError && (
             <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Microphone Error</AlertTitle>
                <AlertDescription>
                    Could not access the microphone. Please ensure you have given permission in your browser settings and try again.
                </AlertDescription>
            </Alert>
          )}

          <div className="flex justify-center items-center gap-4">
            {!isRecording ? (
              <Button onClick={handleStartRecording} size="lg" disabled={isLoading}>
                <Mic className="mr-2 h-5 w-5" /> Start Recording
              </Button>
            ) : (
              <Button onClick={handleStopRecording} size="lg" variant="destructive">
                <StopCircle className="mr-2 h-5 w-5" /> Stop Recording
              </Button>
            )}
            
            <Button onClick={handleGetFeedback} size="lg" disabled={!audioBlob || isLoading || isRecording}>
              {isLoading ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <Send className="mr-2 h-5 w-5" />
              )}
              Get Feedback
            </Button>
          </div>

          {audioBlob && !isRecording && (
             <div className="text-center">
                 <p className="text-sm text-muted-foreground mb-2">Your recording:</p>
                 <audio src={URL.createObjectURL(audioBlob)} controls className="mx-auto" />
             </div>
          )}

          {isLoading && (
            <div className="flex flex-col items-center justify-center text-center p-8 space-y-4">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
                <p className="font-headline text-lg">Analyzing your pronunciation...</p>
                <p className="text-muted-foreground">This may take a few moments.</p>
            </div>
          )}

          {feedback && !isLoading && (
            <Card className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 animate-fade-in-up">
              <CardHeader>
                <CardTitle className="font-headline text-xl flex items-center gap-2 text-green-800 dark:text-green-300">
                    <Languages /> AI Feedback
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base whitespace-pre-wrap">{feedback.feedback}</p>
              </CardContent>
            </Card>
          )}
        </CardContent>
        <CardFooter>
            <p className="text-xs text-muted-foreground text-center w-full">
                For best results, speak clearly in a quiet environment.
            </p>
        </CardFooter>
      </Card>
    </div>
  );
}
