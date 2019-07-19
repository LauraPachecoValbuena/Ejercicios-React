import React from "react";
import { IUser } from "../interfaces";


interface IProps {
    users: IUser[];
    isAdmin: boolean;
  }

class TableClass extends React.Component<IProps> {

    render() {
        return (
            <table className="table table-hover">
            <thead>
              <tr id="cabeceraTabla">
                <th scope="col">Name</th>
                {this.props.isAdmin && <th scope="col">Email</th>}
              </tr>
            </thead>
            <tbody>
              {this.props.users.map(u => (
                <tr key={u._id}>
                  <td>{u.username}</td>
                  {this.props.isAdmin && <td>{u.email}</td>}
                </tr>
              ))}
            </tbody>
          </table>

        );
        
    };
};



export default TableClass;