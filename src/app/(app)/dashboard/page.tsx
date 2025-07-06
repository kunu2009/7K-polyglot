import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookText,
  Layers,
  Mic,
  Scaling,
  Wand2,
  PencilRuler,
} from "lucide-react";

const features = [
  {
    title: "Pronunciation AI",
    description: "Speak and get instant feedback.",
    icon: Mic,
    href: "/pronunciation",
    color: "bg-red-100",
    textColor: "text-red-800",
  },
  {
    title: "SRS Flashcards",
    description: "Master words with spaced repetition.",
    icon: Layers,
    href: "/flashcards",
    color: "bg-blue-100",
    textColor: "text-blue-800",
  },
  {
    title: "Grammar Tool",
    description: "Tap any word for a grammar breakdown.",
    icon: Wand2,
    href: "/grammar-tool",
    color: "bg-green-100",
    textColor: "text-green-800",
  },
  {
    title: "Vocabulary Lists",
    description: "Browse categorized word lists.",
    icon: BookText,
    href: "/vocabulary",
    color: "bg-yellow-100",
    textColor: "text-yellow-800",
  },
  {
    title: "Grammar Lessons",
    description: "Learn grammar step-by-step.",
    icon: Scaling,
    href: "/grammar",
    color: "bg-purple-100",
    textColor: "text-purple-800",
  },
  {
    title: "Practice Exercises",
    description: "Reinforce learning with quizzes.",
    icon: PencilRuler,
    href: "/practice",
    color: "bg-indigo-100",
    textColor: "text-indigo-800",
  },
];

export default function DashboardPage() {
  return (
    <div className="animate-fade-in-up">
      <header className="mb-8">
        <h1 className="text-4xl font-headline font-bold text-gray-800">
          Welcome to Samskriti
        </h1>
        <p className="text-lg text-muted-foreground mt-2">
          Your journey to mastering Sanskrit begins here.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <Link href={feature.href} key={feature.title}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 hover:border-primary cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${feature.color}`}
                  >
                    <feature.icon className={`w-6 h-6 ${feature.textColor}`} />
                  </div>
                  <CardTitle className="font-headline text-xl">
                    {feature.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
