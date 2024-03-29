import AddNewGroupForm from "../../components/forms/AddNewGroupForm.jsx";
import LinkBar from "../../components/linkbar/LinkBar.jsx";
import React from "react";

function NewGroup() {

    return (

        <>
            <h1 className="page-title">Add new group</h1>
            <LinkBar
                linkTo="/allgroups"
                linkText="back to your groups"
            />

            <section className="outer-content-container">

                <div className="inner-content-container">

                    <AddNewGroupForm />

                </div>


            </section>


        </>


    )
}

export default NewGroup;