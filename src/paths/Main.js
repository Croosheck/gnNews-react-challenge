import "./Main.css";
import Lottie from "react-lottie";
import animationData from "../assets/lottie/main-globe.json";
import { motion } from "framer-motion";
import { memo } from "react";
import { langData } from "../appConfig";

function Main({ callback, lang }) {
	const { title, buttonLabel } = langData.hero;

	const lottieOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
		renderer: "canvas",
		lazyLoad: true,
		acceleration: true,
		clearCanvas: false,
		progressiveLoad: true,
		maxCacheFrames: 10,
		scaleMode: "noScale",
	};

	const titleVariants = {
		hidden: {
			opacity: 0,
			y: -20,
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.5,
				duration: 1,
			},
		},
	};
	const buttonVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				delay: 1.5,
				duration: 1,
			},
		},
	};
	const lottieVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				delay: 2,
				duration: 2,
			},
		},
	};

	function exploreHandler() {
		callback();
	}

	return (
		<div className="main">
			<motion.h1 variants={titleVariants} initial="hidden" animate="visible">
				{title[lang]}
			</motion.h1>
			<motion.button
				variants={buttonVariants}
				initial="hidden"
				animate="visible"
				onClick={exploreHandler}
				data-testid="button-main"
			>
				{buttonLabel[lang]}
			</motion.button>
			<motion.div
				variants={lottieVariants}
				initial="hidden"
				animate="visible"
				className="main-lottie-globe"
				data-testid="lottie-main"
			>
				<Lottie
					speed={0.3}
					options={lottieOptions}
					isClickToPauseDisabled
					style={{
						opacity: 0.03,
						position: "absolute",
						inset: 0,
						margin: "auto",
						width: "auto",
						maxWidth: 500,
						height: "auto",
						maxHeight: 500,
					}}
				/>
			</motion.div>
		</div>
	);
}

export default memo(Main);
