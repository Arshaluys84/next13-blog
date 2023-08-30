import { PaginationButtonsType } from "@/utils";

export const PaginationButtons = ({
  prevPage,
  currentPage,
  nextPage,
  posts,
  itemsPerPage,
}: PaginationButtonsType) => {
  return (
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
  );
};
