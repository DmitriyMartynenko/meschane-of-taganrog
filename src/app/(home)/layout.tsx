import { ReactNode } from 'react';

import { Header } from '@/widgets/Header/ui/Header';

type HomeLayoutProps = {
  children: ReactNode;
};

const HomeLayout = ({ children }: Readonly<HomeLayoutProps>) => {
  return (
    <div className="flex flex-col min-h-screen bg-amber-50">
      <div className="flex-1 container h-full mx-auto">
        <Header />
        <main className="bg-promo-background">{children}</main>
      </div>
    </div>
  );
};

export default HomeLayout;
