import React, { useCallback } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { Container, Title, FormStyle } from "./styles";

interface ContactFormFields {
  subject: string;
  name: string;
  email: string;
  message: string;
}

const initialValues: ContactFormFields = {
  subject: "",
  name: "",
  email: "",
  message: "",
};

const schemaContact = Yup.object().shape({
  subject: Yup.string().required("O assunto é obrigatório!"),
  name: Yup.string().required("O nome é obrigatório!"),
  email: Yup.string()
    .email("Informe um e-mail válido!")
    .required("O email é obrigatório!"),
  message: Yup.string().min(3).required("A mensagem é obrigatória"),
});

const Contact = () => {
  const handleSubmit = useCallback(
    (contactFormFields: ContactFormFields, { resetForm }) => {
      console.log(process.env.REACT_APP_EMAIL_ID);
      emailjs
        .send(
          "gmail",
          "template_Btppjf5v",
          {
            from_name: contactFormFields.name,
            from_subject: contactFormFields.subject,
            from_email: contactFormFields.email,
            message_html: contactFormFields.message,
          },
          process.env.REACT_APP_EMAIL_ID
        )
        .then(
          (result) => {
            resetForm();
            return alert("E-mail enviado com sucesso!");
          },
          (error) => {
            console.log(error.text);
          }
        );
    },
    []
  );

  return (
    <Container>
      <Title>Entre em contato</Title>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={schemaContact}
        initialValues={initialValues}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form>
            <FormStyle>
              <Field type="text" name="subject" placeholder="Assunto" />
              {errors.subject && touched.subject && (
                <span>{errors.subject}</span>
              )}
              <Field type="text" name="name" placeholder="Nome" />
              {errors.name && touched.name && <span>{errors.name}</span>}
              <Field type="email" name="email" placeholder="Email" />
              {errors.email && touched.email && <span>{errors.email}</span>}
              <Field
                type="text"
                as="textarea"
                name="message"
                placeholder="Qual a sua mensagem?"
                rows={5}
              />
              {errors.message && touched.message && (
                <span>{errors.message}</span>
              )}

              <button type="submit" disabled={isSubmitting}>
                Enviar
              </button>
            </FormStyle>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Contact;
