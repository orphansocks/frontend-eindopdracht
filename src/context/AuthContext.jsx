import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';

export const AuthContext = createContext( {} );

function AuthContextProvider( { children } ) {

    const [ auth, setAuth ] = useState( {
        isAuth: false,
        user: null,
        status: 'pending',
    } );


    // MOUNTING EFFECT
    // IS ER EEN TOKEN? HAAL DE TOKEN OP
    // IS DIE TOKEN NOG GELDIG? (HELPER ISTOKENVALID MAKEN
    // TOKEN > LOGIN
    // GEEN TOKEN OF ONGELDIG > DE STATE BLIJFT LEEG

    useEffect( () => {

        const token = localStorage.getItem( 'token' );

        if ( token ) {
            // const isvalid = isTokenValid( token );
            const decoded = jwtDecode( token );
            void login( decoded.sub, token );
        } else {
            setAuth( {
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }, [] );

    const navigate = useNavigate();

    async function login( id, token ) {

        localStorage.setItem( 'token', token );
        const decodedToken = jwtDecode( token );
        console.log(decodedToken.sub);

        try {
            const response = await axios.get( `http://localhost:3000/600/users/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${ token }`,
                },
            });

     //SETAUTH IS EEN DATA OBJECT ZET DE GEGEVENS VAN DE USER IN DE STATE
            setAuth( {
                isAuth: true,
                user: {
                    username: response.data.username,
                    email: response.data.email,
                    id: response.data.id,
                },
                status: 'done',
            });

        } catch (e) {
            console.error( e );
         logout();
    }

        console.log('gebruiker is ingelogd');
        navigate('/allrelatives');
    }

    const logout = () => {

        localStorage.removeItem('token');
        // localStorage.clear();

        setAuth( {
            isAuth: false,
            user: null,
            status: 'done',
        } );

        console.log( 'Gebruiker is uitgelogd' );
        navigate( '/' );
    }


    const contextData = {

        logout: logout,
        isAuth: auth.isAuth,
    };

    return (
        <AuthContext.Provider value={ contextData }>
            { auth.status === 'done' ? children : <p>Loading...</p> }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;