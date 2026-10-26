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
    title: 'Callperator',
    description:
      'A personal AI calling assistant',
    logo: '/logos/callperator.svg',
    link: 'https://callperator.netlify.app/',
    slug: 'callperator',
  },
  {
    title: 'AWS Orders Pipeline',
    description:
      'Serverless .NET orders on API Gateway, Lambda, SNS and SQS',
    logo: '/logos/aws-orders.svg',
    link: 'https://aws-services-demo.netlify.app/',
    slug: 'aws-orders',
  },
  // {
  //   title: 'Chrome Password Manager',
  //   description:
  //     'Password Management Extension',
  //   logo: '/logos/password.svg',
  //   link: 'https://github.com/alancj731/chrome-pw-extension/blob/dev/README.md',
  //   slug: 'chrome-pw',
  // },
  {
    title: 'SQL Practice',
    description:
      'Practise SQL queries on MySQL, SQL Server and PostgreSQL',
    logo: '/logos/sql-practice.svg',
    link: 'https://mysql-sqlserver-postgres.vercel.app/',
    slug: 'sql-practice',
  },
  {
    title: 'My Youtube',
    description:
      'A tagged YouTube library',
    logo: '/logos/my-youtube.svg',
    link: 'https://youtube.winnipegdatafan.com/',
    slug: 'my-youtube',
  },
  {
    title: 'Halloween Candy',
    description:
      'A Power BI report ranking 85 Halloween candies',
    logo: '/logos/halloween-candy.svg',
    link: 'https://github.com/alancj731/powerbi-halloween-candi',
    slug: 'halloween-candy',
  },
  {
    title: 'CSV Change Easy',
    description:
      'A tool to change csv easily by asking',
    logo: '/logos/csv.png',
    link: 'https://csv-change-easy.netlify.app/',
    slug: 'easy-csv',
  },
];
