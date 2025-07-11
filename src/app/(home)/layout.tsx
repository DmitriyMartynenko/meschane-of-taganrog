import type { ReactNode } from 'react';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';

type HomeLayoutProps = {
  children: ReactNode;
};

const HomeLayout = (props: Readonly<HomeLayoutProps>) => {
  const { children } = props;

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
