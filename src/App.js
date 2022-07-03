import "./App.css";
import Home from "./pages/Home";
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className='App'>
            <Router>
                {/* Home (the one with the search on) */}
                <Routes>
                    <Route path='/search' element={<SearchPage />} />
                    <Route path='/' element={<Home />} />
                </Routes>

                {/* SearchPage (The Results apge) */}
            </Router>
        </div>
    );
}

export default App;
