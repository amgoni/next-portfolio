import Reveal from "@/components/ui/reveal";
import Button from "@/components/ui/button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-linear-to-br from-[#3a7bd5] to-dark-text text-white min-h-[50vh] max-md:min-h-0"
    >
      <div className="w-4/5 mx-auto flex flex-col items-center py-12 max-md:py-8">
        <Reveal variant="up">
          <h1 className="text-5xl max-md:text-[1.8em] font-bold py-8 max-md:py-6 max-md:text-center">
            CONTACT ME
          </h1>
        </Reveal>
        <Reveal variant="up" delay={0.3}>
          <p className="text-xl max-md:text-base max-md:text-center leading-9">
            Looking to hire a Front-End Developer or Blog Writer?
          </p>
        </Reveal>
        <Reveal variant="up" delay={0.5}>
          <Button asChild color="white" variant="outlined" className="mt-4">
            <a href="mailto:ameen.m.goney@gmail.com">E-mail Me!</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
