import styles from "@/styles/ContactCode.module.css";

const contactItems = [
  {
    social: "website",
    link: "portfolio page",
    href: "https://vscode.winnipegdatafan.com/",
  },
  {
    social: "email",
    link: "alanchenjian",
    href: "mailto:alanchenjian@gmail.com",
  },
  {
    social: "github",
    link: "alancj731",
    href: "https://github.com/alancj731",
  },
  {
    social: "linkedin",
    link: "alanchenjian",
    href: "https://www.linkedin.com/in/alanchenjian/",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.green}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <div key={index}>
          <p className={styles.label}>
            {item.social}
            {"\u00A0".repeat(8 - item.social.length)}:
            <a
              className={styles.link}
              href={item.href}
              target="_blank"
              rel="noopener"
            >
              {item.link}
            </a>
          </p>
        </div>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
