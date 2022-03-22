import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { Media, useGetMoviesQuery } from "../generated/graphql";
import MovieCard from "./MovieCard";
import { MovieListLoadingState } from "./MovieListLoadingState";
import Pagination from "./Pagination";

export default function MovieList({ title }: { title: string }) {
  const PER_PAGE = 12;

  const [page, setPage] = useState(1);

  const { data, loading, error } = useGetMoviesQuery({
    variables: {
      page,
      perPage: PER_PAGE,
    },
  });

  const setCurrentPage = (page: number) => {
    setPage(page);
  };

  if (error) {
    return <div>Errror...</div>;
  }

  if (loading) {
    return <MovieListLoadingState title={title} itemsPerPage={PER_PAGE} />;
  }

  return (
    <div>
      <div className="py-4">
        <h2 className="h6 tracking-wide uppercase text-gray-500 font-bold">
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-6 gap-4">
        {data.Page.media.map((movie: Media, key: number) => {
          return <MovieCard key={key} movie={movie} />;
        })}
      </div>
      <div className="flex py-8 justify-center">
        <Pagination
          paginationInfo={data.Page.pageInfo}
          onPageChange={(currentPage: number) => {
            setCurrentPage(currentPage);
          }}
        />
      </div>
    </div>
  );
}
