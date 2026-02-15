import { FilterForm } from '@/features/excursion-filtering';

import {
  Card,
  CardContent,
  CardHeader,
  Heading,
  HeadingHighlight,
  HeadingTitle,
} from '@/shared/ui';

export const ExcursionFilter = () => {
  return (
    <div className="bg-background-primary p-6 shadow-2xl">
      <Card className="border border-primary">
        <CardHeader>
          <Heading>
            <HeadingTitle className="text-center text-4xl">
              Подберите экскурсию,
              <br />
              <HeadingHighlight>подходящую именно Вам</HeadingHighlight>
            </HeadingTitle>
          </Heading>
        </CardHeader>
        <CardContent>
          <FilterForm />
        </CardContent>
      </Card>
    </div>
  );
};
