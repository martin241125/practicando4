import imagenes from "./assets/imagenes";
import Card from "./components/Card";
import Nav from "./components/Nav";
import "./index.css";

function App() {
  return (
    <>
      <Nav />

      <Card
        imagenes={imagenes.img1}
        nombre={"Bella vista"}
        provincia={"Corrientes"}
      />
      <Card
        imagenes={imagenes.img2}
        nombre={"Corrrientes Capital"}
        provincia={"Corrientes"}
      />
      <Card
        imagenes={imagenes.img3}
        nombre={"Paso De La Patria"}
        provincia={"Corrientes"}
      />
      <Card
        imagenes={imagenes.img4}
        nombre={"Santo Tome"}
        provincia={"Corrientes"}
      />
    </>
  );
}

export default App;
