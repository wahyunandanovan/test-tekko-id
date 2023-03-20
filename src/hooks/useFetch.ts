import { useQuery } from "@tanstack/react-query";
import { api } from "./api";

interface Props {
  module: string;
  s?: string;
  sort?: string;
}

function useFetch({ module, s, sort }: Props) {
  const query = useQuery({
    queryKey: [module, s, sort],
    queryFn: () =>
      api.get(`/${module}?${s ? `s=${s}` : ""}${sort ? `&sort=${sort}` : ""}`),
    enabled: Boolean(module),
  });

  return {
    ...query,
    items: query.data?.data || [],
  };
}

export default useFetch;
