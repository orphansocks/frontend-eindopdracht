import Button from "../../components/button/Button.jsx";
import {useNavigate} from "react-router-dom";

function SearchRelative() {

    const navigate = useNavigate();


    return (


        <>

                    <h1 className="page-title">Search relative</h1>


            <section className="outer-content-container">
                <div className="inner-content-container">
                    <span>
                        <p>Search Input field</p>
                    </span>
                  <span>
                    <Button type="button" variant="primary" onClick={() => navigate('/relative/:id')}>Go to relative</Button>
                </span>
                </div>
            </section>



        </>


    )





}

export default SearchRelative;