import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './NotFoundPage.module.css';
import { Page } from '@/shared/ui/Page';

type NotFoundPageProps = {
  className?: string;
};

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  return (
    <Page>
      <div className={classNames(cn['notFoundPage'], {}, [className])}>Not Found Page</div>
    </Page>
  );
};
