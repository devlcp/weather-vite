import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import './local.css';

import WeatherList from '../components/WeatherList';
import FavoriteList from '../components/FavoriteList';
import NoMatch from '../components/NoMatch';

const Routing = () => {
    return (
        <Router>
            <nav className="routing">
                <ul>
                    <li><Link to="/">INICIO</Link></li>
                    <li><Link to="/favorites">FAVORITOS</Link></li>
                </ul>
            </nav>
            <div>
                <Routes>
                    <Route path="/" exact element={<WeatherList />} />
                    <Route path="/favorites" exact element={<FavoriteList />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </div>
        </Router>
    )
}

export default Routing;
