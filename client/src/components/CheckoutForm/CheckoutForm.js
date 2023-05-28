import "./CheckoutForm.scss";
import React from "react";
import * as yup from "yup";
import "yup-phone";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../redux/features/orderSlice";
import { removeProductsTotally } from "../../redux/features/cartSlice";

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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products, totalCost } = useSelector((state) => ({
    ...state.cart,
  }));

  const { chosenShop, chosenShopLocation } = useSelector((state) => ({
    ...state.shops,
  }));

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

          const maxNum = 999;

          const id = String(Math.floor(Math.random() * maxNum));

          values["id"] = id;

          values["shop"] = chosenShop;

          values["cost"] = totalCost;

          values["shopLocation"] = chosenShopLocation;

          const orderedProducts = products.map((product) => {
            return {
              productName: product.name,
              productQuantity: product.amount,
              productPrice: product.price,
            };
          });

          values["orderedItems"] = orderedProducts;

          setTimeout(() => {
            if (products.length === 0) {
              alert("Please select products before submitting order form");
              navigate("/");
            } else {
              dispatch(createOrder(values));
              resetForm();
              dispatch(removeProductsTotally());
              setSubmitting(false);
            }
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

/*


shopLocation
orderedItems:  productQuantity: productName

*/
