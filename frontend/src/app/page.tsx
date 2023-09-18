import DevicesIcon from '@/components/DevicesIcon';
import HomeIcon from '@/components/HomeIcon';
import RegisterLink from '@/components/RegisterLink';
import ShieldLocked from '@/components/ShieldLocked';

import '@/styles/home.css';

export default function Home() {
  return (
    <main className="min-h-without-scroll">
      <section className="section-container">
        <h1 className="text-32px text-light mb-30px px-30px">
          Conheça&nbsp;
          <span className="text-32px text-green-contrast">praticidades</span> que vão além
          do que planilhas oferecem
        </h1>
        <p className="text-24px text-light mb-85px px-30px">
          Organize seu dinheiro em tempo real em uma solução completa, prática e segura.
          Tenha todos os seus gastos em um só local, para ter controle total de suas
          finanças.
        </p>
        <RegisterLink linkText="Teste agora" cssClass="mt-30px" />
        <section className="w-full flex flex-col gap-20px mt-30px items-center max-w-max">
          <HomeIcon message="Acesse quando quiser, no celular ou computador.">
            <DevicesIcon />
          </HomeIcon>
          <HomeIcon message="A segurança dos seus dados vêm em primeiro lugar">
            <ShieldLocked />
          </HomeIcon>
        </section>
      </section>
    </main>
  );
}
