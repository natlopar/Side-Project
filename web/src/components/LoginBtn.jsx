
import { Link } from 'react-router-dom';
import '../styles/signIn.scss';

function LoginBtn() {
  return (
    <div>
      {' '}
      <Link to={'/logIn'} className="link">
        <button className="desc__subtitles hover btn">Inicia sesión</button>
      </Link>
    </div>
  );
}

export default LoginBtn;
