"use client";

import { Category, Post } from "@/utils/types";

import { ImageWithError } from "./ImageWithError";

import { useRouter } from "next/navigation";

export const PostItem = ({
  post,
  categories,
}: {
  post: Post;
  categories: Category[];
}) => {
  const router = useRouter();

  const { id, slug, imageUrl, title, excerpt, categories: cat } = post;
  return (
    <div
      key={id}
      className="text-black p-4 transform hover:translate-y-5 transition duration-300 ease-in-out cursor-pointer"
      onClick={() => {
        router.push(`/search?title=${slug}&id=${id}`);
      }}
    >
      <div>
        <ImageWithError imageUrl={imageUrl} />
      </div>
      <div className="mt-5 mb-5 text-blue-300">
        {
          categories.find((c) =>
            cat.map((cat) => cat.toString()).includes(c.id.toString())
          )?.name
        }
      </div>
      <div className="mb-2 font-bold">{title}</div>
      <div className="max-w-[800px]">{excerpt}</div>
    </div>
  );
};
