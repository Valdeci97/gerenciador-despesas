import FormButton from './FormButton';
import FormIllustration from './FormIllustration';
import Input from './Input';
import Logo from './Logo';

export default function RegisterForm() {
  return (
    <form
      action=""
      className="grid h-85% w-500px bg-white rounded-lg max-h-[890px] grid-rows-register-form items-center smdvc-400px:w-90% mddvc-540px:w-80% dvc-brkpt-768px:w-75%"
    >
      <a href="/" title="Logo - Voltar ao início" className="justify-self-center pt-30px">
        <Logo
          theme={{ common: 'fill-dark-mode-common', contrast: 'fill-white' }}
          defaultSize="75"
        />
      </a>
      <div className="justify-self-center h-fit">
        <FormIllustration />
      </div>
      <Input
        labelText="Seu email"
        inputType="email"
        id="email-input"
        placeholder="organizado@gmail.com"
      />
      <Input
        labelText="Senha"
        inputType="password"
        id="password-field"
        placeholder="********"
      />
      <Input
        labelText="Repetir senha"
        inputType="password"
        id="repeat-password-field"
        placeholder="********"
      />
      <FormButton btnText="Criar conta" />
    </form>
  );
}
