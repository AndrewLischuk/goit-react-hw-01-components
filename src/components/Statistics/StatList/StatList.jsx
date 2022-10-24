import * as SC from './StatList.styled';

export const StatList = ({ id, label, percentage }) => {
  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    console.log(color);
    return color;
  };
  return (
    <SC.Item id={id}>
      <SC.Label color={getRandomColor()}>{label}</SC.Label>
      <SC.Percentage>{percentage}%</SC.Percentage>
    </SC.Item>
  );
};
