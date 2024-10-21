import { ReactElement } from "react";

export interface SelectProps {
   // text?: string;
   variant?: 'primary' | 'secondary-gray' | 'secondary-color' | 'tertiary-gray' | 'tertiary-color' | 'link-gray';
   // color?: string;
   // width?: string;
   // icon?: ReactElement;
   // size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
   // background?: string;
   onChange?: () => void;
   id?: string;
   name?: string;
   selectList?: Array<{ key: string, value: string }>;
}