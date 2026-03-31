export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'My Blog',
    description:
      'A blog powered by Gatsby and Markdown.',
    logo: '/logos/blog.svg',
    link: 'https://alancj731.github.io/myblog/',
    slug: 'blog',
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
    title: 'Winnipeg Property Explore',
    description:
    'Generate & Send a secure password to your email.',
    logo: '/logos/password.svg',
    link: 'https://opendata2026.netlify.app',
    slug: 'property-explore',
  },
  {
    title: 'Natural Language Query',
    description: 'A demo to use natural language to query database',
    logo: '/logos/database.png',
    link: 'https://natural-query-frontend.vercel.app/',
    slug: 'natural-query'
  },
  {
    title: 'Docker File Parser',
    description: 'Explain how a dockerfile works',
    logo: '/logos/docker.png',
    link: 'https://dockerfile-parser.netlify.app/',
    slug: 'docker-parser'
  },
  {
    title: 'Javascript Tetris',
    description:
      'A lightweight Tetris game developed with pure HTML, CSS, and JavaScript.',
    logo: '/logos/tetris.svg',
    link: 'https://tetris-js-nine-psi.vercel.app',
    slug: 'tetris',
  }
];
