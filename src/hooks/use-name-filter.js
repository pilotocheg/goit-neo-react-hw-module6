import { useSelector } from "react-redux";

export default function useNameFilter() {
  const nameFilter = useSelector((state) => state.filters.name);

  return nameFilter;
}
