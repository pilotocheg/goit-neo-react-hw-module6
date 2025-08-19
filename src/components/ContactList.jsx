import useFilteredContacts from "../hooks/use-filtered-contacts";
import Contact from "./Contact";
import styles from "./ContactList.module.css";

export default function ContactList() {
  const filteredContacts = useFilteredContacts();

  return (
    <ul className={styles.list}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
