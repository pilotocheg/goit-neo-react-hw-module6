import { useDispatch } from "react-redux";

import { changeFilter as changeFilterAction } from "../redux/filtersSlice";

export default function useChangeNameFilterAction() {
  const dispatch = useDispatch();

  const changeNameFilter = (name) => {
    dispatch(changeFilterAction(name));
  };

  return changeNameFilter;
}
