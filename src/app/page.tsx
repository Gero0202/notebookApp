import CategoryList from "@/app/component/CategoryList/CategoryList"
import SearchBar from "@/app/component/SearchBar/SearchBar"

export const dynamic = "force-static";


export default function Home() {
  return (
    <main style={{ padding: "16px" }}>
      <SearchBar />
      <CategoryList />
    </main>
  );
}
