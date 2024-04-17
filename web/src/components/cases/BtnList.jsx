import ls from '../../services/localStorage';
import { Link } from 'react-router-dom'

function BtnList({handleResetMessage, resetUpdateData}) {

  const handleClickBack =()=>{
    handleResetMessage()
    resetUpdateData()
    ls.remove('animal')
  }
  return (
    <div className='btnList'>
    <Link to={"/listUser"} className='link'>
    <button className='create__btn btn hover' aria-label='Historial' onClick={handleClickBack}>Historial</button>
    </Link>
    </div>
  )
}

export default BtnList