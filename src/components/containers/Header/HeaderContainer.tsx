import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {AuthType} from "../../../redux/reducers/authReducer";
import {setUserDataAC} from "../../../redux/actions/authActions";
import {Header} from "../../presentational/Header/Header";
import {instanceApi} from "../../../api/server";


class HeaderContainer extends React.Component<TProps> {

    async componentDidMount() {

        let data = await instanceApi.signInAPI();

        if (data.resultCode === 0) {

            let {
                id,
                email,
                login
            } = data.data;

            this.props.setUserDataAC(id, email, login);

            //запросить профиль по id
        }
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
    setUserDataAC
});

type TProps = ConnectedProps<typeof connector>;

export default connector(React.memo(HeaderContainer));
