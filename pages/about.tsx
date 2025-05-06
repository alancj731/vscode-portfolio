import styles from "@/styles/AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Jian Chen</h1>
        <div className={styles.green}>
          <div className={styles.subtitle}>Software Engineer</div>
        </div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m a software engineer based in Winnipeg, Canada. I
              primarily work with JavaScript / TypeScript and Python for both
              frontend and backend development. I&apos;m particularly interested in
              integrating applications with AI and DATA analysis tools,
              exploring ways to get meaningful insights to improve business
              decisions.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              Currently at {" "}
              <a
                href="https://www.outreachgenius.ai/"
                target="_blank"
                rel="noopener"
              >
                <span className={`${styles.blue} font-bold underline`}>OutreachGenius</span>
              </a>
              {" "} as a Software Engineer, working with a lean team of 4 engineers to build a cutting-edge voice AI agent platform designed to empower small and medium business owners.
            </p>
            <p className={styles.paragraph}>
              Before that, I worked at another startup {" "}
              <a
                href="https://www.origatou.com/"
                target="_blank"
                rel="noopener"
              >
                <span className={`${styles.blue} font-bold underline`}>Origatou</span>
              </a>, where I upgraded the backend system to support flexible and complex queries, and built a low-code platform to streamline the creation of marketing campaign pages.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Aside from programming, I like to invest in the stock market and
              prepare delicious Chinese food.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
