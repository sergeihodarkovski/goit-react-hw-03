import s from "./Contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <li>
      <div>
        <h2>{name}</h2>
        <p>{number}</p>
      </div>
      <button>Delete</button>
    </li>
  );
};

export default Contact;
