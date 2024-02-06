import {Link} from "react-router-dom";

function AllRelatives() {


    return (

        <>

            <h1 className="page-title">All relatives</h1>

            <section  className="outer-content-container">

                <div className="inner-content-container">
                    <p>Wil ik hier iets hebben staan?</p>
                    <p>Als je ingelogd bent, bekijk dan de <Link to="/allrelatives">Profielpagina</Link></p>
                    <p>Je kunt ook <Link to="/login">inloggen</Link> of jezelf <Link to="/register">registeren</Link> als je nog geen
                        account hebt.</p>
                </div>

            </section>



        </>


    )





}

export default AllRelatives;