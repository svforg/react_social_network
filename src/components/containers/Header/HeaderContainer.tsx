import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {AuthType} from "../../../redux/reducers/authReducer";
import {authTC} from "../../../redux/thunk/authThunk";
import {Header} from "../../presentational/Header/Header";


class HeaderContainer extends React.Component<TProps> {

    componentDidMount() {
        this.props.fetchAuth();
        //запросить свой профиль по id
    }

    render() {

        const {
            id,
            email,
            login,
            isAuth
        } = this.props;

        return <Header id={id}
                       email={email}
                       isAuth={isAuth}
                       login={login}/>
    }
}

const mapStateToProps = ({auth}: { auth: AuthType }): AuthType => {
    return {
        id: auth.id,
        email: auth.email,
        login: auth.login,
        isAuth: auth.isAuth,
    }
};

const connector = connect(mapStateToProps, {
    fetchAuth: authTC.fetchAuth
});

type TProps = ConnectedProps<typeof connector>;

export default connector(React.memo(HeaderContainer));
