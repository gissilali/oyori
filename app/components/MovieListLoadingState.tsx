export function MovieListLoadingState({
  itemsPerPage,
  title,
}: {
  itemsPerPage: number;
  title: string;
}) {
  return (
    <div>
      <div className="py-4">
        <h2 className="h6 tracking-wide uppercase text-gray-500 font-bold">
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-6 gap-4">
        {[...Array(itemsPerPage).fill(1)].map((_, index) => (
          <div key={index}>
            <div className="overflow-hidden animate-pulse block rounded-2xl relative aspect-[3/4] w-full bg-gray-200"></div>
            <div className="py-2 my-2 bg-gray-200 animate-pulse w-full rounded "></div>
            <div className="bg-gray-300 rounded w-5 h-5 animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
