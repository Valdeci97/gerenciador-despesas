import RegisterLink from './RegisterLink';

export default function HomeLinks() {
  return (
    <>
      <ul className="w-full flex items-center justify-evenly">
        <li className="text-light dark:text-white">
          <a href="/" className="text-20px">
            Início
          </a>
        </li>
        <li className="text-light dark:text-white">
          <a href="/resources" className="text-20px">
            Recursos
          </a>
        </li>
        <li className="text-light dark:text-white">
          <a href="/faq" className="text-20px">
            FAQ
          </a>
        </li>
        <li className="text-light dark:text-white">
          <a href="/login" className="text-20px">
            Login
          </a>
        </li>
      </ul>
      <div className="flex justify-end items-center desktop-navbar-items remove-now">
        <RegisterLink />
      </div>
    </>
  );
}
