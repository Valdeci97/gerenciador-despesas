export default function HomeLinks() {
  return (
    <>
      <ul className="w-full flex items-center justify-evenly desktop-navbar-items">
        <li className="text-light">
          <a href="/" className="text-fgl">
            Início
          </a>
        </li>
        <li className="text-light">
          <a href="/resources" className="text-fgl">
            Recursos
          </a>
        </li>
        <li className="">
          <a href="/faq" className="text-light text-fgl">
            FAQ
          </a>
        </li>
        <li className="text-light">
          <a href="/login" className="text-fgl">
            Login
          </a>
        </li>
      </ul>
      <div className="flex justify-end items-center desktop-navbar-items">
        <a
          href="/register"
          className="flex justify-center items-center w-225 bg-btngreen h-50 rounded-md text-white text-fgl"
        >
          Cadastre-se
        </a>
      </div>
    </>
  );
}
