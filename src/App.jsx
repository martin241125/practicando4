import "./index.css";

function App() {
  return (
    <>
      <div className="container">
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
            <button>Agregar</button>
          </aside>
        </article>
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
            <button>Agregar</button>
          </aside>
        </article>
      </div>
    </>
  );
}

export default App;
