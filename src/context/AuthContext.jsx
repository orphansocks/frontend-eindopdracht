import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import isTokenValid from "../helpers/isTokenValid.jsx";

export const AuthContext = createContext( {} );

function AuthContextProvider( { children } ) {

    const [ auth, setAuth ] = useState( {
        isAuth: false,
        user: {},
        status: 'pending',
    } );

    const navigate = useNavigate();


    // use effect voor het mounting effect
    // haal de token uit de local storage
    // is de token nog geldig (istokenvalid!)
    // haal dan de userdata op met de decodedToken
    // is de token ongeldig dan blijft de state leeg

    useEffect( () => {

        const token = localStorage.getItem( 'token' );

        if ( token && isTokenValid(token) ) {
            login(token);

        } else {

            setAuth( {
                isAuth: false,
                user: null,
                status: 'done',
            });

        }
    }, [] );

    function login( token ) {

        localStorage.setItem('token', token);

        const decodedToken = jwtDecode(token);
        console.log(decodedToken.sub);

        void fetchUserData( token );

        navigate('/');
    }

    async function fetchUserData( token ) {

        try {
            const response = await axios.get(`http://localhost:8080/authenticated`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },

            });
            console.log(response);

            // zet de gegevens in de state

            setAuth({
                isAuth: true,
                user: {
                    username: response.data.username,
                    // email: response.data.email,
                    id: response.data.id,
                },
                status: 'done',
            });

        } catch (e) {
            console.error(e);

          logout();
        }
    }

    function logout()  {

        localStorage.removeItem('token');
        // localStorage.clear();

        setAuth( {
            isAuth: false,
            user: null,
            status: 'done',
        });

        console.log( 'User is logged out' );
        navigate( '/' );
    }


    const contextData = {

        isAuth: auth.isAuth,
        login: login,
        logout: logout,

    };

    return (
        <AuthContext.Provider value={ contextData }>
            { auth.status === 'done' ? children : <p>Loading...</p> }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;