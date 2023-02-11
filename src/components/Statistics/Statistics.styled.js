import styled from 'styled-components';

export const StatisticsList = styled.ul`
  margin: 0 0 15px 0;
`;

export const StatisticsItem = styled.li`
  font-size: 20px;
  font-weight: bold;
  &:not(:last-child) {
    margin-bottom: 5px;
  }
  color: ${({ item }) =>
    (item === 'good' && '#218720') ||
    (item === 'neutral' && '#f1e33f') ||
    (item === 'bad' && '#e93b3b')};
`;

export const StatisticsResult = styled.p`
  text-decoration: underline;
  font-size: 20px;
  font-weight: bold;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
