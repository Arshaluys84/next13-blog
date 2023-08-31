"use client";

import { useState, useRef } from "react";

import { useRouter } from "next/navigation";

import { Post } from "@/utils/types";

export default function SearchBar({ posts }: { posts: Post[] }) {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const postInputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (postInputRef.current) {
      postInputRef.current.blur();
    }
    let title = postInputRef.current?.value || "";
    if (title.length < 3) {
      setErrorMessage("Please type more than 2 letters");
      return;
    }

    const selectedPosts = posts.filter((p) =>
      p.title.toLocaleLowerCase().includes(title.toLowerCase())
    );
    if (selectedPosts.length > 0) {
      router.push(`/search?title=${title}`);
    } else {
      setErrorMessage("No such a post");
    }
  };
  return (
    <div className="mb-10 w-[100%]  max-w-[800px] w-full items-center justify-between font-mono text-sm ">
      <form
        className="text-left text-lg py-3 m-auto flex justify-center"
        onSubmit={handleSearch}
      >
        <input
          className="rounded  mr-3 p-2 w-[100%] text-black border"
          type="text"
          placeholder="Enter post title"
          onFocus={() => setErrorMessage("")}
          ref={postInputRef}
        />
        <button className="rounded bg-red-600 px-9 py-2 text-white">
          Search
        </button>
      </form>
      <div className="text-red-800">{errorMessage}</div>
    </div>
  );
}
