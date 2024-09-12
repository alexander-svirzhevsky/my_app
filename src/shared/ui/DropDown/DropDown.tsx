import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cn from './DropDown.module.css';
import { Fragment, ReactNode } from 'react';
import { Link, To } from 'react-router-dom';
import { AnchorProps } from '@headlessui/react/dist/internal/floating';
import { AppLink } from '../AppLink';

type DropDownItem = {
  content: string;
  onClick?: () => void;
  to?: To;
};

type DropDownProps = {
  className?: string;
  trigger: ReactNode;
  dropDownItems: DropDownItem[];
  menuPosition?: AnchorProps;
};

export const DropDown = ({
  className,
  trigger,
  dropDownItems,
  menuPosition = 'bottom start',
}: DropDownProps) => {
  return (
    <Menu
      as='div'
      className={classNames(cn['DropDown'], {}, [className])}
    >
      <MenuButton className={cn['trigger']}>{trigger}</MenuButton>
      <MenuItems
        className={cn['list']}
        anchor={menuPosition}
      >
        {dropDownItems.map((item) => {
          const content = ({ focus }: { focus: boolean }) => (
            <button
              className={classNames(cn['item'], {
                [cn['focus']]: focus,
              })}
              onClick={item?.onClick}
            >
              {item.content}
            </button>
          );

          if (item.to) {
            return (
              <MenuItem
                key={item.content}
                as={Link}
                to={item.to}
              >
                {content}
              </MenuItem>
            );
          }

          return (
            <MenuItem
              key={item.content}
              as={Fragment}
            >
              {content}
            </MenuItem>
          );
        })}
      </MenuItems>
    </Menu>
  );
};
