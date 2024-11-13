import { FieldErrors } from 'react-hook-form';

export type LoginInput = {
  email: string;
  password: string;
  error?: string
}

export type LoginOutput = FieldErrors<LoginInput> | void;

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

export const EmailRules = {
  required: 'Email is required',
  validate: {
    isValidEmail: (value: string) =>
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        value
      ) || "Please enter a valid email",
  }
}

