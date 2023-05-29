import "../OrderInfoPage/OrderInfoPage.scss";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
import { getOrderByKey, makeOrderEmpty } from "../../redux/features/orderSlice";
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

  const { order, error } = useSelector((state) => ({
    ...state.order,
  }));

  const location = useLocation();

  useEffect(() => {
    dispatch(makeOrderEmpty());
  }, [location]);

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
            const formData = new FormData();
            formData.append("searchWord", values.searchOrder);
            dispatch(getOrderByKey(formData));
            resetForm();
            setSubmitting(false);
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
        {order.hasOwnProperty("id") && (
          <>
            <h2 style={{ textAlign: "center", marginTop: "50px" }}>
              Here is your order info:
            </h2>
            <div className="flex flex-column">
              <p>
                Your address:{" "}
                <span style={{ fontWeight: "bold" }}>{order.address}</span>
              </p>
              <p>
                Your order id:{" "}
                <span style={{ fontWeight: "bold" }}>{order.id}</span>
              </p>
              <p>
                Shop name:{" "}
                <span style={{ fontWeight: "bold" }}>{order.shop}</span>
              </p>
              <p>
                Your phone number:{" "}
                <span style={{ fontWeight: "bold" }}>+{order.phone}</span>
              </p>
              <p>
                Total delivery cost :{" "}
                <span style={{ fontWeight: "bold" }}>${order.cost}</span>
              </p>
              <span style={{ marginBottom: "10px" }}> You ordered:</span>
              <ol>
                {order.orderedItems.map((product, index) => (
                  <li key={index}>
                    <p>
                      {" "}
                      <span
                        style={{
                          textTransform: "capitalize",
                          fontWeight: "bold",
                        }}
                      >
                        {""}
                        {product.productName}
                      </span>
                      {" - "}
                      <span style={{ fontWeight: "bold" }}>
                        {product.productQuantity}{" "}
                      </span>
                      items
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </>
        )}

        {!(error === "") && (
          <h2 style={{ textAlign: "center", marginTop: "50px" }}>{error}</h2>
        )}
      </div>
    </main>
  );
}

export default OrderInfoPage;
