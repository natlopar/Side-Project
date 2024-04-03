
import { Link } from 'react-router-dom'

function BtnList() {
  return (
    <div className='btnList'>
    <Link to={"/listUser"} className='link'>
    <button className='create__btn btn hover' aria-label='Historial'>Historial</button>
    </Link>
    </div>
  )
}

export default BtnList