import { Category, Post } from "@/utils/types";

import { ImageWithError } from "./ImageWithError";

export const PostItem = ({
  post,
  categories,
}: {
  post: Post;
  categories: Category[];
}) => {
  return (
    <div
      key={post.id}
      className="text-black p-4 transform hover:translate-y-5 transition duration-300 ease-in-out cursor-pointer"
    >
      <div>
        <ImageWithError imageUrl={post.imageUrl} />
      </div>
      <div className="mt-5 mb-5 text-blue-300">
        {
          categories.find((c) =>
            post.categories
              .map((cat) => cat.toString())
              .includes(c.id.toString())
          )?.name
        }
      </div>
      <div className="mb-2 font-bold">{post.title}</div>
      <div>{post.excerpt}</div>
    </div>
  );
};
