import profileImage from './assets/josh.png'

function Card(){
    return(
        <div className="card">
            <img src={profileImage} className="card-image" alt="Profile Image"></img>
            <h1 className="card-header">Joshua Moronge</h1>
            <p className="card-text">Im A student at Jkuat</p>
        </div>
    );
}

export default Card