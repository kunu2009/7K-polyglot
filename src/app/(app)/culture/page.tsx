import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { culturalFacts } from "@/lib/sanskrit-data";
import { DiyaLampIcon } from "@/components/icons";

export default function CulturePage() {
  return (
    <div>
      <header className="mb-8">
        <h1 className="text-4xl font-headline font-bold">Cultural Insights</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Discover the rich history and context behind the Sanskrit language.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {culturalFacts.map((fact, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline text-2xl">
                <DiyaLampIcon className="text-primary h-6 w-6"/>
                {fact.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-base leading-relaxed text-muted-foreground">
                {fact.content}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
