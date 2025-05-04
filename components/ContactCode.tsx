import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'portfolio.winnipegdatafan.com',
    href: 'https://portfolio.winnipegdatafan.com/',
  },
  {
    social: 'email',
    link: 'winnipegdatafan@gmail.com',
    href: 'mailto:winnipegdatafan@gmail.com',
  },
  {
    social: 'github',
    link: 'alancj731',
    href: 'https://github.com/alancj731',
  },
  {
    social: 'linkedin',
    link: 'alanchenjian',
    href: 'https://www.linkedin.com/in/alanchenjian/',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className="text-green-600">.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}{'\u00A0'.repeat(8 - item.social.length)}:{' '}
          <a className={styles.accentText} href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
