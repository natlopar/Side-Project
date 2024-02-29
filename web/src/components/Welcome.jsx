import HeaderPages from './HeaderPages';
import TitleWelcome from './TitleWelcome';

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

export default Welcome;
