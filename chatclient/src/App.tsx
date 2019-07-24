import React from "react";
import io from "socket.io-client";
interface IMessage {
  username: string;
  message: string;
}
const App: React.FC = () => {
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState<IMessage[]>([]);
  React.useEffect(() => {
    const socket = io("http://192.168.100.2/");
    socket.on("new message", (m: IMessage) => {
      messages.unshift(m);
      setMessages([...messages]);
    });
  }, []);
  const updateMessage = (e: any) => setMessage(e.target.value);
  const send = () => {
    io("http://192.168.100.2/").emit("message", { username: "Laura.P", message });
    setMessage("");
  };
  return (
    <div>
      <input type="text" value={message} onChange={updateMessage} />
      <button onClick={send}>Enviar</button>
      <div>
        <ul>
          {messages.map((m: IMessage, i) => (
            <li key={i}>
              {m.username}: {m.message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default App;
