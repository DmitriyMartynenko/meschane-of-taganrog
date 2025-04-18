import { ReactNode } from 'react';

import { Header } from '@/widgets/Header';

type HomeLayoutProps = {
  children: ReactNode;
};

const HomeLayout = (props: Readonly<HomeLayoutProps>) => {
  const { children } = props;

  return (
    <div className="flex flex-col w-full min-h-screen">
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default HomeLayout;
