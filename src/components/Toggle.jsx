import "../styles/layout/toggle.scss";

export const Toggle = ({ handleChange, isDark }) => {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isDark}
      />
      <label htmlFor="check">Dark Mode</label>
    </div>
  )
};