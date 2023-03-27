import { memo, useEffect, useRef, useState } from "react";
import "./Popup.css";
import { AnimatePresence, motion } from "framer-motion";
import { POPUP_PROS_CONS, langData } from "../../appConfig";

function Popup({
	isOpen = false,
	onClose,
	content = "",
	children,
	testid,
	lang,
}) {
	const [popupContent, setPopupContent] = useState();
	const [option, setOption] = useState();
	const constraintsRef = useRef();

	useEffect(() => {
		if (!content) return;

		setPopupContent(langData.popup.default[lang]);
		setOption();
	}, [isOpen, content]);

	const popupVariants = {
		hidden: { opacity: 0, y: 100 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.1,
				type: "spring",
				stiffness: 50,
				mass: 0.8,
				delay: 0.2,
			},
		},
		exit: {
			opacity: 0,
			y: -100,
			transition: {
				duration: 0.1,
			},
		},
	};

	const textContentVariants = {
		hidden: {
			y: 100,
			opacity: 0,
		},
		hiddenDefault: {
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

		if (type === "bad") setPopupContent(langData.popup.cons[lang]);
		if (type === "good") setPopupContent(langData.popup.pros[lang]);
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
					data-testid={testid}
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
												initial="hiddenDefault"
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
