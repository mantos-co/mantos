import type { Project, TeamMember } from './types';

const API_URL = process.env.INTERNAL_API_URL || 'http://localhost:4000';

async function apiFetch<T>(path: string): Promise<T | null> {
  const res = await fetch(`${API_URL}${path}`, { cache: 'no-store' });
  if (res.status === 404) return null;
  if (!res.ok) {
    throw new Error(`API request to ${path} failed with status ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export async function getProjects(): Promise<Project[]> {
  return (await apiFetch<Project[]>('/api/projects')) ?? [];
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return apiFetch<Project>(`/api/projects/${slug}`);
}

export async function getTeam(): Promise<TeamMember[]> {
  return (await apiFetch<TeamMember[]>('/api/team')) ?? [];
}

export async function getTeamMemberBySlug(slug: string): Promise<TeamMember | null> {
  return apiFetch<TeamMember>(`/api/team/${slug}`);
}
