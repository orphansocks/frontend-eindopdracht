import Button from "../../components/button/Button.jsx";
import {useNavigate} from "react-router-dom";
import SearchField from "../../components/forms/SearchField.jsx";

function SearchRelative() {

    const navigate = useNavigate();
    const data = "Marie"


    return (


        <>

                    <h1 className="page-title">Search relative</h1>


            <section className="outer-content-container">
                <div className="inner-content-container">
                    <span>
                        <SearchField data={ data } />
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