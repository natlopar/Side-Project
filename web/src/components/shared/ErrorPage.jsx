
import HeaderPages from './HeaderPages'
import '../../styles/App.scss';


import BtnList from '../cases/BtnList'
import BtnListPublic from '../cases/BtnListPublic'

function ErrorPage({isDark, setIsDark}) {
  return (
    <>
   
   <div className='error'>
   
   
    <BtnListPublic/>
    <BtnList/>
    </div>

    </>
  )
}

export default ErrorPage