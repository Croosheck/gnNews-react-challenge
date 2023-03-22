import "./CustomButton.css";

function CustomButton({ children, onClick }) {
	return (
		<button className="custom-button" onClick={onClick}>
			<span>{children}</span>
		</button>
	);
}

export default CustomButton;
