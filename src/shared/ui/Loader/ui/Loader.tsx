import { classNames } from '@/shared/lib/classNames/classNames';
import './Loader.css';

type LoaderProps = {
    className?: string;
};

export const Loader = ({ className }: LoaderProps) => {
    return (
        <div className={classNames('', {}, [className])}>
            <span className='loader'></span>
        </div>
    );
};
