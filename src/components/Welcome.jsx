import HeaderPages from './HeaderPages';
import TitleWelcome from './TitleWelcome';
import CreateCase from './CreateCase';

function Welcome() {
  return (
    <>
      <HeaderPages />
      <div className="user">
        <TitleWelcome />
        <h4 className="user__message">
          Todavía no tienes casos registrados en tu historial
        </h4>

        <CreateCase />
      </div>
    </>
  );
}

export default Welcome;
