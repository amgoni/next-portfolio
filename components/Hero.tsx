import Reveal from "@/components/ui/reveal";
import Button from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex h-[80vh] min-h-[500px] flex-col justify-center bg-white md:h-[95vh] dark:bg-black"
    >
      <div className="mx-auto flex h-full w-[90%] flex-col items-start justify-center md:w-4/5">
        <Reveal variant="left">
          <h1 className="to-dark-text font-montserrat dark:to-silver bg-linear-to-br from-[#3a7bd5] bg-clip-text text-3xl leading-tight font-bold text-transparent md:text-5xl dark:from-white">
            Hi, my name is Amin Mohammed Goni.
            <br />I am a Web Developer.
          </h1>
        </Reveal>
        <Reveal variant="left" delay={0.4}>
          <Button asChild className="mt-8 md:mt-12">
            <a href="mailto:ameen.m.goney@gmail.com">Hire Me</a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
