import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { Maybe, PageInfo } from "../generated/graphql";
import usePagination, { DOTS } from "../hooks/usePagination";

export default function Pagination({
  paginationInfo,
  onPageChange,
}: {
  paginationInfo: Maybe<PageInfo>;
}) {
  const paginationRange = usePagination({
    currentPage: paginationInfo?.currentPage,
    perPage: paginationInfo?.perPage,
    total: paginationInfo?.total,
  });

  const currentPage = paginationInfo?.currentPage;

  console.log({ paginationRange });

  return (
    <div className="flex justify-center">
      <div className="flex justify-center">
        <button
          className={`text-gray-500" : "text-blue-500" text-xs px-2 py-1 rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-100 hover:text-blue-500 }`}
          onClick={() => {}}
        >
          <span>
            <ChevronLeftIcon className="h-4 w-4" />
          </span>
        </button>
        {paginationRange?.map((pageNumber, key) => {
          if (pageNumber === DOTS) {
            return (
              <button
                key={key}
                className={`text-gray-500" : "text-blue-500" text-xs px-2 py-1 rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-100 hover:text-blue-500 `}
              >
                <span>&#8230;</span>
              </button>
            );
          }

          return (
            <button
              key={key}
              className={`text-gray-500" : "text-blue-500" text-xs px-2 py-1 rounded-full w-8 h-8 flex justify-center items-center  ${
                pageNumber === currentPage
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-100 hover:text-blue-500"
              }`}
              onClick={() => onPageChange(pageNumber)}
            >
              <span>{pageNumber}</span>
            </button>
          );
        })}

        <button
          className={`text-gray-500" : "text-blue-500" text-xs px-2 py-1 rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-100 hover:text-blue-500 }`}
          onClick={() => {}}
        >
          <span>
            <ChevronRightIcon className="h-4 w-4" />
          </span>
        </button>
      </div>
    </div>
  );
}
