import { ButtonContainer }  from './styles';
import { ButtonProps } from './props';

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
   console.log(iconOnly);
   return (
      <ButtonContainer
         variant={variant}
         onClick={onClick}
         size={size}
         iconOnly={iconOnly}
      >
         {iconOnly ? icon : null}
         {iconOnly ? null : iconStart}
         {iconOnly ? null : <label>{text} {size}</label>}
         {iconOnly ? null : iconEnd}
      </ButtonContainer>
   )
}
