import type { ReactNode } from 'react';

import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';

type HomeLayoutProps = {
  children: ReactNode;
};

const HomeLayout = (props: Readonly<HomeLayoutProps>) => {
  const { children } = props;

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
