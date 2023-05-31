// use function to create components

function Card(){
    return(
        <div className="card">
            <h5 className="card-header">Featured</h5>
            <div className="card-body">
                <img src="https://dummyimage.com/800x300/dddddd/fff.png&text=Responsive+Image" className="img-fluid" alt="..."/>
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}
const heading = {
    color: 'red',
    textAlign: 'center'
}
    
export default Card