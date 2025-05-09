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
    title: 'My Blog',
    description:
      'A blog powered by Gatsby and Markdown.',
    logo: '/logos/blog.svg',
    link: 'https:/alancj731.github.io/myblog/',
    slug: 'blog',
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
    title: 'Reinforcment Learning',
    description:
      'A tic-tac-toe game powered by reinforcement learning.',
    logo: '/logos/ttt.svg',
    link: 'https://rltictactoe.vercel.app/',
    slug: 'tictactoe',
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
