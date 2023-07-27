import { useState } from "react";

const Card = () => {
  const [add, setAdd] = useState(false);
  const text = add ? "Quitar" : "Agregar";

  const handleClick = () => {
    setAdd(!add);
  };

  return (
    <div className="containergit">
      <article className="card-container">
        <header>
          <img
            src="https://a.wattpad.com/useravatar/Daian_502.256.248472.jpg"
            alt=""
            className="image"
          />
          <div className="text-container">
            <strong>Saga de Geminis</strong>
            <span>Caballero dorado</span>
          </div>
        </header>
        <aside className="buton-container">
          <button onClick={handleClick}>{text}</button>
        </aside>
      </article>
    </div>
  );
};

export default Card;
