function Button({ width, children }) {
  return (
    <button className="customBtn" style={{ width: width }}>
      {children}
    </button>
  );
}

export default Button;
