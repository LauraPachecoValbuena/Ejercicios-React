import React from "react";
import { RouteComponentProps } from "react-router-dom";


const Page2: React.FC<RouteComponentProps<any>> = props => {
    return <div>{props.match.params.userId}</div>
};

// const Page2: React.FC<RouteComponentProps<{ userId?: string }>> = props => {
//     return <div>{props.match.params.userId}</div>
// };

export default Page2;