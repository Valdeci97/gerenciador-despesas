import Link from 'next/link';

import RegisterForm from '@/components/RegisterForm';

export default function Register() {
  return (
    <main className="flex flex-col justify-center items-center h-screen gap-y-30px">
      <RegisterForm />
      <p className="text-20px text-light dark:text-white smdvc-400px:text-14px mddvc-540px:text-16px dvc-brkpt-768px:text-18px">
        Já tenho uma conta.&nbsp;
        <Link
          href="/login"
          className="text-20px text-green-contrast smdvc-400px:text-14px mddvc-540px:text-16px dvc-brkpt-768px:text-18px"
        >
          Quero fazer login!
        </Link>
      </p>
    </main>
  );
}
