import type { ReactNode } from "react";
import { Reveal } from "@/components/site/Reveal";

export function PageHero({ tag, title, lead }: { tag: string; title: ReactNode; lead?: string }) {
  return (
    <section className="bg-gradient-to-b from-secondary/60 to-background pb-16 pt-28 md:pb-20 md:pt-32">
      <Reveal as="div" className="container-edit max-w-3xl text-center mx-auto">
        <span className="section-tag">{tag}</span>
        <h1 className="font-display text-[clamp(2rem,5vw,3.2rem)] font-bold leading-[1.15] text-navy">
          {title}
        </h1>
        {lead && <p className="mt-5 text-[1.05rem] text-gray-700">{lead}</p>}
      </Reveal>
    </section>
  );
}
