import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";
import { EmailRules, PasswordConfirmationRules, PasswordRules, RegistrationFields, RegistrationForm, RegistrationFormReturn, UserNameRules } from './definitions';

type RegistrationProps = {
  children: React.ReactNode;
  onSubmit: (data: RegistrationFields) => Promise<RegistrationFormReturn>,
}

export default function Registration({ children, onSubmit }: RegistrationProps) {
  const { register, handleSubmit, formState } = useForm<RegistrationForm>();
  const { errors, isLoading } = formState;

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mobile:mx-auto mobile:w-full mobile:max-w-sm">
        { children }
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
      </div>

      <div className="mt-10 mobile:mx-auto mobile:w-full mobile:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} >
          <div>
            <label htmlFor="userName" className="block text-sm/6 font-medium text-gray-900">User name</label>
            <div className="mt-2">
              <input
                className="pl-1 block w-full rounded-md border-0 py-1.5 mobile:text-sm/6 primary-input secondary-focus"
                id="userName" type="userName" autoComplete="userName"
                {...register('userName', UserNameRules)}
              />
              <ErrorMessage
                errors={errors}
                name="userName"
                render={({ message }) => (
                  <p className="text-red-500">{message}</p>
                )}
              />
            </div>
          </div>
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
            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
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

          <div>
            <div className="mt-2">
              <label htmlFor="confirmPassword" className="block text-sm/6 font-medium text-gray-900">Password Confirmation</label>
              <input
                className="pl-1 block w-full rounded-md border-0 py-1.5 mobile:text-sm/6 primary-input secondary-focus"
                id="confirmPassword" type="password" autoComplete="confirm-password"
                {...register('confirmPassword', PasswordConfirmationRules)}
              />
              <ErrorMessage
                errors={errors}
                name="confirmPassword"
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
          Already have an account?
          <a href="/login" className="font-semibold text-primary-light hover:text-primary-focus ml-1">Login now</a>
        </p>
      </div>
    </div>
  )
}