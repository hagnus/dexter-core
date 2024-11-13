'use client'
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";
import { login } from '@public/login/actions';
import { EmailRules, LoginInput, PasswordRules } from '@public/login/definitions';

export default function Login() {
  const { register, handleSubmit, formState: { errors, isLoading } } = useForm<LoginInput>();

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mobile:mx-auto mobile:w-full mobile:max-w-sm">
        <Image className="mx-auto w-auto rounded-full" alt="Dexter" src="/DexterIcon.png" width={60} height={60} />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
      </div>

      <div className="mt-10 mobile:mx-auto mobile:w-full mobile:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(login)} >
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
            <div className="mt-2">
              <input
                className="pl-1 block w-full rounded-md border-0 py-1.5 mobile:text-sm/6 primary-input secondary-focus"
                id="email" type="email" autoComplete="email"
                {...register('email', EmailRules)}
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => (
                  <p className="text-red-500">{message}</p>
                )}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium text-primary-dark">Password</label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-primary-light hover:text-primary-focus">Forgot password?</a>
              </div>
            </div>
            <div className="mt-2">
              <input
                className="pl-1 block w-full rounded-md border-0 py-1.5 mobile:text-sm/6 primary-input secondary-focus"
                id="password" type="password" autoComplete="current-password"
                {...register('password', PasswordRules)}
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => (
                  <p className="text-red-500">{message}</p>
                )}
              />
            </div>
          </div>

          <ErrorMessage
            errors={errors}
            name="error"
            render={({ message }) => (
              <p className="text-red-500">{message}</p>
            )}
          />
          <div>
            <button className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm/6 font-semibold primary-button primary-focus"
              aria-disabled={isLoading} type="submit">
              {isLoading ? 'Submitting...' : 'Sign up'}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-primary">
          Not a member?
          <a href="#" className="font-semibold text-primary-light hover:text-primary-focus ml-1">Register now</a>
        </p>
      </div>
    </div>
  )
}