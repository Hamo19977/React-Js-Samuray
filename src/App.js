import './App.css';
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Content from "./Components/Content";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <Content/>
        </div>
    );
}

export default App;
