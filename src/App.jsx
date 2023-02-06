import "./App.scss";
import Header from "./components/Header/Header";
import CardContainer from "./components/Card/CardContainer";
import NavContainer from "./components/Nav/NavContainer";

function App() {
  return (
    <div className="wrapper">
      <NavContainer />
      <main id="content">
        <Header />
        <CardContainer />
      </main>
    </div>
  );
}

export default App;
