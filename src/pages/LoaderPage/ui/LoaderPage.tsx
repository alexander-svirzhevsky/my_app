import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './LoaderPage.module.css';
import { Loader } from '@/shared/ui/Loader/ui/Loader';
import { Page } from '@/widgets/Page';

type LoaderPageProps = {
  className?: string;
};

export const LoaderPage = ({ className }: LoaderPageProps) => {
  return (
    <Page>
      <div className={classNames(cn['loaderPage'], {}, [className])}>
        <Loader />
      </div>
    </Page>
  );
};
