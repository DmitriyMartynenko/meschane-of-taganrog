import { RegisterForm } from '@/features/auth/ui/RegisterForm';

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold">Добро пожаловать в Иммерсивные Экскурсии</h1>
        <p className="text-lg text-gray-700">Организуйте и бронируйте уникальные экскурсии</p>
      </section>
      <section className="max-w-md mx-auto">
        <RegisterForm />
      </section>
    </div>
  );
}