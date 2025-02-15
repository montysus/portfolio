import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="mx-auto max-w-3xl space-y-8 text-center">
        <h1 className="text-4xl font-light tracking-tight md:text-6xl">
          Engineering the
          <br />
          Future of Robotics
        </h1>
        <p className="mx-auto max-w-xl text-lg text-muted-foreground">
          Robotics engineer and drone pilot with a deep love for innovation and
          problem-solving. Bridging the gap between theory and real-world
          applications.
        </p>
        <div className="flex justify-center gap-6">
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-sm transition-colors hover:text-primary"
          >
            View Experience
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
