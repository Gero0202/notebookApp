"use client";

import { useState } from "react";
import styles from "./CheckList.module.css";

export default function Checklist({ items }: { items: string[] }) {
  const [checked, setChecked] = useState<boolean[]>(items.map(() => false));

  function toggle(i: number) {
    const copy = [...checked];
    copy[i] = !copy[i];
    setChecked(copy);
  }

  return (
    <div>
      {items.map((item, i) => (
        <label key={i} className={styles.item}>
          <input type="checkbox" checked={checked[i]} onChange={() => toggle(i)} />
          {item}
        </label>
      ))}
    </div>
  );
}
