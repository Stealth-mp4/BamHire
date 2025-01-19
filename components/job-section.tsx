"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {fromBottomToTop} from "@/components/animations"
export function JobSection() {
  return (
    <section className="bg-gray-50 py-16 text-center lg:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <motion.h2
            initial={fromBottomToTop.initial}
            whileInView={fromBottomToTop.whileInView}
            transition={fromBottomToTop.transitition}
            viewport={fromBottomToTop.viewPort}
        className="mb-4 text-4xl text-[#0080ff] font-bold leading-tight lg:text-5xl">
          Looking for work? BAM.
          <br />
          The right job changes everything.
        </motion.h2>
        <motion.p
         initial={fromBottomToTop.initial}
         whileInView={fromBottomToTop.whileInView}
         transition={fromBottomToTop.transitition}
         viewport={fromBottomToTop.viewPort}
        className="mb-8 text-lg text-muted-foreground">
          Break down barriers and find your next opportunity with BAM Hire.
        </motion.p>
        <motion.span
            initial={fromBottomToTop.initial}
            whileInView={fromBottomToTop.whileInView}
            transition={fromBottomToTop.transitition}
            viewport={fromBottomToTop.viewPort}
        >
        <Button
          asChild
          className="w-fit bg-[#0080ff] text-white hover:bg-[#ae7a52]"
        >
          <Link href="/jobs">FIND A JOB</Link>
        </Button>
        </motion.span>
      </div>
    </section>
  );
}
