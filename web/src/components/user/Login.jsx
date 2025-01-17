// import { Link } from 'react-router-dom';
import '../../styles/signIn.scss';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import HeaderPages from '../shared/HeaderPages';
import ls from '../../services/localStorage';
import apiUser from '../../services/api-user';
import Scroll from '../shared/Scroll';
import PropTypes from 'prop-types';

function Login({
  handleLogin,
  isDark,
  setIsDark,
  hiddenClass,
  setHiddenClass,
  setToken,
  idVet,
  token,
  setUsername,
  setIdVet,
  setPublicList,
  setIsLoading,
  isLoading,
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
  const [login, setLogin] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const {
    register,
    formState: { errors },
  } = useForm();

  const handleInput = (ev) => {
    setLogin({ ...login, [ev.target.id]: ev.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    await apiUser.logInToApi(login).then((data) =>{
      if (data.success) {
        handleLogin(data.token, data.name, data.id);
        ls.set('idVet', data.id);
        ls.set('username', data.name);
        setToken(data.token);
        navigate(`/listUser`);
      } else {
        setMessage('El usuario o la contraseña no son válidos');
        setHiddenClass('');
      }
    })
  };

  const handleCancel = (ev) => {
    ev.preventDefault();
    navigate('/');
    setHiddenClass('hidden');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && event.target.value.trim() === '') {
      event.preventDefault();
    }
  };
  return (
    <>
      <Scroll />
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
        setIsLogin={setIsLogIn}
      />

      <div className="login ">
        <h3 className="user__title">Inicia sesión</h3>

        <form className="user__form" onSubmit={handleSubmit}>
          <label htmlFor="" className="user__form--label">
            {' '}
            Nombre de usuario{' '}
          </label>
          <input
            type="text"
            className="user__form--input"
            autoComplete="username"
            name="username"
            id="username"
            value={login.username}
            onInput={handleInput}
            required
            {...register('nameLogin', { required: true, maxLength: 20 })}
            aria-invalid={errors.username ? 'true' : 'false'}
          ></input>
          {errors.username?.type === 'required' && (
            <p role="alert" className="user__form--validation">
              Debes rellenar este campo
            </p>
          )}
          <label htmlFor="email" className="user__form--label">
            {' '}
            Correo electrónico{' '}
          </label>
          <input
            type="email"
            required
            className="user__form--input"
            autoComplete="email"
            id="email"
            value={login.email}
            onInput={handleInput}
            {...register('email', {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Email no válido',
              },
            })}
            aria-invalid={errors.email ? 'true' : 'false'}
          ></input>
          {errors.email && (
            <span className="user__form--validation">
              {errors.email.message}
            </span>
          )}
          {errors.email?.type === 'required' && (
            <p role="alert" className="user__form--validation">
              Debes rellenar este campo
            </p>
          )}
          <label htmlFor="password" className="user__form--label">
            {' '}
            Contraseña 
          </label>
          <input
            type="password"
            required
            className="user__form--input"
            name="password"
            autoComplete="password"
            id="password"
            value={login.password}
            onInput={handleInput}
            {...register('password', {
              required: true,
              pattern:{
                value: /(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9_]{8,}/,
                message: 'La contraseña debe tener al menos 8 caracteres con números y letras',
              },
            })}
            aria-invalid={errors.password ? 'true' : 'false'}
          ></input>
          {errors.password && (
            <span className="user__form--validation">
              {errors.password.message}
            </span>
          )}
          {errors.password?.type === 'required' && (
            <p role="alert" className="user__form--validation">
              Debes rellenar este campo
            </p>
          )}
          <div className="formBtn">
            <input
              type="submit"
              value="Aceptar"
              className="user__form--submit btn hover"
              onKeyDown={handleKeyDown}
            />
            <input
              className="user__form--submit btn hover"
              type="button"
              value="Cancelar"
              onClick={handleCancel}
            />
          </div>
          <p className={`${hiddenClass} user__msg`}>{message}</p>
        </form>
      </div>
    </>
  );
}

Login.propTypes = {
  handleLogin: PropTypes.func,
  isDark: PropTypes.bool,
  setIsDark: PropTypes.func,
  hiddenClass: PropTypes.string,
  setHiddenClass: PropTypes.func,
  setToken: PropTypes.func,
};

export default Login;
