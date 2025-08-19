import { useId } from "react";

import useChangeNameFilterAction from "../hooks/use-change-name-filter-action";
import useNameFilter from "../hooks/use-name-filter";

import styles from "./SearchBox.module.css";

export default function SearchBox() {
  const id = useId();

  const name = useNameFilter();
  const changeName = useChangeNameFilterAction();

  const handleInputChange = (event) => {
    changeName(event.target.value);
  };

  return (
    <div className={styles.container}>
      <label htmlFor={id}>Find contacts by name</label>
      <input
        type="text"
        id={id}
        value={name}
        onChange={handleInputChange}
        placeholder="Search contacts..."
      />
    </div>
  );
}
