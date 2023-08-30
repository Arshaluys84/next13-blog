"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Category, Post } from "@/utils/types";
import { ALL } from "@/constants/constants";

export const CategoryFilterBar = ({
  posts,
  categories,
}: {
  posts: Post[];
  categories: Category[];
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const router = useRouter();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {

    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    
    if (selectedValue === ALL) {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((p) =>
        p.categories.map((c) => c.toString()).includes(selectedCategory)
      );

      setFilteredPosts(filtered);
    }
  };
  useEffect(() => {
    if (!selectedCategory) return;
    if (selectedCategory === ALL) {
      router.push(`/category?slug=all&id=${selectedCategory}`);
    } else {
      router.push(
        `/category?slug=${
          categories.find((c) => c.id === +selectedCategory)?.slug
        }&id=${selectedCategory}`
      );
    }
  }, [categories, selectedCategory]);

  return (
    <div>
      <div className="relative inline-block w-64">
        <select
          value={selectedCategory}
          onChange={handleSelectChange}
          className="w-[300px] z-20 h-[50px] block appearance-none w-full bg-white border text-black border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Select post category"
        >
          <option value="all">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
