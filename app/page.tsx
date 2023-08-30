import { DATA_URL } from "@/constants/constants";
import { getData, Data } from "@/utils";

import { CategoryFilterBar } from "./components/CategoryFilterBar";
import { PostsList } from "./components/PostsList";
import SearchBar from "./components/SearchBar";

export default async function Home() {
  const data: Data = await getData(DATA_URL);
  const { posts, categories } = data;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <SearchBar posts={posts} />
      <CategoryFilterBar posts={posts} categories={categories} />
      <PostsList posts={posts} categories={categories} />
    </main>
  );
}
