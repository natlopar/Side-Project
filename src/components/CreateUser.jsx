import { useNavigate } from 'react-router-dom';
import HeaderPages from './HeaderPages';
import { useForm } from 'react-hook-form';

function CreateUser({handleUser}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => console.log(data);

   const handleClick =(e)=>{
 //aqui hago mis cosas del form
 navigate("/welcomeList");
   }


  return (
    <>
      <HeaderPages />
      <div className="user">
        <form className="user__form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="" className="user__form--label">
            {' '}
            Nombre{' '}
          </label>
          <input
            type="text"
            className="user__form--input"
            {...register('firstName', { required: true, maxLength: 20 })}
            aria-invalid={errors.firstName ? 'true' : 'false'}
          ></input>
          {errors.firstName?.type === 'required' && (
            <p role="alert" className="user__form--validation">
              Debes rellenar este campo
            </p>
          )}

          <label htmlFor="" className="user__form--label">
            {' '}
            Apellidos{' '}
          </label>
          <input
            type="text"
            className="user__form--input"
            {...register('lastName', { required: true, maxLength: 20 })}
            aria-invalid={errors.lastName ? 'true' : 'false'}
          ></input>
          {errors.lastName?.type === 'required' && (
            <p role="alert" className="user__form--validation">
              Debes rellenar este campo
            </p>
          )}
          <label htmlFor="" className="user__form--label">
            {' '}
            Provincia{' '}
          </label>
          <input
            type="text"
            className="user__form--input"
            {...register('city', { required: true, maxLength: 50 })}
            aria-invalid={errors.city ? 'true' : 'false'}
          ></input>
          {errors.city?.type === 'required' && (
            <p role="alert" className="user__form--validation">
              Debes rellenar este campo
            </p>
          )}

          <label htmlFor="" className="user__form--label">
            {' '}
            País{' '}
          </label>
          <input
            type="text"
            className="user__form--input"
            {...register('country', { required: true, maxLength: 50 })}
            aria-invalid={errors.country ? 'true' : 'false'}
          ></input>
          {errors.country?.type === 'required' && (
            <p role="alert" className="user__form--validation">
              Debes rellenar este campo
            </p>
          )}
          <div className="user__form--check">
            <input
              type="checkbox"
              name="public"
              id="public"
              {...register('public', { required: true })}
              aria-invalid={errors.public ? 'true' : 'false'}
            />

            <label className="user__form--label" htmlFor="public">
              Indica si quieres que tus casos sean públicos en esta web
            </label>
            {errors.public?.type === 'required' && (
              <p role="alert" className="user__form--validation">
                Debes marcar tu opción
              </p>
            )}
          </div>

          <p className="user__form--text">
            En caso de que no quieras publicar ahora todos tus casos, podrás
            publicar cada uno más adelante{' '}
          </p>
          {/* <Link to={"/welcomeList"}> */}
          <input type="submit" value="Aceptar" className="user__form--submit" onClick={handleClick} />
          {/* </Link> */}
        </form>
      </div>
    </>
  );
}

export default CreateUser;
