import styled from 'styled-components';
export const Button = styled.button`
  width: 80px;
  padding: 12px 12px;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  box-shadow: 3px 3px 6px 0px rgba(196, 190, 196, 1);
  border: none;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 8px;
  }
  background: ${({ children }) =>
    (children === 'good' && '#489b47') ||
    (children === 'neutral' && '#e8df76') ||
    (children === 'bad' && '#ea6565')};
`;
