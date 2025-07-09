const Toast = ({ id, onClose, text }) => {
  const handleCancelClick = () => {
    onClose(id);
  };

  return (
    <div className="toast-container">
      <span style={{ color: "blue", fontWeight: "bold" }}>{text}</span>
      <span
        onClick={handleCancelClick}
        style={{
          cursor: "pointer",
          color: "red",
          fontSize: "20px",
          fontWeight: "bolder",
        }}
      >
        x
      </span>
    </div>
  );
};

export default Toast;
