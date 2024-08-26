import { FC, SVGProps } from 'react';

export type SideBarItemType = {
  path: string;
  text: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
  authRequired?: boolean;
};
