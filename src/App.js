import { useState } from "react";
import "./styles.css";
import Toast from "./Toast";

export default function App() {
  const [toasts, setToasts] = useState([]);

  const handleButtonClick = () => {
    const id = Date.now();
    setToasts((prev) => [...prev, id]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toastId) => toastId !== id));
    }, 5000);
  };

  const handleClose = (idToRemove) => {
    setToasts((prev) => prev.filter((id) => id !== idToRemove));
  };

  return (
    <div className="App">
      <div className="button-container">
        <button className="toast-button" onClick={handleButtonClick}>
          Toast Button
        </button>
      </div>

      <div className="toast-wrapper">
        {toasts.map((id) => (
          <Toast key={id} id={id} onClose={handleClose} text={`Toast ${id}`} />
        ))}
      </div>
    </div>
  );
}
