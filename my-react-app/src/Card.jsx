import profilePic from './assets/josh.png'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Picture"></img>
            <h2 className="card-title">Joshua Moronge</h2>
            <p className="card-text">I study at Jkuat and play video games</p>
        </div>
    );
}

export default Card