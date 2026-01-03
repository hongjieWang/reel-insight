export type EvolutionStage = {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  icon: string;
  content: string;
  pros: string[];
  tech: string[];
};
export const evolutionStages: EvolutionStage[];

export type WorkflowStep = {
  id: number;
  name: string;
  tool: string;
  desc: string;
  icon: string;
};
export const workflowSteps: WorkflowStep[];
