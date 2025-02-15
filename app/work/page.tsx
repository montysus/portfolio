import { Construction } from "lucide-react";

export default function Work() {
  return (
    <div className="min-h-screen px-4 pt-24">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-light md:text-4xl">Projects</h1>
          <p className="text-muted-foreground">
            Selected robotics and automation projects showcasing technical
            innovation.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center px-4 py-24">
          <div className="relative">
            <Construction
              size={64}
              className="animate-pulse text-muted-foreground/20"
            />
            <div className="absolute inset-0 -z-10 bg-primary/5 blur-3xl" />
          </div>
          <div className="mt-8 max-w-2xl space-y-4 text-center">
            <h2 className="text-2xl font-light">
              Project Showcase Coming Soon
            </h2>
            <p className="text-muted-foreground">
              I&apos;m currently documenting my robotics projects and preparing
              detailed case studies. Check back soon to explore my work in drone
              operations, emergency response systems, and autonomous robotics
              solutions.
            </p>
          </div>

          {/* Decorative elements */}
          <div className="absolute left-1/2 top-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 animate-[spin_60s_linear_infinite] rounded-full border border-primary/5" />
          <div className="absolute left-1/2 top-1/2 size-[400px] -translate-x-1/2 -translate-y-1/2 animate-[spin_40s_linear_infinite_reverse] rounded-full border border-primary/10" />
        </div>
      </div>
    </div>
  );
}

