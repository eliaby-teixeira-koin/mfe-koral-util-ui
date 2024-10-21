import styled from "styled-components";
import { theme } from "../../themes/default";
import { ContainerProps, FlexProps } from "./props";

export const Container = styled.section<ContainerProps>`
   width: 100%;
   max-width:${({ maxWidth }) => maxWidth ? maxWidth : '1280px'};
   padding: ${({ padding }) => padding ? padding : '0'};
   background: ${theme["base-white"]};
   height: auto;
   margin: 0 auto;
`;

export const Flex = styled.div<FlexProps>`
   display: flex;
   gap: ${({ gap }) => gap ? gap : '1rem'};
   margin: ${({ margin }) => margin ? margin : '1rem'};
   padding: ${({ padding }) => padding ? padding : '1rem'};
   flex-direction: ${({ direction }) => direction ? direction : 'row'};
   justify-content: ${({ justify }) => justify ? justify : 'flex-start'};
   align-items: ${({ align }) => align ? align : 'flex-start'};
`;