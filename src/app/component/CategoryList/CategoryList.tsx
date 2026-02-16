import Link from "next/link";
import styles from "./CategoryList.module.css";

const categories = [
  { name: "Problemas PC", slug: "pc" },
  { name: "WiFi / Red", slug: "wifi" },
  { name: "DNS", slug: "dns" },
  { name: "Autenticación", slug: "auth" },
  { name: "Comandos útiles", slug: "commands" },
  { name: "Casos hospital", slug: "hospital" },
  { name: "Procedimientos urgentes", slug: "urgent" }
];

export const dynamic = "force-static";

export default function CategoryList() {
  return (
    <div className={styles.list}>
      {categories.map(c => (
        <Link key={c.slug} href={`/categoria/${c.slug}`} className={styles.item}>
          {c.name}
        </Link>
      ))}
    </div>
  );
}
