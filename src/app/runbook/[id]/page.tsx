import { getRunbookById } from "@/app/lib/runbook";
import Checklist from "@/app/component/CheckLlist/CheckList";
import CommandBlock from "@/app/component/CommandBlock/CommandBlock";

export default async function RunbookPage({ params }: { params: { id: string } }) {
    const { id } = await params
    const runbook = getRunbookById(id);

  if (!runbook) return <div>No encontrado</div>;

  return (
    <main style={{ padding: "16px" }}>
      <h1>{runbook.title}</h1>

      <p>{runbook.symptoms}</p>

      <h3>Checklist</h3>
      <Checklist items={runbook.checklist} />

      <h3>Comandos</h3>
      {runbook.commands.map(c => (
        <CommandBlock key={c} command={c} />
      ))}

      <h3>Notas</h3>
      <p>{runbook.notes}</p>
    </main>
  );
}
