import '../styles/signIn.scss';
import PropTypes from "prop-types";

function TitleWelcome({username}) {
  return (
    <>
    
    <h2 className="user__title"><i className="fa-solid fa-user-doctor user__icon" ></i>Bienvenid@ {username}</h2>
    </>
  )
}

TitleWelcome.propTypes = {
  username: PropTypes.string
}

export default TitleWelcome