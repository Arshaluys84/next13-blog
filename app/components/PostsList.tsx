"use client";

import React, { useState, useEffect } from "react";

import { Category, Post } from "@/utils/types";
import { PostItem } from "./PostItem";
import { CURRENT_PAGE, ITEMS_PER_PAGE } from "@/constants/constants";

export const PostsList = ({
  posts,
  categories,
}: {
  posts: Post[];
  categories: Category[];
}) => {
  const [postData, setPostData] = useState<Post[]>(posts);
  const [itemsPerPage] = useState<number>(ITEMS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState<number>(CURRENT_PAGE);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `/api/getDataPerPage?page=${currentPage}&itemsPerPage=${itemsPerPage}`
        );
        if (response.ok) {
          const jsonData = await response.json();
          setPostData(jsonData.pageData);
        } else {
          console.error("Error fetching data");
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }

    fetchData();
  }, [currentPage, itemsPerPage]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="z-10 max-w-[800px] w-full items-center justify-between font-mono text-sm">
      <div className="flex justify-between mt-4 mb-10">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`py-2 px-4 rounded ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(posts.length / itemsPerPage)}
          className={`py-2 px-4 rounded ${
            currentPage === Math.ceil(posts.length / itemsPerPage)
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          Next
        </button>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {postData.map((post: Post) => {
            return (
              <div key={post.id}>
                <PostItem post={post} categories={categories} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
