import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  min-height: 357px;
  border-radius: 16px;
  cursor: pointer;
  transition: all ease 0.3s;
  &:hover {
    background-color: rgba(79, 84, 137, 0.1);
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
