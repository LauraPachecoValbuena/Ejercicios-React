import React from "react";
import { IUser } from "../interfaces";

interface IProps {
  users: IUser[];
  isAdmin: boolean;
}

const Table: React.FC<IProps> = props => {
  return (
    <table className="table table-hover">
      <thead>
        <tr id="cabeceraTabla">
          <th scope="col">Name</th>
          {props.isAdmin && <th scope="col">Email</th>}
          {/*llamo a la variable isAdmin que contiene el resultado de la funcion amIAdmin*/}
        </tr>
      </thead>
      <tbody>
        {props.users.map(u => (
          <tr key={u._id}>
            <td>{u.username}</td>
            {props.isAdmin && <td>{u.email}</td>}
            {/*llamo a la variable isAdmin que contiene el resultado de la funcion amIAdmin*/}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
