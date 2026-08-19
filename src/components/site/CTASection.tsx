import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";

export function CTASection({
  title,
  text,
  label = "Agendar consultoria gratuita",
}: {
  title: string;
  text: string;
  label?: string;
}) {
  return (
    <section className="bg-gradient-to-br from-navy to-navy-dark py-20">
      <Reveal as="div" className="container-edit max-w-2xl text-center mx-auto">
        <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.4rem)] font-bold text-white">
          {title}
        </h2>
        <p className="mt-4 text-white/80">{text}</p>
        <Link to="/orcamento" className="btn-primary mt-8 inline-flex">
          {label}
        </Link>
      </Reveal>
    </section>
  );
}
