
import { ApiResponse } from "@/types/responseType";
  const options = {
    headers: {
      accept: "application/json",
    },
    next: {
      revalidate: 3600,
    },
  };
const baseUrl = 'https://api.themoviedb.org/3';
export const fetchData = async function fetchTrending(genreUrl:string): Promise<ApiResponse> {
  const res = await fetch(`${baseUrl}${genreUrl}`,
    options,
  );
  if (!res.ok) throw new Error("something went wrong");
  return res.json();
}
