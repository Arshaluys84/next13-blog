import { notFound } from "next/navigation";

import { getData, Data } from "@/utils";
import { DATA_URL } from "@/constants/constants";

import { PostItem } from "../components/PostItem";
import { PostsListByCategory } from "../components/PostsListByCategory";

export default async function Search({
  searchParams,
}: {
  searchParams: { title: string; category?: number; id?: number };
}) {
  const data: Data = await getData(DATA_URL);
  const { posts, categories } = data;

  const postData = posts.filter(
    ({ slug, id }) =>
      slug
        .toLocaleLowerCase()
        .includes(searchParams.title?.toLocaleLowerCase()) ||
      +id === searchParams?.id
  );
  if (postData.length < 1) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      {postData.length === 1 ? (
        <PostItem post={postData[0]} categories={categories} />
      ) : (
        <PostsListByCategory posts={postData} categories={categories} />
      )}
    </main>
  );
}
