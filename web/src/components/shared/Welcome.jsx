import '../../styles/signIn.scss';
import HeaderPages from './HeaderPages';
import TitleWelcome from './TitleWelcome';
import PropTypes from 'prop-types';

function Welcome({
  username,
  isDark,
  setIsDark,
  token,
  setToken,
  setUsername,
  setIdVet,
  setList,
  setPrivateList,
  smShow, 
  messageLog, 
  titleLog, 
  isLogOut, 
  setMessageLog, 
  setTitleLog, 
  setIsLogOut, 
  setSmShow, 
  isLogIn, 
  setIsLogIn
}) {
  return (
    <>
      <HeaderPages
        isDark={isDark}
        setIsDark={setIsDark}
        token={token}
        setToken={setToken}
        setUsername={setUsername}
        setIdVet={setIdVet}
        setList={setList}
        setPrivateList={setPrivateList}
        smShow={smShow}
        messageLog= {messageLog}
        titleLog= {titleLog}
        isLogOut= {isLogOut} 
        setMessageLog={setMessageLog}
        setTitleLog={setTitleLog}
        setIsLogOut={setIsLogOut}
        setSmShow={setSmShow}
        isLogIn={isLogIn}
        setIsLogIn={setIsLogIn}
      />
      <div className="user">
        <TitleWelcome username={username} />
      </div>
    </>
  );
}

Welcome.propTypes = {
  isDark: PropTypes.bool,
  setIsDark: PropTypes.func,
  username: PropTypes.string,
};

export default Welcome;
