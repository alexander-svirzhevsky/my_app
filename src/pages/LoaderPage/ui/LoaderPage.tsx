import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './LoaderPage.module.css';
import { Loader } from '@/shared/ui/Loader/ui/Loader';

type LoaderPageProps = {
    className?: string;
};

export const LoaderPage = ({ className }: LoaderPageProps) => {
    return (
        <div className={classNames(cn['loaderPage'], {}, [className])}>
            <Loader />
        </div>
    );
};
