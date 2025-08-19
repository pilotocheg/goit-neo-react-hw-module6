import { useSelector } from "react-redux";
import { useMemo } from "react";

import useNameFilter from "./use-name-filter";

export default function useFilteredContacts() {
  const contacts = useSelector((state) => state.contacts.items);
  const name = useNameFilter();

  const filteredContacts = useMemo(() => {
    if (!name) {
      return contacts;
    }

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );
  }, [contacts, name]);

  return filteredContacts;
}
