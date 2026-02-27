import Image from "next/image";
import Reveal from "@/components/ui/reveal";
import Button from "@/components/ui/button";

const skills = [
  "Web Development",
  "User Experience",
  "Content Writing",
  "Digital Marketing",
  "IT Support",
];

const tools = [
  "HTML/CSS/Sass",
  "Javascript/ReactJS/NextJS",
  "Firebase",
  "MS Office",
  "Canva",
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-linear-to-br from-[#3a7bd5] to-dark-text text-white"
    >
      <Reveal variant="up">
        <h1 className="text-5xl max-md:text-[1.8em] font-bold w-fit mx-auto pt-12">
          ABOUT ME
        </h1>
      </Reveal>

      <div className="w-4/5 mx-auto flex flex-col items-center py-8 gap-4">
        {/* Image + Bio */}
        <div className="flex max-md:flex-col items-center gap-4">
          <Reveal
            variant="left"
            className="w-[30%] max-md:w-full flex justify-center items-center"
          >
            <Image
              src="/img/profile.jpg"
              alt="Amin Mohammed Goni — Front-End Web Developer"
              width={400}
              height={400}
              className="w-full max-md:w-[70%] h-auto rounded-sm shadow-lg"
              priority
            />
          </Reveal>
          <Reveal variant="right" className="w-[70%] max-md:w-full">
            <p className="text-xl max-md:text-base leading-9 max-md:leading-relaxed">
              I am a passionate front-end web developer dedicated to integrating
              UX design principles into the creation of modern, scalable,
              accessible, and responsive websites. I am thrilled by how UX
              design has revolutionized the way we approach developing websites,
              applications, devices, and various products worldwide.
              <br />
              <br />
              In addition to my technical skills, I possess a knack for writing.
              I actively engage in producing captivating content for blogs,
              leveraging my ability to translate intricate technical concepts
              into accessible and informative articles. This allows me to
              connect with a diverse audience and contribute knowledge to the
              developer community.
              <br />
              <br />
              Outside of coding and design, you&apos;ll often find me indulging
              in my hobbies such as watching football, movies, or TV shows,
              reading, or playing video games.
            </p>
          </Reveal>
        </div>

        {/* Skills & Tools */}
        <div className="flex max-md:flex-col w-full justify-evenly gap-6">
          <Reveal variant="right" delay={0.3}>
            <h3 className="text-2xl max-md:text-xl font-bold mb-2">
              My Skills:
            </h3>
            <ul className="leading-8 max-md:leading-6 list-none">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal variant="right" delay={0.5}>
            <h3 className="text-2xl max-md:text-xl font-bold mb-2">
              My Tools:
            </h3>
            <ul className="leading-8 max-md:leading-6 list-none">
              {tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal variant="up" delay={0.4}>
          <Button
            asChild
            color="white"
            variant="outlined"
            className="mb-10 mt-2"
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              View Resume
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
