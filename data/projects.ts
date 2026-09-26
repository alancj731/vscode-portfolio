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
    link: 'http://rl-tik-tok-toe-8uzyu5-dbe537-74-208-199-250.sslip.io/',
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
    slug: 'easy-csv',
  },

];
