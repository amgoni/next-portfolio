import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Reveal from "@/components/ui/reveal";

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

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-dark-text text-white min-h-[30vh] max-md:min-h-[15vh]"
    >
      <div className="w-4/5 mx-auto flex flex-col items-center justify-around h-full py-10 max-md:py-6">
        <Reveal variant="up">
          <ul className="flex list-none gap-6">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="transition-transform duration-300 hover:scale-120 inline-block"
                >
                  <social.icon className="text-5xl max-md:text-3xl" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal variant="up" delay={0.3}>
          <p className="mt-6 text-base">
            &copy; Amin Goni, {new Date().getFullYear()}
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
