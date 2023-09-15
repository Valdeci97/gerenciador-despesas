import { RegisterLinkProps } from '@/@types/register-link-props';

export default function RegisterLink({ linkText = 'Cadastre-se' }: RegisterLinkProps) {
  return (
    <a
      href="/register"
      className="flex justify-center items-center w-225px bg-green-contrast h-50px rounded-md text-white text-20px"
    >
      {linkText}
    </a>
  );
}
