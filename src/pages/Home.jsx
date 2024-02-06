import { Link } from 'react-router-dom';

function Home() {
    return (

      <>

        <header className="outer-content-container">
            <div>
            <p>Dit is de header van de HomePage</p>
            </div>
        </header>

        <section className="outer-content-container">
            <div className="inner-content-container">
                <h1>we are all relative(s)</h1>
            </div>
        </section>

          <section>
                  <p>Wil ik hier iets hebben staan?</p>
              <p>Als je ingelogd bent, bekijk dan de <Link to="/allrelatives">Profielpagina</Link></p>
                  <p>Je kunt ook <Link to="/login">inloggen</Link> of jezelf <Link to="/register">registeren</Link> als je nog geen
                      account hebt.</p>
          </section>
    </>
);
}

export default Home;