
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      question: "Who founded the city of Santiago in 1541?",
      options: ["Pedro de Valdivia", "Diego de Almagro", "Francisco Pizarro", "Hernán Cortés"],
      correct: 0,
      explanation: "Pedro de Valdivia founded Santiago on February 12, 1541, naming it Santiago del Nuevo Extremo.",
      difficulty: 'easy'
    },
    {
      id: 2,
      question: "What was the name of the fierce Mapuche warrior who led resistance against the Spanish?",
      options: ["Caupolicán", "Lautaro", "Galvarino", "Colocolo"],
      correct: 1,
      explanation: "Lautaro was a young Mapuche warrior who learned Spanish military tactics and led successful campaigns against the conquistadors.",
      difficulty: 'medium'
    },
    {
      id: 3,
      question: "In what year did Chile declare its independence?",
      options: ["1810", "1817", "1818", "1820"],
      correct: 2,
      explanation: "Chile formally declared independence on February 12, 1818, though the process began in 1810.",
      difficulty: 'easy'
    },
    {
      id: 4,
      question: "Who is known as the 'Father of Chilean Independence'?",
      options: ["José Miguel Carrera", "Bernardo O'Higgins", "José de San Martín", "Manuel Rodríguez"],
      correct: 1,
      explanation: "Bernardo O'Higgins is considered the Father of Chilean Independence and served as the first Supreme Director.",
      difficulty: 'easy'
    },
    {
      id: 5,
      question: "The War of the Pacific (1879-1884) was fought between Chile and which countries?",
      options: ["Argentina and Bolivia", "Peru and Bolivia", "Peru and Ecuador", "Bolivia and Brazil"],
      correct: 1,
      explanation: "The War of the Pacific was fought between Chile against Peru and Bolivia, resulting in Chilean territorial gains.",
      difficulty: 'medium'
    },
    {
      id: 6,
      question: "Which Chilean poet won the Nobel Prize in Literature in 1945?",
      options: ["Pablo Neruda", "Gabriela Mistral", "Vicente Huidobro", "Nicanor Parra"],
      correct: 1,
      explanation: "Gabriela Mistral was the first Latin American woman to win the Nobel Prize in Literature in 1945.",
      difficulty: 'medium'
    },
    {
      id: 7,
      question: "What was the primary export that made Chile wealthy in the late 19th century?",
      options: ["Copper", "Nitrates", "Silver", "Wheat"],
      correct: 1,
      explanation: "Nitrates from the northern desert made Chile extremely wealthy during the late 19th and early 20th centuries.",
      difficulty: 'medium'
    },
    {
      id: 8,
      question: "Who was the first woman president of Chile?",
      options: ["Soledad Alvear", "Michelle Bachelet", "Evelyn Matthei", "Carolina Tohá"],
      correct: 1,
      explanation: "Michelle Bachelet served as Chile's first female president from 2006-2010 and again from 2014-2018.",
      difficulty: 'easy'
    },
    {
      id: 9,
      question: "The military coup that overthrew Salvador Allende occurred on which date?",
      options: ["September 11, 1973", "September 4, 1973", "October 11, 1973", "August 11, 1973"],
      correct: 0,
      explanation: "The military coup led by Augusto Pinochet occurred on September 11, 1973.",
      difficulty: 'medium'
    },
    {
      id: 10,
      question: "What was the name of Salvador Allende's political coalition?",
      options: ["Popular Front", "Popular Unity", "Socialist Alliance", "Left Coalition"],
      correct: 1,
      explanation: "Popular Unity (Unidad Popular) was Allende's left-wing political coalition that won the 1970 election.",
      difficulty: 'hard'
    },
    {
      id: 11,
      question: "Which indigenous group primarily inhabited central Chile before Spanish arrival?",
      options: ["Incas", "Mapuche", "Atacameños", "Tehuelches"],
      correct: 1,
      explanation: "The Mapuche people were the dominant indigenous group in central and southern Chile.",
      difficulty: 'easy'
    },
    {
      id: 12,
      question: "What was the 'Chicago Boys' economic policy implemented in Chile?",
      options: ["Import substitution", "Neoliberalism", "State socialism", "Mixed economy"],
      correct: 1,
      explanation: "The 'Chicago Boys' implemented neoliberal economic policies based on free-market principles during the Pinochet era.",
      difficulty: 'hard'
    },
    {
      id: 13,
      question: "Which battle secured Chilean independence in 1817?",
      options: ["Battle of Rancagua", "Battle of Chacabuco", "Battle of Maipú", "Battle of Cancha Rayada"],
      correct: 1,
      explanation: "The Battle of Chacabuco on February 12, 1817, was the decisive victory that secured Chilean independence.",
      difficulty: 'medium'
    },
    {
      id: 14,
      question: "Who was known as the 'Guerrillero of Death' during the independence wars?",
      options: ["José Miguel Carrera", "Manuel Rodríguez", "Ramón Freire", "Francisco de la Lastra"],
      correct: 1,
      explanation: "Manuel Rodríguez was a folk hero known for his guerrilla warfare tactics against Spanish forces.",
      difficulty: 'hard'
    },
    {
      id: 15,
      question: "What was the period called when Spanish forces reconquered Chile (1814-1817)?",
      options: ["Reconquista", "Restauración", "Reconstitución", "Reconvención"],
      correct: 0,
      explanation: "The Reconquista was the period when Spanish forces under Mariano Osorio reconquered Chile.",
      difficulty: 'hard'
    },
    {
      id: 16,
      question: "Which Chilean president implemented major land reforms in the 1960s?",
      options: ["Jorge Alessandri", "Eduardo Frei Montalva", "Carlos Ibáñez", "Gabriel González Videla"],
      correct: 1,
      explanation: "Eduardo Frei Montalva implemented significant land reforms as part of his 'Revolution in Liberty' program.",
      difficulty: 'medium'
    },
    {
      id: 17,
      question: "What was the name of the truth commission that investigated human rights violations?",
      options: ["Rettig Commission", "Valech Commission", "Truth Commission", "Reconciliation Commission"],
      correct: 0,
      explanation: "The Rettig Commission (officially the National Commission for Truth and Reconciliation) investigated human rights violations.",
      difficulty: 'hard'
    },
    {
      id: 18,
      question: "Which desert in northern Chile is considered the driest in the world?",
      options: ["Atacama Desert", "Patagonian Desert", "Monte Desert", "Sechura Desert"],
      correct: 0,
      explanation: "The Atacama Desert is recognized as the driest non-polar desert in the world.",
      difficulty: 'easy'
    },
    {
      id: 19,
      question: "Who wrote the influential political essay 'The Portalian Republic'?",
      options: ["Diego Portales", "Andrés Bello", "José Victorino Lastarria", "Alberto Edwards"],
      correct: 3,
      explanation: "Alberto Edwards wrote about the 'Portalian Republic' concept, referring to Diego Portales' political system.",
      difficulty: 'hard'
    },
    {
      id: 20,
      question: "What was the main cause of the War of the Pacific?",
      options: ["Territorial disputes", "Nitrate deposits", "Trade routes", "Religious differences"],
      correct: 1,
      explanation: "Control over nitrate deposits in the Atacama Desert was the primary cause of the War of the Pacific.",
      difficulty: 'medium'
    },
    {
      id: 21,
      question: "Which Chilean city was the capital before Santiago?",
      options: ["La Serena", "Valparaíso", "There was none", "Concepción"],
      correct: 2,
      explanation: "Santiago has been Chile's capital since its founding in 1541; there was no previous capital city.",
      difficulty: 'medium'
    },
    {
      id: 22,
      question: "What was the 'Plebiscite of 1988' about?",
      options: ["New constitution", "Pinochet's continuation", "Independence referendum", "Regional autonomy"],
      correct: 1,
      explanation: "The 1988 plebiscite asked Chileans to vote 'Yes' or 'No' on extending Pinochet's presidency for 8 more years.",
      difficulty: 'medium'
    },
    {
      id: 23,
      question: "Who was the last president before the 1973 military coup?",
      options: ["Eduardo Frei Montalva", "Jorge Alessandri", "Salvador Allende", "Carlos Ibáñez"],
      correct: 2,
      explanation: "Salvador Allende was the democratically elected president who was overthrown in the 1973 coup.",
      difficulty: 'easy'
    },
    {
      id: 24,
      question: "What was the name of the economic crisis that hit Chile in 1982-1983?",
      options: ["The Great Depression", "The Debt Crisis", "The Banking Crisis", "The Currency Crisis"],
      correct: 1,
      explanation: "Chile suffered a severe debt crisis in 1982-1983, leading to massive unemployment and economic recession.",
      difficulty: 'medium'
    },
    {
      id: 25,
      question: "Which Chilean won the Nobel Prize in Literature in 1971?",
      options: ["Gabriela Mistral", "Pablo Neruda", "Isabel Allende", "Roberto Bolaño"],
      correct: 1,
      explanation: "Pablo Neruda won the Nobel Prize in Literature in 1971 for his poetry.",
      difficulty: 'easy'
    },
    {
      id: 26,
      question: "What was the 'Matanza del Seguro Obrero' (1938)?",
      options: ["Labor strike", "Political massacre", "Economic reform", "Military uprising"],
      correct: 1,
      explanation: "The Seguro Obrero Massacre was when police killed young National Socialists attempting a coup in 1938.",
      difficulty: 'hard'
    },
    {
      id: 27,
      question: "Who was Chile's first president after return to democracy in 1990?",
      options: ["Eduardo Frei Ruiz-Tagle", "Patricio Aylwin", "Ricardo Lagos", "Michelle Bachelet"],
      correct: 1,
      explanation: "Patricio Aylwin was Chile's first president after the return to democracy, serving from 1990-1994.",
      difficulty: 'medium'
    },
    {
      id: 28,
      question: "What was the 'Revolution of 1891' primarily about?",
      options: ["Social reforms", "Constitutional crisis", "Economic policies", "Territorial disputes"],
      correct: 1,
      explanation: "The 1891 Civil War was a constitutional crisis over the balance of power between president and congress.",
      difficulty: 'hard'
    },
    {
      id: 29,
      question: "Which European country had the largest immigration to Chile in the 19th century?",
      options: ["Spain", "Germany", "Italy", "France"],
      correct: 1,
      explanation: "German immigration to southern Chile was particularly significant in the 19th century, especially to Valdivia and Osorno.",
      difficulty: 'medium'
    },
    {
      id: 30,
      question: "What percentage of 'Yes' votes was needed in the 1988 plebiscite for Pinochet to continue?",
      options: ["Simple majority", "60%", "66%", "75%"],
      correct: 0,
      explanation: "A simple majority (over 50%) of 'Yes' votes would have extended Pinochet's presidency, but 'No' won with 56%.",
      difficulty: 'hard'
    }
  ];

  useEffect(() => {
    if (!startTime) {
      setStartTime(new Date());
    }
  }, []);

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleNextQuestion = () => {
    const answerIndex = parseInt(selectedAnswer);
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer('');
      setShowResult(false);
    } else {
      setQuizCompleted(true);
      setEndTime(new Date());
      
      // Save incorrect answers to localStorage for error bin
      const incorrectAnswers = questions.filter((q, index) => newAnswers[index] !== q.correct);
      const existingErrors = JSON.parse(localStorage.getItem('errorBin') || '[]');
      const updatedErrors = [...existingErrors, ...incorrectAnswers.filter(q => 
        !existingErrors.some(existing => existing.id === q.id)
      )];
      localStorage.setItem('errorBin', JSON.stringify(updatedErrors));
    }
  };

  const handleShowResult = () => {
    setShowResult(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setShowResult(false);
    setAnswers([]);
    setQuizCompleted(false);
    setStartTime(new Date());
    setEndTime(null);
  };

  const getScore = () => {
    return answers.filter((answer, index) => answer === questions[index].correct).length;
  };

  const getTimeSpent = () => {
    if (startTime && endTime) {
      const diff = Math.floor((endTime.getTime() - startTime.getTime()) / 1000);
      const minutes = Math.floor(diff / 60);
      const seconds = diff % 60;
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
    return '0:00';
  };

  if (quizCompleted) {
    const score = getScore();
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
        <header className="bg-white/80 backdrop-blur-sm border-b border-red-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Home
                </Button>
              </Link>
              <h1 className="text-xl font-bold text-gray-900">Quiz Results</h1>
            </div>
          </div>
        </header>

        <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <Trophy className={`mx-auto h-16 w-16 mb-4 ${percentage >= 70 ? 'text-yellow-500' : 'text-gray-400'}`} />
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Quiz Completed!</h2>
            <p className="text-xl text-gray-600">
              You scored {score} out of {questions.length} questions
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="text-6xl font-bold mb-4" style={{ color: percentage >= 70 ? '#10b981' : percentage >= 50 ? '#f59e0b' : '#ef4444' }}>
                {percentage}%
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <div className="font-semibold">Time Spent</div>
                  <div className="flex items-center justify-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {getTimeSpent()}
                  </div>
                </div>
                <div>
                  <div className="font-semibold">Grade</div>
                  <div className="font-bold">
                    {percentage >= 90 ? 'Excellent!' : percentage >= 70 ? 'Good Job!' : percentage >= 50 ? 'Not Bad!' : 'Keep Studying!'}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Button onClick={resetQuiz} className="bg-red-600 hover:bg-red-700 mr-4">
              <RotateCcw className="h-4 w-4 mr-2" />
              Retry Quiz
            </Button>
            <Link to="/error-bin">
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                Review Mistakes
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-red-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Home
              </Button>
            </Link>
            <div className="text-center">
              <h1 className="text-xl font-bold text-gray-900">Chilean History Quiz</h1>
              <p className="text-sm text-gray-600">Question {currentQuestion + 1} of {questions.length}</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">
                Difficulty: <span className={`font-semibold ${
                  currentQ.difficulty === 'easy' ? 'text-green-600' :
                  currentQ.difficulty === 'medium' ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {currentQ.difficulty}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Progress */}
        <div className="mb-8">
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">{currentQ.question}</CardTitle>
          </CardHeader>
          <CardContent>
            {!showResult ? (
              <RadioGroup value={selectedAnswer} onValueChange={handleAnswerSelect}>
                {currentQ.options.map((option, index) => (
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
                {currentQ.options.map((option, index) => (
                  <div 
                    key={index} 
                    className={`p-3 rounded-lg border-2 ${
                      index === currentQ.correct 
                        ? 'border-green-500 bg-green-50' 
                        : index === parseInt(selectedAnswer) && index !== currentQ.correct
                        ? 'border-red-500 bg-red-50'
                        : 'border-gray-200'
                    }`}
                  >
                    <div className="flex items-center">
                      {index === currentQ.correct && <CheckCircle className="h-5 w-5 text-green-500 mr-2" />}
                      {index === parseInt(selectedAnswer) && index !== currentQ.correct && <XCircle className="h-5 w-5 text-red-500 mr-2" />}
                      <span className={index === currentQ.correct ? 'font-semibold' : ''}>{option}</span>
                    </div>
                  </div>
                ))}
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">{currentQ.explanation}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex justify-between">
          <div>
            {currentQuestion > 0 && !showResult && (
              <Button 
                variant="outline" 
                onClick={() => setCurrentQuestion(currentQuestion - 1)}
              >
                Previous
              </Button>
            )}
          </div>
          <div>
            {!showResult ? (
              <Button 
                onClick={handleShowResult}
                disabled={!selectedAnswer}
                className="bg-red-600 hover:bg-red-700"
              >
                Show Answer
              </Button>
            ) : (
              <Button 
                onClick={handleNextQuestion}
                className="bg-red-600 hover:bg-red-700"
              >
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
