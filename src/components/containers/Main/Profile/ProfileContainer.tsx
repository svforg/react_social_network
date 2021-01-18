import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {addProfilePostAC, addProfilePostTextAC, showProfileAC} from "../../../../redux/actions/profileActions";
import {Profile} from "../../../presentational/Main/Profile/Profile";
import {ProfileType} from "../../../../redux/reducers/profileReducer";
import axios from "axios";


class ProfileContainer extends React.Component<TProps> {

    componentDidMount() {

        //const {} = this.props;

        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/${2}`)
            .then(response => {
                debugger
                this.props.showProfileAC(response.data);
            });
    }

    addProfilePost = () => this.props.addProfilePostAC();
    addProfilePostText = (title: string) => this.props.addProfilePostTextAC(title);

    render() {
        const {
            info,
            posts,
            postText,
        } = this.props;

        return <Profile addProfilePostText={this.addProfilePostText}
                        addProfilePost={this.addProfilePost}
                        info={info}
                        posts={posts}
                        postText={postText}/>
    }
}

const mapStateToProps = ({profile}: { profile: ProfileType }): ProfileType => {
    return {
        info: profile.info,
        posts: profile.posts,
        postText: profile.postText,
    }
};

const connector = connect(mapStateToProps, {
    addProfilePostAC,
    addProfilePostTextAC,
    showProfileAC,
});

type TProps = ConnectedProps<typeof connector>;

export default connector(ProfileContainer);


// import {selectProfile} from "../../../../redux/selectors/profileSelectors";
// import {useDispatch} from "../../../../redux/useDispatchHOC";
// import {useSelector} from "react-redux";
// export const ProfileContainer: React.FC = () => {
//
//     const profile = useSelector(selectProfile);
//     const dispatch = useDispatch();
//
//     const addProfilePost = () => dispatch(addProfilePostAC());
//     const addProfilePostText = (title: string) => dispatch(addProfilePostTextAC(title));
//
//     return <Profile addProfilePostText={addProfilePostText}
//                     addProfilePost={addProfilePost}
//                     profile={profile}/>
// };