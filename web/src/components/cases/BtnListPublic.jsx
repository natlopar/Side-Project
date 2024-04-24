
import { Link } from 'react-router-dom'

function BtnListPublic() {
  return (
    <div className='btnList'>
    <Link to={"/publicList"} className='link'>
    <button className='create__btn btn hover' aria-label='Historial'>Historial público</button>
    </Link>
    </div>
  )
}

export default BtnListPublic