import React from 'react';
import { ButtonContainer }  from './styles';
import { ButtonProps } from './props';
import { theme } from "../../../themes/default";
import { iconsizes } from './consts';

export function Button({
   text,
   variant,
   size,
   icon,
   iconOnly,
   onClick,
   iconStart,
   iconEnd
}: ButtonProps) {
   const cloneElement = (element) => React.cloneElement(element, {
      size: iconsizes[size],
      color: theme[variant]
   })
   return (
      <ButtonContainer
         variant={variant}
         onClick={onClick}
         size={size}
         iconOnly={iconOnly}
      >
         {iconOnly && icon && cloneElement(icon)}
         {!iconOnly && iconStart && cloneElement(iconStart)}
         {!iconOnly && text && <label>{text}</label>}
         {!iconOnly && iconEnd && cloneElement(iconEnd)}
      </ButtonContainer>
   )
}
