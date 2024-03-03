
import { Link } from 'react-router-dom'

function BtnListPublic() {
  return (
    <div className='btnList'>
    <Link to={"/publicList"} className='link'>
    <button className='create__btn btn hover'>Historial</button>
    </Link>
    </div>
  )
}

export default BtnListPublic