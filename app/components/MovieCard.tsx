import { StarIcon } from "@heroicons/react/solid";
import { TicketIcon } from "@heroicons/react/outline";
import { TicketIcon as TicketIconActive } from "@heroicons/react/solid";
import { Media } from "../generated/graphql";
export default function MovieCard({ movie }: { movie: Media }) {
  return (
    <div>
      <a
        href={`https://www.themoviedb.org/movie/${movie.id}`}
        className="overflow-hidden block rounded-2xl relative aspect-[3/4] w-full bg-red-100"
        style={{
          backgroundImage: `url(${movie?.coverImage?.large})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute w-full top-0 bottom-0 right-0 left-0 bg-black opacity-10 h-full"></div>
        <button className="absolute text-blue-500 hover:text-blue-700 hover:shadow-lg bg-white rounded-full shadow-md top-2 p-3 right-2">
          <TicketIcon className="h-5 w-5 rotate-45 " />
        </button>
      </a>
      <div
        className="text-gray-900 font-medium text-sm text-left py-2 pr-2"
        dangerouslySetInnerHTML={{
          __html: (movie?.title?.english || movie?.title?.native) ?? "untitled",
        }}
      ></div>
      <div className="flex items-center space-x-2">
        <StarIcon className="h-4 w-4 text-yellow-600" />
        <span className="text-xs">4.5</span>
      </div>
    </div>
  );
}
