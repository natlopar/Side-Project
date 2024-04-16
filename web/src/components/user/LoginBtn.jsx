
import '../../styles/signIn.scss';
import { Link } from 'react-router-dom';

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
