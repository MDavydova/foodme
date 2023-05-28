import "../OrderInfoPage/OrderInfoPage.scss";
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
import * as yup from "yup";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getOrderByPhone,
  getOrderById,
  getOrderByEmail,
} from "../../redux/features/orderSlice";
import { Formik } from "formik";

const formSchema = yup.object().shape({
  searchOrder: yup
    .string()
    .min(2, "Please add more symbols")
    .max(50, "Please add less symbols")
    .required("Type something to find your order"),
});

function OrderInfoPage({ pageClassName }) {
  const dispatch = useDispatch();

  const { order } = useSelector((state) => ({
    ...state.order,
  }));

  return (
    <main className={pageClassName}>
      <div className="container">
        <h1>Order Info</h1>
        <Formik
          initialValues={{
            searchOrder: "",
          }}
          validationSchema={formSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            setTimeout(() => {
              const formData = new FormData();
              formData.append("id", values.searchOrder);
              dispatch(getOrderById(formData));
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
              <FormGroup row>
                <Col>
                  <InputGroup>
                    <InputGroupText>
                      <Label for="searchOrder">
                        <span role="img" aria-label="search emoji">
                          🕵
                        </span>
                      </Label>
                    </InputGroupText>
                    <Input
                      id="searchOrder"
                      name="searchOrder"
                      placeholder="Type your email, phone or order id"
                      onChange={handleChange}
                      value={values.searchOrder}
                      onBlur={handleBlur}
                      className={
                        touched.searchOrder && errors.searchOrder
                          ? "error"
                          : null
                      }
                    />
                    {touched.searchOrder && errors.searchOrder ? (
                      <div className="error-message">{errors.searchOrder}</div>
                    ) : null}
                  </InputGroup>
                </Col>
              </FormGroup>
              <Button
                type="submit"
                className="form__btn"
                color="success"
                disabled={isSubmitting}
              >
                Search
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </main>
  );
}

export default OrderInfoPage;
