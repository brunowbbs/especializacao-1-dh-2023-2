import PropTypes from "prop-types";

const Card = (props) => {
  const { name, age, city } = props;

  return (
    <div>
      <h1>Nome: {name}</h1>
      <h2>Idade: {age}</h2>
      <h3>Cidade: {city}</h3>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
};

export default Card;
