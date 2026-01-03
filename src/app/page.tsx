import Hero from "@/components/Hero";
import EvolutionTimeline from "@/components/EvolutionTimeline";
import EfficiencyChart from "@/components/EfficiencyChart";
import WorkflowRoles from "@/components/WorkflowRoles";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pb-24">
      <Hero />
      <EvolutionTimeline />
      <EfficiencyChart />
      <WorkflowRoles />
    </main>
  );
}
