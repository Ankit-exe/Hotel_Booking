import { useSearchContext } from "../context/SearchContext";

export const Search = () => {
  const search = useSearchContext();
  console.log(search);
  return <>Search</>;
};
