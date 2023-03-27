import { memo } from "react";
import "./CustomButton.css";
import { motion } from "framer-motion";

function CustomButton({ children, onClick, style, className, testid }) {
	const buttonVariants = {
		hidden: {
			opacity: 0,
			y: -100,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.5,
				duration: 0.6,
			},
		},
	};

	return (
		<motion.button
			variants={buttonVariants}
			initial="hidden"
			animate="visible"
			className={`custom-button ${className}`}
			onClick={onClick}
			style={style}
			data-testid={testid}
		>
			<span>{children}</span>
		</motion.button>
	);
}

export default memo(CustomButton);
