import { Formik, Form } from "formik";
import * as Yup from "yup";

import useAddContactAction from "../hooks/use-add-contact-action";
import Field from "./Field";
import styles from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(3, "Too short!")
    .max(50, "Too long!"),
  number: Yup.string()
    .required("Required")
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      "Phone number must be in the format XXX-XX-XX"
    ),
});

export default function ContactForm() {
  const addContact = useAddContactAction();

  const handleSubmit = ({ name, number }, { resetForm }) => {
    addContact(name.trim(), number);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={styles.form}>
        <Field name="name" />
        <Field name="number" />
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
}
