import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content=""
      />
      <meta
        name="keywords"
        content="web developer portfolio"
      />
      <meta property="og:title" content="Jian Chen's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.winnipegdatafan.com" />
      <meta name="twitter:card" content="summary_large_image" />
      {/* Google tag (gtag.js) */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-NSJT0LJ96X"></script>
      <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NSJT0LJ96X');
            `,
          }}
      />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Jian Chen',
};
