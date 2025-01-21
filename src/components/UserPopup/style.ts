import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(79, 84, 137, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupContainer = styled.div`
  max-width: 500px;
  background-color: white;
  padding: 29px 24px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
`;

export const TableCell = styled.td`
  padding: 8px;
  vertical-align: top;
  text-align: left;
  padding-right: 40px;
  &:first-child {
    padding-right: 20px;
  }
`;
