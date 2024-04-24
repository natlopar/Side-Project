import '../../styles/signIn.scss';
import HeaderPages from './HeaderPages';
import TitleWelcome from './TitleWelcome';
import PropTypes from "prop-types";


function Welcome({username, isDark, setIsDark, token, setToken, setUsername, setIdVet, setList, setPrivateList}) {
  return (
    <>
      <HeaderPages    isDark={isDark} setIsDark={setIsDark}  token={token} setToken={setToken} setUsername={setUsername} setIdVet={setIdVet} setList={setList} setPrivateList={setPrivateList}/>
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
