import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './NotFoundPage.module.css';

type NotFoundPageProps = {
    className?: string;
};

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    return <div className={classNames(cn['notFoundPage'], {}, [className])}>Not Found Page</div>;
};
