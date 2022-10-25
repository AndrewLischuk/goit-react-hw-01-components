import PropTypes from 'prop-types';
import * as SC from './StatList.styled.js';

export const StatList = ({ id, label, percentage, color }) => {
  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    return color;
  };
  return (
    <SC.Item id={id} color={getRandomColor()}>
      <SC.Label>{label}</SC.Label>
      <SC.Percentage>{percentage}%</SC.Percentage>
    </SC.Item>
  );
};

StatList.prototypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number,
  color: PropTypes.string,
};
