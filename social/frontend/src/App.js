// import './App.css';
import ProfileForm from "./components/profile";
import Pano from "./components/feed";
import 'bootstrap/dist/css/bootstrap.min.css';

const api = "http://127.0.0.1:8000/api/profile/";

function App() {
    return (
        <div className="App">
            <div className="container">
                <header className="App-header">
                    <h1 className="text-center text-success"> Анкета </h1>
                </header>

                <ProfileForm api={api}/>
                <Pano api={api}/>
            </div>
        </div>
    );
}

export default App;
