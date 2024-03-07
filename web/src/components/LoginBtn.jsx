
import { Link } from 'react-router-dom';
import '../styles/signIn.scss';

function LoginBtn() {
  return (
    <div>
      {' '}
      <Link to={'/logIn'} className="link">
        <button className="desc__subtitles user__form--submit btn hover" aria-label='Inicia sesión'>Inicia sesión</button>
      </Link>
    </div>
  );
}

export default LoginBtn;
