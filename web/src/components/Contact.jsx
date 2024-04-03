import '../styles/filters.scss';
import PropTypes from "prop-types";

function Contact({handleContact, contact, setContact, msgContact}) {

    const handleChange =(ev) =>{
        setContact({...contact, [ev.target.id]: ev.target.value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        handleContact();
    }
  return (
    <section className='contact user'>
    <form className="input__contact" onSubmit={handleSubmit}>
      <label htmlFor="name" className="input__label">
       Nombre 
      </label>
      <input
        type="text"
        id="name"
        placeholder=""
        className="input__input"
        value={contact.name}
        onChange={handleChange}
      />
    <label htmlFor="comments" className="input__label">
       Comentarios
      </label>
      <textarea
        rows="10" cols="20"
        id="comments"
        placeholder="Escribe aquí tus comentarios o sugerencias"
        className="input__textarea"
        value={contact.comments}
        onChange={handleChange}
      />
      <input type="submit"  value='Enviar' className='create__btn btn'/>
  </form>
  <p className='contact__msg btn'>{msgContact}</p>
  </section>
  )
}

Contact.propTypes = {
  handleContact: PropTypes.func,
  contact: PropTypes.shape({
    name: PropTypes.string,
    comments: PropTypes.string
  }),
  setContact: PropTypes.func.isRequired,
  msgContact: PropTypes.string,
};

export default Contact