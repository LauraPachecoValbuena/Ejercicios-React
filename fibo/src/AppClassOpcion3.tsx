//Fibonacci con clases y variables locales (opcion 3).

import React from "react";
import { fib } from "./functions";
class App extends React.PureComponent<any, any> {
  private memoN: number;
  private memoValue: number;
  constructor(props: any) {
    super(props);
    this.state = { n: 0, value: 0, n2: 0 };
    this.memoN = -1;
    this.memoValue = -1;
  }
  add = () => this.setState({ n: this.state.n + 1 });
  sub = () =>
    this.setState({
      n: this.state.n > 1 ? this.state.n - 1 : 0
    });
  add2 = () => this.setState({ n2: this.state.n2 + 1 });
  sub2 = () => this.setState({ n2: this.state.n2 > 1 ? this.state.n2 - 1 : 0 });
  calcfibMemo = () => {
    if (this.memoN === this.state.n) {
      return this.memoValue;
    }
    const value = fib(this.state.n);
    this.memoValue = value;
    this.memoN = this.state.n;
    return value;
  };
  render() {
    const value = this.calcfibMemo();
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
          <div>Resultado: {value}</div>
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
