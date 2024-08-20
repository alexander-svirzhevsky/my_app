import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './Icon.module.css';

type IconProps = {
  className?: string;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const Icon = ({ className, Svg }: IconProps) => {
  return <Svg className={classNames(cn['Icon'], {}, [className])} />;
};
