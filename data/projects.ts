export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'A Dynamic Portfolio Page',
    description:
      'A dynamic portfolio website built with Next.js.',
    logo: '/logos/nextjs.svg',
    link: 'https://portfolio.winnipegdatafan.com',
    slug: 'portfolio',
  },
  {
    title: 'A Chatbot',
    description:
      'A chatbot powered by RAG (Retrieval-Augmented Generation).',
    logo: '/logos/openai.svg',
    link: 'https://chat.winnipegdatafan.com/',
    slug: 'chatbot',
  },
  {
    title: '311 Wait Time',
    description:
      'Shows recent 311 call wait times in Winnipeg.',
    logo: '/logos/311.svg',
    link: 'https://311.winnipegdatafan.com/',
    slug: '311',
  },
  {
    title: 'Javascript Tetris',
    description:
      'A lightweight Tetris game developed with pure HTML, CSS, and JavaScript.',
    logo: '/logos/tetris.svg',
    link: 'https://tetris-js-nine-psi.vercel.app',
    slug: 'tetris',
  },
];
