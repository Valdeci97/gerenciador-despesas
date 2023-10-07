import Link from 'next/link';
import FormButton from './FormButton';
import Input from './Input';
import Logo from './Logo';

export default function LoginForm() {
  return (
    <form
      action=""
      className="grid h-80vh w-500px bg-white rounded-lg max-h-[890px] grid-rows-login-form items-center smdvc-400px:w-90% mddvc-540px:w-80% dvc-brkpt-768px:w-75%"
    >
      <Link
        href="/"
        title="Logo - Voltar ao início"
        className="justify-self-center pt-30px"
      >
        <Logo
          theme={{ common: 'fill-dark-mode-common', contrast: 'fill-white' }}
          defaultSize="75"
        />
      </Link>
      <Input
        labelText="Seu email"
        inputType="email"
        id="email-field"
        placeholder="organizado@gmail.com"
      />
      <Input
        labelText="Senha"
        inputType="password"
        id="password-field"
        placeholder="********"
      />
      <FormButton btnText="Entrar" />
    </form>
  );
}
