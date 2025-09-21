import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import Link from 'next/link';
import {ArrowRight} from 'lucide-react';
import {navigationLinks} from '@/lib/navigation';

export default function Home() {
  const guideLinks = navigationLinks.filter(link => link.href !== '/');

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-primary">
          Welcome to PeakDeploy
        </h1>
        <p className="text-lg text-muted-foreground">
          Your comprehensive guide to deploying React/Vite projects to Firebase
          with enterprise-grade configuration.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {guideLinks.map(link => (
          <Card
            key={link.href}
            className="flex transform flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-lg font-medium">{link.label}</CardTitle>
              <link.icon className="h-6 w-6 text-muted-foreground" />
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-muted-foreground">
                Step-by-step instructions for {link.label.toLowerCase()}.
              </p>
            </CardContent>
            <div className="p-6 pt-0">
              <Button asChild className="w-full">
                <Link href={link.href}>
                  Go to Section <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
