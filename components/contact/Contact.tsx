import ContactHeader from "./ContactHeader";
import ContactCards from "./ContactCards";
import ContactForm from "./ContactForm";
import SocialConnect from "./SocialConnect";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-16 md:py-24 px-4 md:px-8 flex flex-col items-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        {/* Top 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16">
          {/* Left Side */}
          <div className="flex flex-col gap-10">
            <ContactHeader />
            <ContactCards />
          </div>

          {/* Right Side */}
          <div className="h-full">
            <ContactForm />
          </div>
        </div>

        {/* Bottom Horizontal Bar */}
        <SocialConnect />
      </div>
    </section>
  );
}
