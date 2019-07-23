import React from "react";
import { IUser } from "../interfaceIuser";
import { addNewUser } from "../actions";
import { IGlobalState } from "../reducers/reducers";
import * as actions from "../actions";

interface IPropsGlobal {
    user: IUser[];
    token: string;
    addNewUser: (user: IUser) => void;
}

const AddUser: React.FC<IPropsGlobal & RouteComponentProps<{ }>> = props => {

    const Add = () => {
        fetch("http://localhost:3000/api/users/", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: "Bearer " + props.token
              }
        }).then(response => {
            if (response.ok) {
            
            }
        })
    }
};

const mapStateToProps = (state: IGlobalState) => ({
    user: state.
    token: state.
});

const mapDitpatchToProps = {
    add
}