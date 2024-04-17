
import { Link } from 'react-router-dom'

function BtnList({handleResetMessage}) {
  return (
    <div className='btnList'>
    <Link to={"/listUser"} className='link'>
    <button className='create__btn btn hover' aria-label='Historial' onClick={handleResetMessage}>Historial</button>
    </Link>
    </div>
  )
}

export default BtnList