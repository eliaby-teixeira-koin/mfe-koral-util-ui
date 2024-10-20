import 'styled-components'
import { theme } from '../themes/default';

type ThemeType = typeof theme

declare module 'styled-components' {
   export interface DefaultTheme extends ThemeType { }
}