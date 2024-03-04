// import { Link } from 'react-router-dom';
import HeaderPages from './HeaderPages';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import '../styles/signIn.scss';
import {useState } from 'react';
import ls from '../services/localStorage'
import Scroll from './Scroll';

function Login({ handleLogin, isDark, setIsDark, hiddenClass, setHiddenClass, setToken }) {
  const [login, setLogin] = useState({ username: '', password: '' });
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

    const response = await fetch('https://vetfolio-manager.onrender.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(login),
    });

    const data = await response.json();
    console.log(data);
    if (data.success) {
      handleLogin(data.token, data.name, data.id);
      ls.set('idVet', data.id);
      ls.set('username',data.name)
      setToken(data.token);
      navigate(`/listUser`); 
    } else {
    
      setMessage('El usuario o la contraseña no son válidos');
      setHiddenClass('');
    }
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
    <Scroll/>
      <HeaderPages isDark={isDark} setIsDark={setIsDark} />

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
          <label htmlFor="password" className="user__form--label"> Contraseña </label>
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
              minLength: {
                value: 8,
                message: 'La contraseña debe tener al menos 8 caracteres',
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
          <div className='formBtn'>
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

export default Login;
