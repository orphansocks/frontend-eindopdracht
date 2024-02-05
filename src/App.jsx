
import {Route, Routes } from 'react-router-dom';

import './App.css';

import NavBar from './components/navbar/NavBar.jsx';
import Footer from "./components/footer/Footer.jsx";

import Home from "./pages/Home.jsx";

import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';

import NewRelative from './pages/relatives/NewRelative.jsx';
import AllRelatives from './pages/relatives/AllRelatives.jsx';
import SearchRelative from './pages/relatives/SearchRelative.jsx';
import SingleRelative from './pages/relatives/SingleRelative.jsx';

import NotFoundPage from './pages/NotFoundPage.jsx';


function App() {

    return (
        <>
            <NavBar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/newrelative" element={<NewRelative />} />
                    <Route path="/allrelatives" element={<AllRelatives />} />
                    <Route path="/searchrelative" element={<SearchRelative />} />
                    <Route path="/relative/:id" element={<SingleRelative/>} />
                    <Route path="*" element={<NotFoundPage />}/>
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;