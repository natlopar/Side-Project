import '../../styles/createCase.scss';

function BtnLogOut({handleLogOut}) {
  return (
    <button
    className="create__btn btn hover desc__subtitles"
    onClick={handleLogOut}
    aria-label="Cerrar sesión"
  >
    Cerrar sesión
  </button>
  )
}

export default BtnLogOut