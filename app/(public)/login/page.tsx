'use client'
import Image from 'next/image';
import LoginForm from '@components/AccessForms/LoginForm';
import { login } from '@public/login/actions';

export default function Login() {
  return (
    <LoginForm onSubmit={login} >
      <Image className="mx-auto w-auto rounded-full" alt="Dexter" src="/DexterIcon.png" width={60} height={60} />
    </LoginForm>
  )
}