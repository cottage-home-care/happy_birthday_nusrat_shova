"use client";

import { useEffect, useRef, useState } from "react";
import { Heart, Cake } from "lucide-react";
import Image from "next/image";

export default function WisherSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-4 py-12 md:py-20"
    >
      {/* Background gradient accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Cake className="w-8 h-8 text-accent animate-bounce" />
            <h2 className="text-4xl md:text-6xl font-bold text-foreground text-balance">
              Birthday Wishes
            </h2>
            <Heart className="w-8 h-8 text-primary animate-pulse" />
          </div>
        </div>

        <div className="max-w-xl mx-auto items-center">
          {/* Wisher photo */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="p-8 md:p-10 bg-gradient-to-br from-card via-card/95 to-primary/5 backdrop-blur-sm border-2 border-border/50 shadow-2xl hover:shadow-accent/20 transition-all duration-500">
              <div className="space-y-6">
                <div className="flex flex-col items-center gap-3 pb-4 border-b border-border/50">
                  <Image
                    src="/shahjalal_rafi.jpg"
                    alt="Shahjalal Rafi"
                    width={250}
                    height={250}
                    className=" object-cover rounded-4xl"
                  />
                  <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      From
                    </h3>
                    <p className="text-xl text-red-500">Shahjalal Rafi</p>
                    <p className="text-sm text-muted-foreground">
                      SOFTWARE & IT Team
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-foreground/90 leading-relaxed">
                  <p className="text-base md:text-lg text-pretty">
                    {"Dear CEO,"}
                  </p>
                  <p className="text-base md:text-lg text-pretty">
                    {
                      "On this special day, I want to express my heartfelt gratitude for your exceptional leadership and vision. Your dedication and passion inspire us every day to reach new heights."
                    }
                  </p>
                  <p className="text-base md:text-lg text-pretty">
                    {
                      "May this birthday bring you joy, success, and countless moments of happiness. Here's to celebrating you today and always!"
                    }
                  </p>
                  <p className="text-base md:text-lg text-pretty font-semibold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                    {
                      "Wishing you the happiest of birthdays and an extraordinary year ahead!"
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative element */}
        <div
          className={`text-center mt-12 md:mt-16 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-full border border-border/50">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm md:text-base font-medium text-foreground">
              {"Cheers to many more years of success!"}
            </span>
            <Sparkles className="w-5 h-5 text-secondary animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Sparkles({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  );
}
