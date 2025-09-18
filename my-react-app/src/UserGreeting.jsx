import PropTypes from 'prop-types'
function UserGreeting(props){

    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>

    const loginPrompt = <h2 className="login-prompt">Please Log in To continue</h2>

    return (props.isLoggedin ?   welcomeMessage : loginPrompt);
}

UserGreeting.propTypes = {
    isLoggedin: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedin: false,
    username: "Guest"
}

export default UserGreeting