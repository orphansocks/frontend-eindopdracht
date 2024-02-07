import {Link} from "react-router-dom";
import Portrait from "../../components/portrait/Portrait.jsx";
import CanvasWithPortraits from "../../components/CanvasWithPortraits.jsx";

function AllRelatives() {

    const portraits = [
        { x: 100, y: 100, radius: 50, color: 'red' },
        { x: 230, y: 100, radius: 50, color: 'blue' },
        { x: 360, y: 100, radius: 50, color: 'green' }
    ];


    return (

        <>

            <h1 className="page-title">All relatives</h1>

            <section  className="outer-content-container">

                <div className="inner-content-container">


                    <p>Wil ik hier iets hebben staan?</p>
                    <p>Als je ingelogd bent, bekijk dan de <Link to="/allrelatives">Profielpagina</Link></p>
                    <p>Je kunt ook <Link to="/login">inloggen</Link> of jezelf <Link to="/register">registeren</Link> als je nog geen
                        account hebt.</p>

                   <Portrait />

                    <CanvasWithPortraits portraits={portraits} />








                </div>






            </section>



        </>


    )





}

export default AllRelatives;