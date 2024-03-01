
function CardItem({id, cardName, designer, category}) {

    return (

        <article className="card-item-container">

            <p>Link to SingleCard</p>
            <h5>{designer}</h5>
            <p>{category}</p>


        </article>

    )



}

export default CardItem;