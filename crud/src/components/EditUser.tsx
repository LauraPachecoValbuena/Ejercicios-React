import React from 'react';
import { IUser } from '../interfaceIuser';
import { RouteComponentProps } from 'react-router';
import { IMyUser } from '../reducers/myUserReducer';

interface IPropsGlobal {
    users: IUser[];
    token: string;
    myUser: IMyUser;
}

const EditUser: React.FC<IPropsGlobal & RouteComponentProps<{ user_id: string}>> = props => {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [isAdmin, setIsAdmin] = React.useState<boolean>(false);

    const updateUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.currentTarget.value);
    };

    const updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value);
    };

    const updateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.currentTarget.value);
    };

    const updateIsAdmin = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsAdmin(s => !s);
    };

    const user = React.useMemo(() => props.users.find(u => u._id === props.match.params.user_id), [props.match.params.user_id]);

    React.useEffect(() => {
        if (user) {
            setUsername(user.username);
            setEmail(user.email);
            setIsAdmin(user.isAdmin);
        }
    }, [user]);

    if (!user){
        return null;
    }

    const edit = () => {
        
    }



}