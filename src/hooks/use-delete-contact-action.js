import { useDispatch } from "react-redux";

import { deleteContact as deleteContactAction } from "../redux/contactsSlice";

export default function useDeleteContactAction() {
  const dispatch = useDispatch();

  const deleteContact = (id) => {
    dispatch(deleteContactAction(id));
  };

  return deleteContact;
}
