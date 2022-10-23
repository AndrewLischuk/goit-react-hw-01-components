import PropTypes from 'prop-types';

export const ProfileStats = ({ label, value }) => {
  return (
    <li>
      <span>{label}</span>
      <span>{value}</span>
    </li>
  );
};

ProfileStats.prototypes = {
  label: PropTypes.string,
  value: PropTypes.number,
};
