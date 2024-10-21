import { styled } from "styled-components";
import { theme } from "../../themes/default";
import { ButtonProps } from "./props";
import {
   backgrounds, bordercolors, colors, fontsizes, heights, hoverbackgrounds, hoverbordercolors, hoverboxshadows,
   hovercolors, paddings, paddingsIconOlny, widths
} from "./consts";

export const ButtonContainer = styled.button<ButtonProps>`
   display: flex;
   justify-content: center;
   align-items: center;
   border-color: ${({ variant }) => theme[bordercolors[variant]]};
   background: ${({ variant }) => theme[backgrounds[variant]]};
   color: ${({ variant }) => theme[colors[variant]]};
   padding: ${({ size, iconOnly }) => iconOnly ? paddingsIconOlny[size]: paddings[size]};
   width: ${({ size, iconOnly }) => iconOnly ? 'fit-content' : widths[size]};
   height: ${({ size }) => heights[size]};
   font-size: ${({ size }) => fontsizes[size]};
   transition: background, color, box-shadow 200ms;
   border-style: solid;
   border-radius: 8px;  
   border-width: 1px;
   font-weight: 600;
   line-height: 150%;
   gap: 8px;

   &:hover {
      border-color: ${({ variant }) => theme[hoverbordercolors[variant]]};
      background: ${({ variant }) => theme[hoverbackgrounds[variant]]};
      color: ${({ variant }) => theme[hovercolors[variant]]};
   }

   &:focus,
   &:focus-visible,
   &:active {
      box-shadow: ${({ variant }) => hoverboxshadows[variant]};
   }
`;
