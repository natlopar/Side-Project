import HeaderPages from './HeaderPages';
import TitleWelcome from './TitleWelcome';
import PropTypes from "prop-types";

import '../styles/signIn.scss';

function Welcome({username, isDark, setIsDark}) {
  return (
    <>
      <HeaderPages  isDark={isDark} setIsDark={setIsDark}/>
      <div className="user">
      <TitleWelcome username={username} />
        
      </div>
    </>
  );
}


Welcome.propTypes = {
  isDark: PropTypes.bool,
  setIsDark: PropTypes.func,
  username: PropTypes.string
}

export default Welcome;
