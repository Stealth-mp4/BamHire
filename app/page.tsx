import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NewsSection } from "@/components/news-section";
import { AwardsSection } from "@/components/awards-section";
import { PartnerSection } from "@/components/partner-section";
import { JobSection } from "@/components/job-section";

export default function Home() {
  return (
    <main className="pt-20">
      <section className="grid md:grid-cols-2">
        <div className="flex flex-col justify-center bg-[#001e3b] px-4 py-20 text-white md:px-12 md:py-32">
          <div className="mx-auto max-w-xl">
            <h1 className="mb-6 text-4xl font-medium leading-tight md:text-5xl">
              Your Talent. Our Focus.
            </h1>
            
            <Button
              asChild
              variant="outline"
              className="w-fit bg-transparent text-[#0080ff] bg-white  "
            >
              <Link href="/jobs" className="group">
                Explore jobs
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-square md:aspect-auto">
          <Image
            src="/business3.jpg"
            alt="Professional at work"
            fill
            className="object-cover bg-[#f4f4f4]" 
            priority
          />
        </div>
      </section>


      {/* Other sections */}
      <NewsSection />
      <AwardsSection />
      {/* <TalentSection /> */}
      <PartnerSection />
      <JobSection />
    </main>
  );
}
