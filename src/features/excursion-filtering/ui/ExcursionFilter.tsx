import {
  Card,
  CardContent,
  CardHeader,
  Heading,
  HeadingHighlight,
  HeadingTitle,
} from '@/shared/ui';

import { FilterForm } from './FilterForm';

export const ExcursionFilter = () => {
  return (
    <div className="bg-background-primary p-6 shadow-2xl">
      <Card className="border border-primary">
        <CardHeader>
          <Heading>
            <HeadingTitle className="text-center text-4xl font-light">
              Подберите экскурсию,
              <br />
              подходящую именно <HeadingHighlight>Вам</HeadingHighlight>
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
