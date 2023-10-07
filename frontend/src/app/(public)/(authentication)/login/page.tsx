import Link from 'next/link';

import LoginForm from '@/components/LoginForm';

export default function Login() {
  return (
    <main className="flex flex-col justify-center items-center h-screen gap-y-30px">
      <LoginForm />
      <p className="text-20px text-light dark:text-white smdvc-400px:text-14px mddvc-540px:text-16px dvc-brkpt-768px:text-18px">
        Ainda não possui conta?&nbsp;
        <Link
          href="/register"
          className="text-20px text-green-contrast smdvc-400px:text-14px mddvc-540px:text-16px dvc-brkpt-768px:text-18px"
        >
          Faça seu cadastro!
        </Link>
      </p>
    </main>
  );
}
