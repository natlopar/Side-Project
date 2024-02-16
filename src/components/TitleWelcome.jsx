

function TitleWelcome({user, isDark, setIsDark}) {
  return (
    <h3 className="user__title">Bienvenid@ {user.firstName}</h3>
  )
}

export default TitleWelcome