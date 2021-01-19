import { connect } from "react-redux";
import Login from "../components/Login";
import {login, signUp} from "../redux/actions";

const mapStateToProps = (state) => {
    const { user } = state;
    return {
        user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => dispatch(login(user)),
        signUp: (user) => dispatch(signUp(user)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);