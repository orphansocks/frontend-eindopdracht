import { useNavigate } from "react-router-dom";
import Button from "../components/button/Button.jsx";

function NotFoundPage() {

    const navigate = useNavigate();

    return (
        <section className="outer-content-container">
            <div className="inner-content-container">
                <h1 className="page-title">404</h1>
                <h2>The page you are looking for does not exist</h2>
                <span>
                    <Button
                        type="button"
                        variant="primary"
                        onClick={() => navigate('/')}>Back to the homepage</Button>
                </span>
            </div>
        </section>
    );
}

export default NotFoundPage;