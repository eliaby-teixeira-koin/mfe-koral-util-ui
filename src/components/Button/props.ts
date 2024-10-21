import { ReactElement } from "react";

export interface ButtonProps {
   iconOnly?: boolean;
   text?: string;
   variant?: 'primary' | 'secondary-gray' | 'secondary-color' | 'tertiary-gray' | 'tertiary-color' | 'link-gray';
   size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
   onClick?: () => void;
   icon?: ReactElement;
   iconStart?: ReactElement;
   iconEnd?: ReactElement;
}