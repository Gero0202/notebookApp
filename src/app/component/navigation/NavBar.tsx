"use client";

import { useRouter } from "next/navigation";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();

  return (
    <div className={styles.nav}>
      <button onClick={() => router.back()}>←</button>
      <button onClick={() => router.push("/")}>Home</button>
      <button onClick={() => router.forward()}>→</button>
    </div>
  );
}
