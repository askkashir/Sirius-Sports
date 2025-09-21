'use client';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {Textarea} from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {useState} from 'react';
import {
  optimizeViteConfig,
  OptimizeViteConfigOutput,
} from '@/ai/flows/optimize-vite-config';
import {Loader2, Sparkles, Wand2} from 'lucide-react';
import {CodeBlock} from '@/components/code-block';
import {useToast} from '@/hooks/use-toast';
import {Alert, AlertDescription, AlertTitle} from '@/components/ui/alert';

const formSchema = z.object({
  projectType: z.string().min(1, 'Project type is required.'),
  projectDetails: z.string().min(50, {
    message:
      'Please provide more details about your project (at least 50 characters). Include dependencies, existing config, etc.',
  }),
});

export default function OptimizePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<OptimizeViteConfigOutput | null>(null);
  const {toast} = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectType: 'React',
      projectDetails: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResult(null);
    try {
      const response = await optimizeViteConfig(values);
      setResult(response);
    } catch (error) {
      console.error('Error optimizing Vite config:', error);
      toast({
        variant: 'destructive',
        title: 'Optimization Failed',
        description:
          'An error occurred while generating the configuration. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">AI Build Optimizer</h1>
        <p className="text-muted-foreground">
          Generate an optimized Vite configuration for your project using AI.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Project Details</CardTitle>
          <CardDescription>
            Provide information about your project for a tailored
            configuration.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="projectType"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Project Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a project type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="React">React</SelectItem>
                        <SelectItem value="Vue">Vue</SelectItem>
                        <SelectItem value="Svelte">Svelte</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="projectDetails"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Project Details</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., Paste your package.json, current vite.config.js, and describe your project's structure and main libraries..."
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
                )}
                Optimize Configuration
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {isLoading && (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
          <h3 className="mt-4 text-xl font-semibold">
            Optimizing your configuration...
          </h3>
          <p className="mt-1 text-muted-foreground">
            The AI is analyzing your project. This may take a moment.
          </p>
        </div>
      )}

      {result && (
        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Optimization Results</h2>
          <Card>
            <CardHeader>
              <CardTitle>Optimized Vite Configuration</CardTitle>
              <CardDescription>
                Here is the AI-generated `vite.config.js` for your project.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CodeBlock
                code={result.optimizedConfig}
                language="javascript"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recommendations</CardTitle>
              <CardDescription>
                Follow these suggestions for further performance improvements.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Alert>
                <Wand2 className="h-4 w-4" />
                <AlertTitle>Expert Advice</AlertTitle>
                <AlertDescription>
                  <pre className="whitespace-pre-wrap font-sans text-sm">
                    {result.recommendations}
                  </pre>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
