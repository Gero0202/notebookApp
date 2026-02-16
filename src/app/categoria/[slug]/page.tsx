import { getRunbooksByCategory } from "@/app/lib/runbook";
import styles from "./categoria.module.css"
import Link from "next/link";

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const runbooks = getRunbooksByCategory(slug);

  return (
    <main style={{ padding: "16px" }}>
      {runbooks.map(r => (
        <Link key={r.id} href={`/runbook/${r.id}`} className={styles["runbook-card"]}>
          <div style={{ padding: "12px", background: "#141414", marginBottom: "8px", color: "#ffff" }}>
            {r.title}
          </div>
        </Link>
      ))}
    </main>
  );
}
