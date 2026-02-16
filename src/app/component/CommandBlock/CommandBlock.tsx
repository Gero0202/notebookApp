"use client";

import styles from "./CommandBlock.module.css";

export default function CommandBlock({ command }: { command: string }) {
  function copy() {
    navigator.clipboard.writeText(command);
  }

  return (
    <div className={styles.block} onClick={copy}>
      {command}
    </div>
  );
}
