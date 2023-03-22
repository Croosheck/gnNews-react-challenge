import { useRef } from "react";
import "./Popup.css";
import { AnimatePresence, motion } from "framer-motion";

function Popup({ isOpen = false, onClose, content = "", children }) {
	const constraintsRef = useRef();

	const animatedText = content;
	const textArray = animatedText.split("");

	const animTextHTML = textArray.map((letter, i) => {
		const direction = i % 2 === 0 ? -1 : 1;

		return (
			<motion.pre
				initial={{ y: 100 * direction, opacity: 0 }}
				animate={{
					y: 0,
					opacity: 1,
					transition: {
						delay: 0.5 + 0.03 * i,
						type: "spring",
						stiffness: 150,
						mass: 0.5,
					},
				}}
				key={i}
			>
				{letter}
			</motion.pre>
		);
	});

	const popup = {
		hidden: { opacity: 0, y: 1000 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.1,
				type: "spring",
				stiffness: 50,
				mass: 0.8,
			},
		},
		exit: {
			opacity: 0,
			y: -500,
			transition: {
				delay: 0,
				duration: 0.5,
			},
		},
	};

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { duration: 0.2 } }}
					exit={{ opacity: 0, transition: { duration: 0.2 } }}
					className="popup-backdrop"
					onMouseDown={onClose}
					ref={constraintsRef}
				>
					<motion.div
						initial="hidden"
						animate="visible"
						exit="exit"
						drag
						dragElastic={0.1}
						dragSnapToOrigin
						variants={popup}
						className="popup"
						onMouseDown={(e) => e.stopPropagation()}
					>
						{content ? animTextHTML : children}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default Popup;
