export interface Project {
  title: string;
  description: string;
  liveUrl: string;
  codeUrl?: string;
  image: string;
  imageAlt: string;
}

export const projects: Project[] = [
  {
    title: "Flexnote",
    description:
      "Flexnote is a simple note-taking app that allows you to create, edit, and delete notes. You can also organize your notes into folders. I developed the web app using React and Firebase. It offers a straightforward interface for users to create, edit, and delete notes, organize notes into folders, and easily navigate through notes and folders.",
    liveUrl: "https://flexnoteproject.netlify.app",
    codeUrl: "https://github.com/amgoni/flexnote",
    image: "/img/project1.png",
    imageAlt: "Flexnote project screenshot",
  },
  {
    title: "Tiptop Apartments",
    description:
      "Tiptop Apartments is a short-let booking website that allows users to search for and book apartments offered by Tiptop for short stays. I developed the production-level web app using React and integrated a proprietary backend. It offers a user-friendly interface for users to search for apartments, view detailed information about them, and book apartments for short stays.",
    liveUrl: "https://tiptopapts.com",
    image: "/img/project2.png",
    imageAlt: "Tiptop Apartments project screenshot",
  },
  {
    title: "Studox",
    description:
      "Studox is a web application that allows students to search for and access study materials for their courses. I developed the web app using React and Firebase. It offers a simple and intuitive interface for students to search for study materials, access detailed information about them, and easily navigate through search results.",
    liveUrl: "https://studox.netlify.app",
    codeUrl: "https://github.com/amgoni/studox",
    image: "/img/project4.png",
    imageAlt: "Studox project screenshot",
  },
];
