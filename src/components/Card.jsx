import { useState } from "react";
import "./card.css";
import imagenes from "../assets/imagenes";

const Card = (props) => {
  const [add, setAdd] = useState(false);
  const text = add ? "Quitar" : "Agregar";

  const handleClick = () => {
    setAdd(!add);
  };

  return (
    <div className="container">
      <article className="card-container">
        <section>
          <img
            src={props.imagenes}
            alt="turismo corrientes"
            className="image"
          />
          <div className="text-container">
            <strong>{props.nombre}</strong>
            <span>{props.provincia}</span>
          </div>
        </section>
        <aside className="buton-container">
          <button onClick={handleClick}>{text}</button>
        </aside>
      </article>
    </div>
  );
};

export default Card;
