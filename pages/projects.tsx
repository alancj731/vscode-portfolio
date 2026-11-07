import ProjectCard from '@/components/ProjectCard';
import { categories, projects } from '@/data/projects';

import styles from '@/styles/ProjectsPage.module.css';

const ProjectsPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Personal Projects</h1>
      <p className={styles.pageSubtitle}>
      A selection of my recent personal projects.
      </p>

      {categories.map((category) => {
        const items = projects.filter((p) => p.category === category);
        if (items.length === 0) return null;
        return (
          <section key={category} className={styles.category}>
            <h2 className={styles.categoryTitle}>{category}</h2>
            <div className={styles.container}>
              {items.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Projects' },
  };
}

export default ProjectsPage;
