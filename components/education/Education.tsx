import EducationHeader from "./EducationHeader";
import EducationCard from "./EducationCard";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section className="w-full py-10 md:py-20 px-4 md:px-8 flex flex-col space-y-8 items-center">
      <div className="w-full max-w-7xl mx-auto">
        <EducationHeader  />
        
        {/* Pass the data to the card component */}
        <EducationCard data={education} />
      </div>
    </section>
  );
}