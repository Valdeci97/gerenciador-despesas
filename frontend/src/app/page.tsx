import RegisterLink from '@/components/RegisterLink';

export default function Home() {
  return (
    <main>
      <h1 className="text-32px text-light">
        Conheça&nbsp;
        <span className="text-32px text-green-contrast">praticidades</span> que vão além
        do que planilhas oferecem
      </h1>
      <p className="text-24px text-light">
        Organize seu dinheiro em tempo real em uma solução completa, prática e segura.
        Tenha todos os seus gastos em um só local, para ter controle total de suas
        finanças.
      </p>
      <RegisterLink linkText="Teste agora" />
    </main>
  );
}
