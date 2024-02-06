import {Link} from "react-router-dom";

function Login() {


    return (

        <>

            <h1 className="page-title">Login</h1>


            <section  className="outer-content-container">

                <div className="inner-content-container">
                    <p>Hier komt de content</p>
                    <p>+ FORM</p>
                    <form>



                    </form>

                    <p>Not having an account yet? Please register <Link to="/register">here</Link></p>

                </div>

            </section>





        </>


    )





}

export default Login;