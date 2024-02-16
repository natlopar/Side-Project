// import { Link } from 'react-router-dom';
import HeaderPages from './HeaderPages';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function User({ handleLogin }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    handleLogin(data);

    navigate('/list');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && event.target.value.trim() === '') {
      event.preventDefault();
    }
  };
  return (
    <>
      <HeaderPages />

      <div className="user ">
        <h3 className="user__title">Inicia sesión</h3>

        <form className="user__form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="" className="user__form--label">
            {' '}
            Nombre de usuario{' '}
          </label>
          <input
            type="text"
            className="user__form--input"
            autoComplete="nameLogin"
            required
            {...register('nameLogin', { required: true, maxLength: 20 })}
            aria-invalid={errors.nameLogin ? 'true' : 'false'}
          ></input>
          {errors.nameLogin?.type === 'required' && (
            <p role="alert" className="user__form--validation">
              Debes rellenar este campo
            </p>
          )}

          <label htmlFor="password"> Contraseña </label>
          <input
            type="password"
            name=""
            id="password"
            autoComplete="password"
            required
            className="user__form--input"
            {...register('password', { required: true, maxLength: 20 })}
            aria-invalid={errors.password ? 'true' : 'false'}
          />
          {errors.password?.type === 'required' && (
            <p role="alert" className="user__form--validation">
              Debes rellenar este campo
            </p>
          )}
          {/* <Link to={"/list"}> */}
          <input
            type="submit"
            value="Aceptar"
            className="user__form--submit"
            onKeyDown={handleKeyDown}
          />
          {/* </Link> */}
        </form>
      </div>
    </>
  );
}

export default User;
