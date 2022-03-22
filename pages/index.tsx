import type { NextPage } from "next";
import { gql, useQuery } from "@apollo/client";
import MovieCard from "../app/components/MovieCard";
import MovieList from "../app/components/MovieList";
import { useState } from "react";

const Home: NextPage = () => {
  return (
    <div className={"min-h-screen w-full"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center">
          <ul className="flex space-x-8 py-8">
            <li className="antialiased text-gray-900 font-medium">
              <a href="">All</a>
            </li>
            <li className="antialiased text-gray-900 font-medium">
              <a href="">Movies</a>
            </li>
            <li className="antialiased text-gray-900 font-medium">
              <a href="">Series</a>
            </li>
            <li className="antialiased text-gray-900 font-medium">
              <a href="">My Favorites</a>
            </li>
          </ul>
        </div>
        <MovieList title="Top Anime" />
      </div>
    </div>
  );
};

export default Home;
