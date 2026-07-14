import AboutContent from "./AboutContent";
import AboutStats from "./AboutStats";
import AboutQuote from "./AboutQuote";

export default function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 px-4 md:px-8 flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        {/* Top 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
          <AboutContent />
          <AboutStats />
        </div>
        
        {/* Bottom Full-Width Quote */}
        <AboutQuote />
      </div>
    </section>
  );
}