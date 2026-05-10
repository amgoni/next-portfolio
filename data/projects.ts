export interface Project {
  title: string;
  description: string;
  liveUrl: string;
  liveUrlLabel?: string;
  codeUrl?: string;
  image: string;
  imageAlt: string;
}

export const projects: Project[] = [
  // {
  //   title: "Flexnote",
  //   description:
  //     "Flexnote is a simple note-taking app that allows you to create, edit, and delete notes. You can also organize your notes into folders. I developed the web app using React and Firebase. It offers a straightforward interface for users to create, edit, and delete notes, organize notes into folders, and easily navigate through notes and folders.",
  //   liveUrl: "https://flexnoteproject.netlify.app",
  //   codeUrl: "https://github.com/amgoni/flexnote",
  //   image: "/img/flexnote.png",
  //   imageAlt: "Flexnote project screenshot",
  // },
  // {
  //   title: "Tiptop Apartments",
  //   description:
  //     "Tiptop Apartments is a short-let booking website that allows users to search for and book apartments offered by Tiptop for short stays. I developed the production-level web app using React and integrated a proprietary backend. It offers a user-friendly interface for users to search for apartments, view detailed information about them, and book apartments for short stays.",
  //   liveUrl: "https://tiptopapts.com",
  //   image: "/img/tiptop.png",
  //   imageAlt: "Tiptop Apartments project screenshot",
  // },
  {
    title: "Recon Brothers E-commerce platform",
    description:
      "Recon Brothers E-commerce platform is a fullstack e-commerce application built with Next.js and Vendure, designed to deliver a flexible and customizable online shopping experience. It features a robust frontend paired with a powerful admin dashboard, enabling administrators to manage products, content, and even customize aspects of the user interface with ease.",
    liveUrl: "https://reconbrothers.com/",
    image: "/img/reconbrothers.png",
    imageAlt: "Recon Brothers project screenshot",
  },
  {
    title: "Masaat London E-commerce platform",
    description:
      "Masaat London E-commerce platform is a luxury e-commerce website built with Next.js and Shopify, developed to deliver a refined, high-end digital shopping experience. The platform features a luxurious frontend with smooth animations and a visually elegant UI, reflecting the brand’s luxury identity. Communication between the custom Next.js frontend and the Shopify backend is handled via GraphQL using the Shopify Storefront API, enabling seamless product data synchronization and dynamic content rendering.",
    liveUrl: "https://www.masaatlondon.co.uk/",
    image: "/img/masaatlondon.png",
    imageAlt: "Masaat London project screenshot",
  },
  {
    title: "Focal Leap Tenant Management System",
    description:
      "Focal Leap Tenant Management System is a web application built with Next.js, designed for real estate firms to efficiently manage tenants and property operations. The platform features an administrative dashboard and a user-facing portal, enabling tenant management, payment processing through Paystack integration, and streamlined record tracking.",
    liveUrl: "https://tms-delta-beryl.vercel.app/",
    liveUrlLabel: "See Demo",
    image: "/img/focalleap.png",
    imageAlt: "Focal Leap Tenant Management System screenshot",
  },
  {
    title: "Studox",
    description:
      "Studox is a web application that allows students to search for and access study materials for their courses. I developed the web app using React and Firebase. It offers a simple and intuitive interface for students to search for study materials, access detailed information about them, and easily navigate through search results.",
    liveUrl: "https://studox.netlify.app",
    codeUrl: "https://github.com/amgoni/studox",
    image: "/img/studox.png",
    imageAlt: "Studox project screenshot",
  },
];
