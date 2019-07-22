//Fibonacci en clases opción 1.

import React from "react";
import { fib } from "./functions";
class App extends React.Component<any, any> {
 constructor(props: any) {
  super(props);
  this.state = { n: 0, value: 0, n2: 0 };
 }
 add = () => {
  const newN = this.state.n + 1;
  this.setState({ n: newN, value: fib(newN) });
 };
 sub = () => {
  const newN = this.state.n > 1 ? this.state.n - 1 : 0;
  this.setState({
   n: newN,
   value: fib(newN)
  });
 };
 add2 = () => this.setState({ n2: this.state.n2 + 1 });
 sub2 = () => this.setState({ n2: this.state.n2 > 1 ? this.state.n2 - 1 : 0 });
 render() {
  return (
   <div>
    <div>
     <div>{this.state.n}</div>
     <div>
      <button onClick={this.add}>Add</button>
     </div>
     <div>
      <button onClick={this.sub}>Sub</button>
     </div>
     <div>Resultado: {this.state.value}</div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <div>
     <div>{this.state.n2}</div>
     <div>
      <button onClick={this.add2}>Add</button>
     </div>
     <div>
      <button onClick={this.sub2}>Sub</button>
     </div>
    </div>
   </div>
  );
 }
}
/*const App: React.FC = () => {
 const [n, setN] = React.useState(0);
 const [n2, setN2] = React.useState(0);
 const value = React.useMemo(() => fib(n), [n]);
 const add = React.useCallback(() => setN(n => n + 1), []);
 const sub = React.useCallback(() => setN(n => (n > 1 ? n - 1 : 0)), []);
 const add2 = React.useCallback(() => setN2(n => n + 1), []);
 const sub2 = React.useCallback(() => setN2(n => (n > 1 ? n - 1 : 0)), []);
 return (
  <div>
   <div>
    <div>{n}</div>
    <div>
     <button onClick={add}>Add</button>
    </div>
    <div>
     <button onClick={sub}>Sub</button>
    </div>
    <div>Resultado: {value}</div>
   </div>
   <br />
   <br />
   <br />
   <br />
   <div>
    <div>{n2}</div>
    <div>
     <button onClick={add2}>Add</button>
    </div>
    <div>
     <button onClick={sub2}>Sub</button>
    </div>
   </div>
  </div>
 );
};*/
export default App;
