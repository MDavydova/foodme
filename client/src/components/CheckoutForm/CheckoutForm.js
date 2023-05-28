import "./CheckoutForm.scss";
import React from "react";
import * as yup from "yup";
import "yup-phone";
import { useEffect, useState } from "react";
import {
  Button,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupText,
  Col,
  Label,
  Form,
  FormGroup,
} from "reactstrap";

const phoneSchema = yup.string().phone().required("Phone is required");
const nameSchema = yup
  .string()
  .min(2, "Too Short!")
  .max(50, "Too Long!")
  .required("Name is required");
const emailSchema = yup
  .string()
  .email("Invalid email")
  .required("Email is required");
const addressSchema = yup
  .string()
  .min(2, "Too Short!")
  .max(50, "Too Long!")
  .required("Address is required");

function CheckoutForm() {
  const [phone, setPhone] = useState("");
  const [phoneValid, setPhoneValid] = useState("");
  const [name, setName] = useState("");
  const [nameValid, setNameValid] = useState("");
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState("");
  const [address, setAddress] = useState("");
  const [addressValid, setAddressValid] = useState("");

  const validatePhone = async (phone) => {
    const isValid = await phoneSchema.isValid(phone);
    setPhoneValid(isValid);
  };

  const validateName = async (phone) => {
    const isValid = await nameSchema.isValid(name);
    setNameValid(isValid);
  };

  const validateEmail = async (phone) => {
    const isValid = await emailSchema.isValid(email);
    setEmailValid(isValid);
  };
  const validateAddress = async (phone) => {
    const isValid = await addressSchema.isValid(address);
    setAddressValid(isValid);
  };

  useEffect(() => {
    validatePhone(phone);
    validateName(name);
    validateEmail(email);
    validateAddress(address);
  }, [phone, name, email, address]);

  const onChangePhoneHandler = (ev) => {
    const { value } = ev.target;
    setPhone(value.trim());
  };
  const onChangeNameHandler = (ev) => {
    const { value } = ev.target;
    setName(value.trim());
  };
  const onChangeEmailHandler = (ev) => {
    const { value } = ev.target;
    setEmail(value.trim());
  };
  const onChangeAddressHandler = (ev) => {
    const { value } = ev.target;
    setAddress(value.trim());
  };

  const resetHandler = () => {
    setPhone("");
  };

  const resetNameHandler = () => {
    setName("");
  };
  const resetEmailHandler = () => {
    setEmail("");
  };
  const resetAddressHandler = () => {
    setAddress("");
  };

  const formSubmitHandler = (ev) => {
    ev.preventDefault();
  };

  return (
    <div>
      <Form onSubmit={formSubmitHandler}>
        <FormGroup row>
          <Col>
            <InputGroup className="mb-24">
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
                valid={phoneValid}
                invalid={!phoneValid}
                onChange={onChangePhoneHandler}
                value={phone}
              />
              <Button type="button" onClick={resetHandler}>
                <span role="img" aria-label="reset phone input">
                  🔄
                </span>
              </Button>
              <FormFeedback valid>You've entered a phone.</FormFeedback>
              <FormFeedback invalid>
                <em>You've entered an invalid phone.</em>
              </FormFeedback>
            </InputGroup>
            <InputGroup className="mb-24">
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
                valid={nameValid}
                invalid={!nameValid}
                onChange={onChangeNameHandler}
                value={name}
              />
              <Button type="button" onClick={resetNameHandler}>
                <span role="img" aria-label="reset name input">
                  🔄
                </span>
              </Button>
              <FormFeedback valid>You've entered a valid name.</FormFeedback>
              <FormFeedback invalid>
                <em>You've entered an invalid name.</em>
              </FormFeedback>
            </InputGroup>
            <InputGroup className="mb-24">
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
                valid={emailValid}
                invalid={!emailValid}
                onChange={onChangeEmailHandler}
                value={email}
              />
              <Button type="button" onClick={resetEmailHandler}>
                <span role="img" aria-label="reset email input">
                  🔄
                </span>
              </Button>
              <FormFeedback valid>You've entered a valid email.</FormFeedback>
              <FormFeedback invalid>
                <em>You've entered an invalid email.</em>
              </FormFeedback>
            </InputGroup>
            <InputGroup>
              <InputGroupText>
                <Label for="address">
                  <span>Address</span>
                </Label>
              </InputGroupText>
              <Input
                id="address"
                name="address"
                placeholder="Your address"
                valid={addressValid}
                invalid={!addressValid}
                onChange={onChangeAddressHandler}
                value={address}
              />
              <Button type="button" onClick={resetAddressHandler}>
                <span role="img" aria-label="reset address input">
                  🔄
                </span>
              </Button>
              <FormFeedback valid>You've entered a valid address.</FormFeedback>
              <FormFeedback invalid>
                <em>You've entered an invalid address.</em>
              </FormFeedback>
            </InputGroup>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
}

export default CheckoutForm;
