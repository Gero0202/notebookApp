"use client";

import { useState } from "react";
import { createFuse } from "@/app/lib/fuse";
import Link from "next/link";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const fuse = createFuse();
  const results = query ? fuse.search(query) : [];

  return (
    <div className={styles.container}>
      <input
        placeholder="Buscar error o comando…"
        value={query}
        onChange={e => setQuery(e.target.value)}
        className={styles.input}
      />

      {query && (
        <div className={styles.results}>
          {results.map(r => (
            <Link key={r.item.id} href={`/runbook/${r.item.id}`} className={styles.titles}>
              {r.item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
