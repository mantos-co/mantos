import Hero from '@/components/Hero';
import Topics from '@/components/Topics';
import ProjectsCarousel from '@/components/ProjectsCarousel';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import { getProjects, getTeam } from '@/lib/api';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const [projects, team] = await Promise.all([getProjects(), getTeam()]);

  return (
    <main>
      <Hero />
      <Topics />
      <ProjectsCarousel projects={projects} />
      <Team team={team} />
      <Contact />
    </main>
  );
}
