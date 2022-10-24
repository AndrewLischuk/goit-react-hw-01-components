import styled from 'styled-components';

export const Item = styled.li`
  // margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.color ? props.color : 'grey')};
  width: 100px;
  height: 100px;
`;
export const Label = styled.span`
  margin-bottom: 10px;
  color: #bac3cf;
  font-size: 20px;
  font-weight: 400;
`;

export const Percentage = styled.span`
  color: #bac3cf;
  font-size: 28px;
  font-weight: 700;
`;
