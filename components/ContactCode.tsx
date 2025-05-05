import styles from "@/styles/ContactCode.module.css";

const contactItems = [
  {
    social: "website",
    link: "vscode.winnipegdatafan.com",
    href: "https://vscode.winnipegdatafan.com/",
  },
  {
    social: "email",
    link: "alanchenjian@gmail.com",
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
        <span className="text-green-600">.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <div key={index}>
          <p className={styles.line} >
            &nbsp;&nbsp;&nbsp;{item.social} :
          </p>
          <a
            className={styles.accentText}
            href={item.href}
            target="_blank"
            rel="noopener"
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.link}&nbsp;<span className='text-white'>;</span>
          </a>
        </div>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
