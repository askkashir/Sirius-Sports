'use client';
import {motion} from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const processSteps = [
  {
    step: 1,
    title: 'Research & Planning',
    description: 'Understanding market needs and athlete requirements',
  },
  {
    step: 2,
    title: 'Design & Innovation',
    description: 'Creating cutting-edge sportswear concepts and prototypes',
  },
  {
    step: 3,
    title: 'Technology Integration',
    description: 'Building modern e-commerce and user experiences',
  },
  {
    step: 4,
    title: 'Launch & Growth',
    description: 'Bringing premium sportswear to market with excellence',
  },
];

const containerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {opacity: 0, y: 20},
  visible: {opacity: 1, y: 0},
};

export function DevelopmentProcess() {
  return (
    <motion.section
      className="py-24 sm:py-32"
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      viewport={{once: true, amount: 0.2}}
    >
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Development Process
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            From concept to launch, we build every element with precision and
            innovation
          </p>
        </div>
        <motion.div
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
        >
          {processSteps.map(step => (
            <motion.div key={step.title} variants={itemVariants}>
              <Card className="transform text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-black/40 bg-secondary/30">
                <CardHeader className="items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                    {step.step}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold">
                    {step.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-muted-foreground">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
