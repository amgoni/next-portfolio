import Reveal from "@/components/ui/reveal";
import Button from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-white h-[95vh] md:h-[95vh] max-md:h-[80vh]"
    >
      <div className="w-4/5 mx-auto flex flex-col justify-center items-start h-full">
        <Reveal variant="left">
          <h1 className="text-5xl max-md:text-[1.8em] font-bold bg-linear-to-br from-[#3a7bd5] to-dark-text bg-clip-text text-transparent leading-tight">
            Hi, my name is Amin Mohammed Goni.
            <br />I am a Front-End Web Developer.
          </h1>
        </Reveal>
        <Reveal variant="left" delay={0.4}>
          <Button asChild className="mt-12">
            <a href="mailto:ameen.m.goney@gmail.com">Hire Me</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
