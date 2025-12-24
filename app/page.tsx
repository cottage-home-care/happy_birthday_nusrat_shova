import HeroSection from "./_components/HeroSection";
import WisherSection from "./_components/WisherSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/10">
      <HeroSection />
      <WisherSection />
    </main>
  );
}
