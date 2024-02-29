import '../styles/signIn.scss';

function TitleWelcome({username, isDark, setIsDark}) {
  return (
    <>
    
    <h2 className="user__title"><i className="fa-solid fa-user-doctor user__icon" ></i>Bienvenid@ {username}</h2>
    </>
  )
}

export default TitleWelcome