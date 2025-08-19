import { useDispatch } from "react-redux";

import { addContact as addContactAction } from "../redux/contactsSlice";

export default function useAddContactAction() {
  const dispatch = useDispatch();

  const addContact = (name, number) => {
    dispatch(addContactAction({ name, number }));
  };

  return addContact;
}
