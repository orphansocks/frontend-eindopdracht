import {Link} from "react-router-dom";
import Button from "../../components/button/Button.jsx";
import Portrait from "../../components/portrait/Portrait.jsx";

function SingleRelative() {


    return (

        <>

            <h1 className="page-title">Marie (47)</h1>

            <section className="outer-content-container">

                <div className="inner-content-container">

                    <h3>NAME Marie Machielsen NICKNAME Marietje GEBOREN 10 juni 1976 GETROUWD met
                        Klaas Klaassen KIDS (3) Keesje Timmie & Sjakie RELATIVE Collega Utrecht MISC “geen sla geen
                        vla”
                    </h3>
                    <p>Het type relatie gaat de kleur van Portrait bepalen</p>

                    <Portrait color="blue"/>

                </div>

            </section>

            <section className="outer-content-container">
                <div className="inner-content-container">
                    <span>
                    <Button type="button" variant="primary"
                            onClick={() => navigate('/searchrelative')}>Aanpassen</Button>
                    <Button type="button" variant="primary"
                            onClick={() => navigate('/searchrelative')}>Verwijderen</Button>
                </span>
                    <span>
                    <Link to="/allrelatives" className="back-link">
                        <p>Terug naar de overzichtspagina</p>
                    </Link>
                        </span>

                </div>

            </section>


        </>


    )


}

export default SingleRelative;