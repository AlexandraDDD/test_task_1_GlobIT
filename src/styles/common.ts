import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 1121px;
  margin: 0 auto;
  padding: 64px 32px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
interface TextProps {
  fontSize?: string;
}
export const LightText = styled.p<TextProps>`
  color: ${({ theme }) => theme.colors.lightText};
  font-size: ${({ fontSize = '1rem' }) => fontSize};
`;

export const RegularText = styled.p<TextProps>`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ fontSize = '1rem' }) => fontSize};
`;
export const CustomError = styled.p<TextProps>`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ fontSize = '1rem' }) => fontSize};
`;

interface FlexBoxProps {
  gap?: string;
  justifycontent?: string;
  alignItems?: string;
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flexWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
}

export const FlexBox = styled.div.withConfig({
  shouldForwardProp: prop =>
    !['justifycontent', 'alignItems', 'flexDirection', 'flexWrap'].includes(
      prop
    ),
})<FlexBoxProps>`
  display: flex;
  gap: ${({ gap = '12px' }) => gap};
  justify-content: ${({ justifycontent = 'flex-start' }) => justifycontent};
  align-items: ${({ alignItems = 'stretch' }) => alignItems};
  flex-direction: ${({ flexDirection = 'row' }) => flexDirection};
  flex-wrap: ${({ flexWrap = 'nowrap' }) => flexWrap};
`;

interface GridBoxProps {
  gridTemplateColumns?: string;
  gridGap?: string;
  justifyItems?: string;
  alignItems?: string;
}

export const GridBox = styled.div<GridBoxProps>`
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns = 'repeat(3, 1fr)' }) =>
    gridTemplateColumns};
  gap: ${({ gridGap = '25px' }) => gridGap};
  justify-items: ${({ justifyItems = 'stretch' }) => justifyItems};
  align-items: ${({ alignItems = 'stretch' }) => alignItems};
`;

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Proxima Nova', sans-serif;
    margin: 0;
    padding: 0;
  }
  p{
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-family: ${({ theme }) => theme.fonts.regular};
  }
  h1{
    margin: 0;
  }
  ul{
    text-decoration: none;
    list-style-type: none;
    padding: 0;
    margin:0 ;

  }
`;
