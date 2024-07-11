import "./App.css";
import Navigation from "./component/Navigation/Navigation";
import ContactFrom from "./component/contactFrom/contactFrom.jsx";
import ContactHeader from "./component/contactHeader/contactHeader.jsx";

function App() {
  return (
    <div>
      <Navigation />
      <main className="main_container">
        <ContactHeader />
        <ContactFrom />
      </main>
    </div>
  );
}

export default App;
