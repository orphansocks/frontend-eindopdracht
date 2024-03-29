import React from "react";
import {PaperPlaneTilt} from "@phosphor-icons/react";

function Apply() {


    return (

        <>

            <h1 className="page-title">Apply as designer</h1>


            <section  className="outer-content-container">

                <div className="inner-content-container inner-content-container__text-restriction">
                    <h1>hi!</h1> <p>At relatives we like to work with great card designers. If you also would like to connect your card designs to us, please send us an email introducing yourself. Don't forget to send a link to your portfolio! We would love to hear from you!</p>


                </div>

            </section>
            <section>
                <div className="inner-content-container inner-content-container__text-restriction">
                    <div style={{ marginBottom: '10px' }}><PaperPlaneTilt size={36} /></div>
                    <h3><a href="mailto:apply@relatives.cloud?subject=apply as designer">email us</a></h3>


                </div>
            </section>




        </>


    )





}

export default Apply;