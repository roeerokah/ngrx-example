export interface Movie {
  adult: string;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: string;
  genres: { id: number; name: string }[];
  homepage: string;
  id: string;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: string;
  release_date: string;
  revenue: string;
  runtime: string;
  spoken_languages: { english_name: string; name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: string;
  vote_average: string;
  vote_count: string;
}
