import { notFound } from "next/navigation";

import { getData, Data } from "@/utils";
import { ALL, DATA_URL } from "@/constants/constants";

import { CategoryFilterBar } from "../components/CategoryFilterBar";
import { PostsListByCategory } from "../components/PostsListByCategory";
import SearchBar from "../components/SearchBar";

export default async function Search({
  searchParams,
}: {
  searchParams: { slug: string; id: string };
}) {
  const data: Data = await getData(DATA_URL);
  const { posts, categories } = data;

  const filteredPosts =
    searchParams.slug !== ALL
      ? posts.filter((p) =>
          p.categories.map((c) => c.toString()).includes(searchParams.id)
        )
      : posts;

  if (!filteredPosts) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SearchBar posts={posts} />
      <CategoryFilterBar posts={posts} categories={categories} />
      <PostsListByCategory posts={filteredPosts} categories={categories} />
    </main>
  );
}
