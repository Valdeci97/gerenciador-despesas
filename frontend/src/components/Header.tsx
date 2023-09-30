import dynamic from 'next/dynamic';

const DynamicNavBar = dynamic(() => import('./Navbar'), { ssr: false });

export default function Header() {
  return (
    <header className="px-30px grid h-80px">
      <DynamicNavBar />
    </header>
  );
}
