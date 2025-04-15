import { ReactNode } from 'react';

import { Header } from '@/widgets/Header/ui/Header';

type HomeLayoutProps = {
  children: ReactNode;
};

const HomeLayout = ({ children }: Readonly<HomeLayoutProps>) => {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default HomeLayout;
