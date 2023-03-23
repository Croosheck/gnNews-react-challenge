import { memo, useEffect, useRef, useState } from "react";
import "./Popup.css";
import { AnimatePresence, motion } from "framer-motion";
import { POPUP_PROS_CONS } from "../../appConfig";

function Popup({ isOpen = false, onClose, content = "", children }) {
	const [popupContent, setPopupContent] = useState();
	const [option, setOption] = useState();
	const constraintsRef = useRef();

	useEffect(() => {
		if (!content) return;

		setPopupContent(POPUP_PROS_CONS.default);
		setOption();
	}, [isOpen]);

	const popupVariants = {
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

	const textContentVariants = {
		hidden: {
			y: 100,
			opacity: 0,
		},
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 1,
			},
		},
		visibleDefault: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 1.2,
				delay: 0.5,
			},
		},
		exit: {
			y: -100,
			opacity: 0,
		},
	};

	function popupContentHandler(type) {
		setOption(type);

		if (type === "bad") setPopupContent(POPUP_PROS_CONS.cons.content);
		if (type === "good") setPopupContent(POPUP_PROS_CONS.pros.content);
	}

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
						variants={popupVariants}
						className="popup"
						onMouseDown={(e) => e.stopPropagation()}
					>
						<AnimatePresence>
							<div className="content-container">
								{content ? (
									<>
										{/* Necessary for the animation transitions to work */}
										{option === "bad" && (
											<motion.div
												variants={textContentVariants}
												initial="hidden"
												animate="visible"
												exit="exit"
												className="text-container"
												data-option="bad"
											>
												<h4>{popupContent}</h4>
											</motion.div>
										)}
										{option === "good" && (
											<motion.div
												variants={textContentVariants}
												initial="hidden"
												animate="visible"
												exit="exit"
												className="text-container"
												data-option="good"
											>
												<h4>{popupContent}</h4>
											</motion.div>
										)}
										{!option && (
											<motion.div
												variants={textContentVariants}
												initial="hidden"
												animate="visibleDefault"
												exit="exit"
												className="text-container"
											>
												<h4>{popupContent}</h4>
											</motion.div>
										)}
									</>
								) : (
									children
								)}
							</div>
						</AnimatePresence>
						{content && (
							<div className="popup-buttons">
								<button
									id="bad"
									className={`popup-option-button ${
										option === "bad" && "button-active"
									}`}
									onClick={popupContentHandler.bind(this, "bad")}
								>
									😥
								</button>
								<button
									id="good"
									className={`popup-option-button ${
										option === "good" && "button-active"
									}`}
									onClick={popupContentHandler.bind(this, "good")}
								>
									😃
								</button>
							</div>
						)}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default memo(Popup);
