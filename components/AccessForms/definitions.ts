import { FieldErrors } from 'react-hook-form';

export interface LoginFields extends FormData {
  email: string;
  password: string;
}

export interface LoginForm extends LoginFields {
  error?: string;
}

export interface RegistrationFields extends LoginFields {
  confirmPassword: string;
  userName: string;
}

export type RegistrationForm = RegistrationFields & LoginForm;
export type LoginFormReturn = FieldErrors<LoginForm> | void;
export type RegistrationFormReturn = FieldErrors<RegistrationForm> | void;

export const PasswordRules = {
  required: {
    value: true,
    message: "Password is required",
  },
  validate: {
    minLength: (value: string) =>
      value.length >= 8 ||
      "Password should has more than 8 characters",
    isCapitalLetter: (value: string) =>
      /[A-Z]/.test(value) ||
      "Password should has at least one capital letter",
    isLowerCaseLetter: (value: string) =>
      /[a-z]/.test(value) ||
      "Password should has at least one lower case letter",
    isContainNumber: (value: string) =>
      /\d/.test(value) ||
      "Password should has at least one number",
  }
}

export const PasswordConfirmationRules = {
  required: {
    value: true,
    message: "Password confirmation is required",
  },
  validate: {
    minLength: (value: string) =>
      value.length >= 8 ||
      "Password should has more than 8 characters",
    isCapitalLetter: (value: string) =>
      /[A-Z]/.test(value) ||
      "Password should has at least one capital letter",
    isLowerCaseLetter: (value: string) =>
      /[a-z]/.test(value) ||
      "Password should has at least one lower case letter",
    isContainNumber: (value: string) =>
      /\d/.test(value) ||
      "Password should has at least one number",
    isMatching: (value: string, formValues: RegistrationFields) => {
      console.log('VALIDATE PASSWORD', value, formValues.confirmPassword, formValues.confirmPassword !== value);
      if (formValues.password !== value) {
        return "Your passwords do no match";
      }
    },
  }
}

export const EmailRules = {
  required: 'Email is required',
  validate: {
    isValidEmail: (value: string) =>
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        value
      ) || "Please enter a valid email",
  }
}

export const UserNameRules = {
  required: 'User name is required',
  validate: {
    minLength: (value: string) =>
      value.length >= 4 ||
      "User name should has more than 4 characters",
    maxLength: (value: string) =>
      value.length <= 20 ||
      "User name should has less than 20 characters",
  }
}