
function ProfilePicture(){

    const handleClick = (e) => e.target.style.display = "none";

    const imageUrl = './src/assets/josh.png';

    return(<img onClick={(e) => handleClick(e)} src={imageUrl}></img>);
}

export default ProfilePicture