import HeroContent from "./HeroContent";
import HeroCode from "./HeroCode";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen top-1 pt-32 pb-20 overflow-hidden flex flex-col justify-center">
      {/* Background Glows */}
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-10">
          <HeroContent />
          <HeroCode />
        </div>

        <HeroStats />
      </div>
    </section>
  );
}