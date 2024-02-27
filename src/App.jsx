import {Navigate, Route, Routes} from 'react-router-dom';
import {useContext} from "react";
import {AuthContext} from "./context/AuthContext.jsx";

import './App.css';

import NavBar from './components/navbar/NavBar';
import Footer from "./components/footer/Footer";

import Home from "./pages/Home";

import Register from './pages/Register';
import Login from './pages/Login';
import Apply from './pages/Apply';

import NewRelative from './pages/relatives/NewRelative';
import AllRelatives from './pages/relatives/AllRelatives';
import SearchRelative from './pages/relatives/SearchRelative';
import SingleRelative from './pages/relatives/SingleRelative';

import AllGroups from './pages/groups/AllGroups';
import SingleGroup from './pages/groups/SingleGroup';

import NotFoundPage from './pages/NotFoundPage';





function App() {

    const { isAuth } = useContext(AuthContext);

    return (
        <div className="App">
            <NavBar />
            <main className="content">
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/register" element={<Register />} />
                    <Route path="/apply" element={<Apply />} />
                    <Route path="/login" element={<Login />} />

                    {/*<Route path="/allrelatives" element={isAuth ? <AllRelatives /> : <Navigate to="/login"/>} />*/}
                    <Route path="/allrelatives" element={<AllRelatives />} />
                    <Route path="/newrelative" element={<NewRelative />} />
                    <Route path="/searchrelative" element={<SearchRelative />} />
                    <Route path="/relatives/:id" element={<SingleRelative />} />

                    <Route path="/allgroups" element={<AllGroups />} />
                    <Route path="/groups/:id" element={<SingleGroup />} />

                    <Route path="*" element={<NotFoundPage />}/>
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;