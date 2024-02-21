import {Link} from "react-router-dom";
import Portrait from "../../components/portrait/Portrait.jsx";
import CanvasWithPortraits from "../../components/CanvasWithPortraits.jsx";

function AllRelatives() {

    const portraits = [
        { x: 100, y: 100, radius: 50 },
        { x: 230, y: 100, radius: 50 },
        { x: 360, y: 100, radius: 50 }
    ];


    return (

        <>

            <h1 className="page-title">All relatives</h1>

            <section  className="outer-content-container">

                <div className="inner-content-container">

                    <p>Als je ingelogd bent, bekijk dan de <Link to="/allrelatives">Profielpagina</Link></p>
                    <p>Je kunt ook <Link to="/login">inloggen</Link> of jezelf <Link to="/register">registeren</Link> als je nog geen
                        account hebt.</p>
                    <p>Hier onder volgt het CanvasWithPortraits</p>

                    <CanvasWithPortraits portraits={portraits} />








                </div>






            </section>



        </>


    )





}

export default AllRelatives;