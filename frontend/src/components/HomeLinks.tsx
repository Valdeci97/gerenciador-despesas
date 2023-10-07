import Link from 'next/link';

import RegisterLink from './RegisterLink';

export default function HomeLinks() {
  return (
    <>
      <ul className="w-full flex items-center justify-evenly">
        <li className="text-light dark:text-white">
          <Link href="/" className="text-20px">
            Início
          </Link>
        </li>
        <li className="text-light dark:text-white">
          <Link href="/resources" className="text-20px">
            Recursos
          </Link>
        </li>
        <li className="text-light dark:text-white">
          <Link href="/faq" className="text-20px">
            FAQ
          </Link>
        </li>
        <li className="text-light dark:text-white">
          <Link href="/login" className="text-20px">
            Login
          </Link>
        </li>
      </ul>
      <div className="flex justify-end items-center desktop-navbar-items remove-now">
        <RegisterLink />
      </div>
    </>
  );
}
