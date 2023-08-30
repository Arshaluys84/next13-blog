"use client";

import React, { useState, useEffect } from "react";

import { Category, Post } from "@/utils/types";
import { CURRENT_PAGE, ITEMS_PER_PAGE } from "@/constants/constants";

import { PostItem } from "./PostItem";
import { PaginationButtons } from "./PaginationButtons";

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
      <PaginationButtons
        nextPage={nextPage}
        prevPage={prevPage}
        currentPage={currentPage}
        posts={posts}
        itemsPerPage={itemsPerPage}
      />
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
