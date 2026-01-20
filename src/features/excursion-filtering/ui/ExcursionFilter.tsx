import { Card, CardContent, CardHeader, CardTitle, HeadingHighlight } from '@/shared/ui';

import { FilterForm } from './FilterForm';

export const ExcursionFilter = () => {
  return (
    <div className="bg-background-primary p-6 shadow-2xl">
      <Card className="border border-primary">
        <CardHeader>
          <CardTitle className="text-center text-4xl font-light">
            Подберите экскурсию,
            <br />
            подходящую именно <HeadingHighlight>Вам</HeadingHighlight>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FilterForm />
        </CardContent>
      </Card>
    </div>
  );
};
