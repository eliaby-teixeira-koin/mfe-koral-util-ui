import { styled } from "styled-components";
import { theme } from "../../../themes/default";
import { SelectProps } from "./props";
import {
   backgrounds,
   bordercolors,
   colors,
   fontsizes,
   heights,
   hoverbackgrounds,
   hoverbordercolors,
   hovercolors,
   paddings,
   widths
} from "./consts";

export const SelectContainer = styled.select<SelectProps>`
   padding: 0.625rem 0.875rem;
   border-radius: 8px;  
   /* background: ${({ variant }) => theme[backgrounds[variant]]}; */
   /* display: flex;
   justify-content: center;
   align-items: center;
   border-color: ${({ variant }) => theme[bordercolors[variant]]};
   color: ${({ variant }) => theme[colors[variant]]};
   padding: ${({ size }) => paddings[size]};
   width: ${({ size }) => widths[size]};
   height: ${({ size }) => heights[size]};
   font-size: ${({ size }) => fontsizes[size]};
   border-width: 1px;
   border-style: solid;
   gap: 8px;
   font-weight: 600;
   line-height: 150%;
   transition: background, color 200ms; */

   /* &:hover {
      border-color: ${({ variant }) => theme[hoverbordercolors[variant]]};
      background: ${({ variant }) => theme[hoverbackgrounds[variant]]};
      color: ${({ variant }) => theme[hovercolors[variant]]};
   } */
`;

export const Option = styled.option`
   padding: 1rem;
`;
