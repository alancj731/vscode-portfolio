export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Reinforcment Learning',
    description:
      'A tic-tac-toe game powered by reinforcement learning.',
    logo: '/logos/ttt.svg',
    link: 'https://tiktoktoe.winnipegdatafan.com/',
    slug: 'tictactoe',
  },
  {
    title: 'CSV Change Easy',
    description:
      'A tool to change csv easily by asking',
    logo: '/logos/csv.png',
    link: 'https://csv-change-easy.netlify.app/',
    slug: 'easy-csv',
  },
  {
    title: 'Callperator',
    description:
      'A personal AI calling assistant',
    logo: '/logos/callperator.svg',
    link: 'https://callperator.netlify.app/',
    slug: 'callperator',
  },
  {
    title: 'Chrome Password Manager',
    description:
      'Password Management Extension',
    logo: '/logos/password.svg',
    link: 'https://github.com/alancj731/chrome-pw-extension/blob/dev/README.md',
    slug: 'chrome-pw',
  }
];
