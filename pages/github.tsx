import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import { VscRepo, VscPerson } from 'react-icons/vsc';

import RepoCard from '@/components/RepoCard';
import { Repo, User } from '@/types';

import styles from '@/styles/GithubPage.module.css';

interface GithubPageProps {
  repos: Repo[];
  user: User;
}

const GithubPage = ({ repos, user }: GithubPageProps) => {
  return (
    <div className={styles.layout}>
      <div className={styles.pageHeading}>
        <h1 className={styles.pageTitle}>GitHub</h1>
        <p className={styles.pageSubtitle}>
          Browse through my GitHub <span className="text-green-600">public</span> repositories and see what I&apos;ve been
          working on.
        </p>
      </div>

      <div className={styles.githubPage}>
        <div className={styles.profileSection}>
          <div className={styles.profileInfo}>
            <Image
              src={user.avatar_url}
              className={styles.avatar}
              alt={user.login}
              width={100}
              height={100}
              priority
            />
            <div className={styles.userInfo}>
              <h2 className={styles.username}>{user.login}</h2>
              <div className={styles.stats}>
                <div className={styles.statItem}>
                  <VscRepo className={styles.statIcon} />
                  <span>{user.public_repos} repositories</span>
                </div>
                <div className={styles.statItem}>
                  <VscPerson className={styles.statIcon} />
                  <span>{user.followers} followers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>Popular Repositories</h3>
        </div>
        <div className={styles.reposContainer}>
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
        <div className={styles.contributions}>
          <GitHubCalendar
            username={process.env.NEXT_PUBLIC_GITHUB_USERNAME!}
            hideColorLegend
            hideMonthLabels
            colorScheme="dark"
            year={new Date().getFullYear()}
            theme={{
              dark: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              light: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
            }}
            style={{
              width: '100%',
            }}
          />
        </div>
      </div>
    </div>
  );
};

async function fetchGithub<T>(path: string): Promise<T | null> {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  try {
    const res = await fetch(`https://api.github.com${path}`, { headers });
    const contentType = res.headers.get('content-type') ?? '';
    if (!res.ok || !contentType.includes('application/json')) {
      console.warn(`GitHub API ${path} failed: ${res.status} ${contentType}`);
      return null;
    }
    return (await res.json()) as T;
  } catch (error) {
    console.warn(`GitHub API ${path} failed:`, error);
    return null;
  }
}

export async function getStaticProps() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? '';

  const [user, repos] = await Promise.all([
    fetchGithub<User>(`/users/${username}`),
    fetchGithub<Repo[]>(`/users/${username}/repos?sort=pushed&per_page=6`),
  ]);

  return {
    props: {
      title: 'GitHub',
      repos: Array.isArray(repos) ? repos : [],
      user: user ?? {
        login: username,
        avatar_url: `https://avatars.githubusercontent.com/${username}`,
        public_repos: 0,
        followers: 0,
      },
    },
    // Refetch sooner if the GitHub API was unavailable at build time.
    revalidate: user && repos ? 600 : 60,
  };
}

export default GithubPage;
