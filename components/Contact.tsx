import Reveal from "@/components/ui/reveal";
import Button from "@/components/ui/button";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/amgoni",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amingoni/",
    icon: FaLinkedinIn,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="to-dark-text bg-linear-to-br from-[#3a7bd5] py-16 text-white dark:bg-black dark:bg-none"
    >
      <div className="flex flex-col items-center gap-4">
        <Reveal variant="up">
          <h2 className="font-montserrat mb-4 text-center text-3xl font-bold md:text-5xl">
            CONTACT
          </h2>
        </Reveal>
        <Reveal variant="up" delay={0.1}>
          <p className="text-center text-base md:text-xl">
            Looking to hire a Web Developer?
          </p>
        </Reveal>
        <Reveal variant="up" delay={0.2}>
          <Button asChild color="white" variant="outlined" className="">
            <a href="mailto:ameen.m.goney@gmail.com">E-mail Me!</a>
          </Button>
        </Reveal>
        <ul className="mt-4 flex list-none gap-16">
          {socials.map((social, index) => (
            <Reveal variant="up" key={social.label} delay={index * 0.3}>
              <li>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-block transition-transform duration-300 hover:scale-120"
                >
                  <social.icon className="text-3xl md:text-5xl" />
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
