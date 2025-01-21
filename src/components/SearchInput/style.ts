import styled from 'styled-components';

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 24px;
  outline: none;
  transition: border 0.3s ease;
  font-size: 1em;
  &:focus {
    border-color: ${({ theme }) => theme.colors.black};
  }
`;

export const Icon = styled.div`
  position: absolute;
  right: 24px;
  top: 12px;
`;
