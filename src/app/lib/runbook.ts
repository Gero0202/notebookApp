import runbooks from "@/app/data/runbooks.json";

export type Runbook = {
  id: string;
  title: string;
  category: string;
  symptoms: string;
  checklist: string[];
  commands: string[];
  notes: string;
  tags: string[];
};

export function getAllRunbooks(): Runbook[] {
  return runbooks as Runbook[];
}

export function getRunbookById(id: string): Runbook | undefined {
  return getAllRunbooks().find(r => r.id === id);
}

export function getRunbooksByCategory(category: string): Runbook[] {
  return getAllRunbooks().filter(r => r.category === category);
}
