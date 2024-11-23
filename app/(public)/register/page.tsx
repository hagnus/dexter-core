'use client'
import Image from 'next/image';
import RegistrationForm from '@components/AccessForms/RegistrationForm';
import { register } from '@public/register/actions';

export default function Registration() {
  return (
    <RegistrationForm onSubmit={register} >
      <Image className="mx-auto w-auto rounded-full" alt="Dexter" src="/DexterIcon.png" width={60} height={60} />
    </RegistrationForm>
  )
}