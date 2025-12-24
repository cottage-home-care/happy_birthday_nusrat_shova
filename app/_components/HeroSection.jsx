"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-12 md:py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent text-balance">
              Happy Birthday!
            </h1>
            <Sparkles className="w-8 h-8 text-secondary animate-pulse" />
          </div>
          <div className="flex items-center justify-center gap-2 mb-4">
            <h1 className="text-2xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-secondary bg-clip-text text-transparent text-balance">
              Nusrat Shova Apu
            </h1>
          </div>

          <p className="text-base md:text-lg text-muted-foreground mt-3 max-w-2xl mx-auto text-pretty">
            {
              "Wishing you a year filled with success, joy, and incredible achievements"
            }
          </p>
        </div>

        {/* Photo gallery grid */}
        <div className="flex justify-center items-center gap-4 md:gap-6 max-w-5xl mx-auto">
          <div
            className={`relative group transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `300ms` }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-card to-card/80 backdrop-blur-sm border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:rotate-1">
              <div className="relative w-full h-full">
                <Image
                  src="/nusrat.png"
                  alt={`CEO photo`}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            {/* Decorative corner accent */}
            <div
              className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-pulse"
              style={{ animationDelay: `300ms` }}
            />
          </div>
        </div>

        {/* Decorative text */}
        <div
          className={`text-center mt-12 md:mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent text-balance">
            {"Here's to another year of greatness!"}
          </p>
        </div>
      </div>
    </section>
  );
}
