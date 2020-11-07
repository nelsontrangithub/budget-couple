import { createGlobalStyle } from 'styled-components';
import { theme } from '../constants/theme';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${theme.colors.olive.dark};
    background: linear-gradient(
      145deg,
      ${theme.colors.olive.dark} 0%,
      ${theme.colors.olive.light} 100%
    );

    ${`bg-fixed bg-no-repeat font-sans font-normal leading-normal text-grey h-full`}
  }
`;

export default GlobalStyle;
