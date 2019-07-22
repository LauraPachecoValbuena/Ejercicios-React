import React from 'react';
import { IUser } from '../interfaceIuser';
import { RouteComponentProps } from 'react-router';

interface IPropsGlobal {
    users: IUser[];
}

const EditUser: React.FC<IPropsGlobal & RouteComponentProps<{ user_id: string}>> = props => {

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [isAdmin, setIsAdmin] = React.useState<boolean>(false);

    const 
}