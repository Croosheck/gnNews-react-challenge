import "./CustomButton.css";

function CustomButton({ children, onClick }) {
	return <button onClick={onClick}>{children}</button>;
}

export default CustomButton;
