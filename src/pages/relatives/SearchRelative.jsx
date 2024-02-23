import Button from "../../components/button/Button.jsx";
import SearchForm from "../../components/forms/SearchForm.jsx";

function SearchRelative() {

    // const navigate = useNavigate();
    // const data = "Marie"

    const handleSearch = searchQuery => {
        // SEARCH LOGIC!!
        console.log('Searching for:', searchQuery);
    };


    return (

        <>

            <h1 className="page-title">Search relative</h1>


            <section className="outer-content-container">
                <div className="inner-content-container">

                        <SearchForm
                            onSearch={handleSearch} />


                </div>
            </section>



        </>


    )





}

export default SearchRelative;