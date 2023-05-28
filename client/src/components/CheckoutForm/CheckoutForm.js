import "./CheckoutForm.scss";
import React from "react";
import * as yup from "yup";
import "yup-phone";
import {
  Button,
  Input,
  InputGroup,
  InputGroupText,
  Col,
  Label,
  Form,
  FormGroup,
} from "reactstrap";
import { Formik } from "formik";

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Email is required"),
  name: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
  phone: yup
    .string()
    .phone("", false, "Must be a valid phone number")
    .required("Phone number is required"),
  address: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Address is required"),
});

function CheckoutForm() {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          name: "",
          phone: "",
          address: "",
        }}
        validationSchema={formSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);

          // Simulate submitting to database, shows us values submitted, resets form
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
            setSubmitting(false);
          }, 500);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            {console.log(values)}
            <FormGroup row>
              <Col>
                <InputGroup className="mb-32">
                  <InputGroupText>
                    <Label for="phone">
                      <span role="img" aria-label="phone emoji">
                        ☎️
                      </span>
                    </Label>
                  </InputGroupText>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+38099999999"
                    type="tel"
                    onChange={handleChange}
                    value={values.phone}
                    onBlur={handleBlur}
                    className={touched.phone && errors.phone ? "error" : null}
                  />
                  {touched.phone && errors.phone ? (
                    <div className="error-message">{errors.phone}</div>
                  ) : null}
                </InputGroup>
                <InputGroup className="mb-32">
                  <InputGroupText>
                    <Label for="name">
                      <span>Name</span>
                    </Label>
                  </InputGroupText>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    type="name"
                    onChange={handleChange}
                    value={values.name}
                    onBlur={handleBlur}
                    className={touched.name && errors.name ? "error" : null}
                  />
                  {touched.name && errors.name ? (
                    <div className="error-message">{errors.name}</div>
                  ) : null}
                </InputGroup>
                <InputGroup className="mb-32">
                  <InputGroupText>
                    <Label for="email">
                      <span>Email</span>
                    </Label>
                  </InputGroupText>
                  <Input
                    id="email"
                    name="email"
                    placeholder="email@gmail.com"
                    type="email"
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                    className={touched.email && errors.email ? "error" : null}
                  />
                  {touched.email && errors.email ? (
                    <div className="error-message">{errors.email}</div>
                  ) : null}
                </InputGroup>
                <InputGroup className="mb-32">
                  <InputGroupText>
                    <Label for="address">
                      <span>Address</span>
                    </Label>
                  </InputGroupText>
                  <Input
                    id="address"
                    name="address"
                    placeholder="Your address"
                    onChange={handleChange}
                    value={values.address}
                    onBlur={handleBlur}
                    className={
                      touched.address && errors.address ? "error" : null
                    }
                  />
                  {touched.address && errors.address ? (
                    <div className="error-message">{errors.address}</div>
                  ) : null}
                </InputGroup>
              </Col>
            </FormGroup>
            <Button type="submit" color="success" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CheckoutForm;
