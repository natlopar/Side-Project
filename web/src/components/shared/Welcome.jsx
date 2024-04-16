import '../../styles/signIn.scss';
import HeaderPages from './HeaderPages';
import TitleWelcome from './TitleWelcome';
import PropTypes from "prop-types";


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
