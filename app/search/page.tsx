import { notFound } from "next/navigation";

import { getData, Data } from "@/utils";
import { DATA_URL } from "@/constants/constants";

import { PostItem } from "../components/PostItem";

export default async function Search({
  searchParams,
}: {
  searchParams: { title: string; category?: number };
}) {
  const data: Data = await getData(DATA_URL);
  const { posts, categories } = data;

  const post = posts.find((p) =>
    p.title
      .toLocaleLowerCase()
      .includes(searchParams.title?.toLocaleLowerCase())
  );

  if (!post) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <PostItem post={post} categories={categories} />
    </main>
  );
}
