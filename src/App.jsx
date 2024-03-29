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

import AllRelatives from './pages/relatives/AllRelatives';
import SingleRelative from './pages/relatives/SingleRelative';
import NewRelative from './pages/relatives/NewRelative';
import SearchRelative from './pages/relatives/SearchRelative';

import Category from './pages/categories/Category.jsx';

import AllGroups from './pages/groups/AllGroups';
import SingleGroup from './pages/groups/SingleGroup';

import AllCards from "./pages/cards/AllCards.jsx";
import SingleCard from './pages/cards/SingleCard';

import Designer from './pages/designers/Designer';

import NotFoundPage from './pages/NotFoundPage';
import NewGroup from "./pages/groups/NewGroup.jsx";


function App() {

    const { auth } = useContext(AuthContext);

    return (
        <div className="App">
            <NavBar />
            <main className="content">
                <Routes>
                    <Route path="/" element={<Home />} />

                    {/*<Route path="/designer" element={ auth ? <Designer /> :
                    <Navigate to="/login"/>} />*/}

                    <Route path="/register" element={<Register />} />
                    <Route path="/apply" element={<Apply />} />
                    <Route path="/login" element={<Login />} />

                    {/*<Route path="/allrelatives" element={ auth ? <AllRelatives /> :
                     <Navigate to="/login"/>} />*/}

                    <Route path="/allrelatives" element={<AllRelatives />} />
                    <Route path="/newrelative" element={<NewRelative />} />
                    <Route path="/searchrelative" element={<SearchRelative />} />
                    <Route path="/relatives/:id" element={<SingleRelative />} />

                    <Route path="/categories/:relation" element={<Category />} />

                    <Route path="/allgroups" element={<AllGroups />} />
                    <Route path="/groups/:id" element={<SingleGroup />} />
                    <Route path="/newgroup" element={<NewGroup />} />

                    <Route path="/allcards" element={<AllCards />} />
                    <Route path="/cards/:id" element={<SingleCard />} />

                    <Route path="/designers/:id" element={<Designer />} />

                    <Route path="*" element={<NotFoundPage />}/>
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;