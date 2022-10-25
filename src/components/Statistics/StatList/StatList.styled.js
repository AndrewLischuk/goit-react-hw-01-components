import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.color};
  width: 100px;
  height: 100px;
`;
export const Label = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  color: #bac3cf;
  font-size: 20px;
  font-weight: 400;
  width: 100%;
`;

export const Percentage = styled.span`
  justify-content: center;
  align-items: center;
  color: #bac3cf;
  font-size: 28px;
  font-weight: 700;
  width: 100%;
`;
