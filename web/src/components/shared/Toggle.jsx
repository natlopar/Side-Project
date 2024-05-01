import '../../styles/toggle.scss';
import PropTypes from "prop-types";

export const Toggle = ({ handleChange, isDark }) => {
  return (
<>
    <label className="switch">
      <input type="checkbox" onChange={handleChange} checked={isDark}/>
      <span className="slider"></span>
    </label>
    </>
  )
  
  
};

Toggle.propTypes = {
  isDark: PropTypes.bool,
  handleChange: PropTypes.func
}
