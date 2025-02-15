import type { Metadata } from "next";

import { userInfo } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  const { experiences, skills } = userInfo;

  return (
    <div className="min-h-screen px-4 py-24">
      <div className="mx-auto max-w-3xl space-y-16">
        <div className="space-y-4">
          <h1 className="text-3xl font-light md:text-4xl">About</h1>
          <p className="text-muted-foreground">
            I&apos;m a senior robotics engineering student focused on developing
            intelligent systems that solve complex real-world challenges. My
            work combines mechanical engineering, computer vision, and drone
            piloting.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-light">Experience</h2>
          <div className="relative space-y-8">
            {/* Vertical line */}
            <div className="absolute inset-y-2 left-0 w-px bg-border" />

            {experiences.map((exp, index) => (
              <div key={index} className="group relative cursor-pointer pl-8">
                <div className="absolute left-[-4px] top-2 size-2 rounded-full bg-primary/50 ring-4 ring-background transition-all duration-300 group-hover:scale-150 group-hover:bg-primary" />

                <div className="space-y-2 transition-all duration-300 group-hover:translate-x-2">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="font-medium">{exp.title}</h3>
                    <span className="text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-primary/80">{exp.company}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-light">Technical Expertise</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-lg border p-4 text-center text-sm transition-all duration-300 hover:scale-105 hover:border-primary hover:text-primary"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
