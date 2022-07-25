import React from "react";
import styles from "../../styles/Breadcrumbs.css";
// import PropTypes from 'prop-types';
import BREADCRUMB from "../../data/BREADCRUMB";

const Breadcrumbs = ({ Name }) => {
  return <div className="Breadcrumbs">{`Home > ${BREADCRUMB[Name]}`}</div>;
};

// Breadcrumbs.propTypes = {
//   Name: PropTypes.string
// };

// Breadcrumbs.defaultProps = {
//   Name: ''
// };

export default Breadcrumbs;
