
import { CheckCircle, XCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Question } from '@/types/quiz';

interface QuizQuestionProps {
  question: Question;
  selectedAnswer: string;
  showResult: boolean;
  onAnswerSelect: (value: string) => void;
}

const QuizQuestion = ({ question, selectedAnswer, showResult, onAnswerSelect }: QuizQuestionProps) => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-xl">{question.question}</CardTitle>
      </CardHeader>
      <CardContent>
        {!showResult ? (
          <RadioGroup value={selectedAnswer} onValueChange={onAnswerSelect}>
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
                <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        ) : (
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <div 
                key={index} 
                className={`p-3 rounded-lg border-2 ${
                  index === question.correct 
                    ? 'border-green-500 bg-green-50' 
                    : index === parseInt(selectedAnswer) && index !== question.correct
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200'
                }`}
              >
                <div className="flex items-center">
                  {index === question.correct && <CheckCircle className="h-5 w-5 text-green-500 mr-2" />}
                  {index === parseInt(selectedAnswer) && index !== question.correct && <XCircle className="h-5 w-5 text-red-500 mr-2" />}
                  <span className={index === question.correct ? 'font-semibold' : ''}>{option}</span>
                </div>
              </div>
            ))}
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">{question.explanation}</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QuizQuestion;
