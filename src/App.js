import './App.scss';
import Intro from "./components/Intro/Intro";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Intro/>
        </div>
    );
}

export default App;
