export const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        fontSize: size === "small" ? "8px" : "32px",
        backgroundColor: color,
      }}
    >
      {text}
    </button>
  );
};

export const RedButton = (props) => <Button {...props} color="crimson" />;

export const GreenSmallButton = (props) => (
  <Button {...props} color="green" size="small" />
);
