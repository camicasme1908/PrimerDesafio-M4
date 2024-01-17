
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header titulo="Adopta un perrito" />
      <div className="card__container">
        <MyCard
          url="./src/perro1.jpg"
          name="Raikou"
          description="Este perrito siempre está lleno de energía y es muy cariñoso, dale el hogar que se merece!"
          color="success"
          text="Mestizo"
        />
        <MyCard
          url="./src/perro2.jpg"
          name="Cleo"
          description="Hermosa cachorra muy inquieta pero también muy regalona"
          color="primary"
          text="Mestizo"
        />
        <MyCard
          url="./src/perro3.png"
          name="Luna"
          description="Un perrita tierna y adorable, adora a los gatos"
          color="warning"
          text="Mestizo"
        />
        <MyCard
          url="./src/perro4.jpg"
          name="Almendra"
          description="Llena de energia y tiern,a adora dormir"
          color="info"
          text="Mestizo"
        />
        <MyCard
          url="./src/perro5.jpg"
          name="Agatha"
          description="Tierna cachorrita, sera de tamaño mediano"
          color="dark"
          text="Mestizo"
        />
        <MyCard
          url="./src/perro6.png"
          name="Toño"
          description="Cariñoso y protecto, le encanta salir a pasear"
          color="secondary"
          text="Mestizo"
        />
      </div>
      <Footer
        pieDePagina="Explora nuestra galería en adopción de perros para encontrar a tu compañero perfecto. tenemos una variedad de
      perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su escencia única.Adopta un perro y dale una segunda oportunidad, 
      ¡Encuentra a tu compañero peludo!"
      />
    </div>
  );
}

export default App;