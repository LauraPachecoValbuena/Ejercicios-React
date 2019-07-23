import React from "react";
import { IUser } from "../interfaceIuser";
import { addNewUser } from '../actions';
import { IGlobalState } from "../reducers/reducers";
import * as actions from "../actions";
import { RouteComponentProps } from 'react-router';
import { connect } from "react-redux";
import { IMyUser } from "../reducers/myUserReducer";

interface IPropsGlobal {
    user: IUser[];
    token: string;
    myUser: IMyUser;
    addNewUser: (user: IUser) => void;
}

const AddUser: React.FC<IPropsGlobal & RouteComponentProps<{  }>> = props => {

    const [ username, setUsername ] = React.useState('');
	const [ password, setPassword ] = React.useState('');
	const [ email, setEmail ] = React.useState('');
    const [ isAdmin, setIsAdmin ] = React.useState<boolean>(false);
    
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
		setIsAdmin(event.currentTarget.checked);
	};


    const Add = () => {
        fetch("http://localhost:3000/api/users/", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Authorization: "Bearer " + props.token
              },
              body: JSON.stringify({
                  username: username,
                  password: password,
                  email: email,
                  isAdmin: isAdmin
              })
        }).then(response => {
            if (response.ok) {
                response.json().then((user: IUser) => {
                    props.addNewUser(user);
                    props.history.push('/users');
                })
            }
        })
    }

    return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-6">
					<div className="form-group" id="formEdit">
						<h3>Datos</h3>
						<br />
						<h4>Usuario</h4>
						<input
							type="text"
							id="username"
							placeholder=""
							className="form-control"
							value={username}
							onChange={updateUsername}
						/>
						<br />
						<h4>Contraseña</h4>
						<input
							data-testid="password_input"
							type="password"
							id="password"
							placeholder=""
							className="form-control"
							value={password}
							onChange={updatePassword}
						/>
						<br />
						<h4>Email</h4>
						<input
							type="text"
							id="email"
							placeholder=""
							className="form-control"
							value={email}
							onChange={updateEmail}
						/>
						<br />
						{props.myUser.isAdmin && (
							<div className=" form-group form-check">
								<h4>Administrador</h4>
								<input
									type="checkbox"
									className="form-control"
									checked={isAdmin}
									onChange={updateIsAdmin}
								/>
								<br />
							</div>
						)}
						<button type="submit" className="btn btn-outline-info" onClick={Add}>
							Añadir
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state: IGlobalState) => ({
    users: state.users,
    token: state.token
});

const mapDitpatchToProps = {
    addNewUser: actions.addNewUser
};

export default connect(
    mapStateToProps,
    mapDitpatchToProps
)(AddUser);