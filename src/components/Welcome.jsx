import HeaderPages from './HeaderPages';
import TitleWelcome from './TitleWelcome';
import CreateCase from './CreateCase';

function Welcome({user}) {
  return (
    <>
      <HeaderPages />
      <div className="user">
        <TitleWelcome user={user} />
        <h4 className="user__message">
          Todavía no tienes casos registrados en tu historial
        </h4>

        <CreateCase />
      </div>
    </>
  );
}

export default Welcome;
