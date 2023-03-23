import "./Main.css";
import Lottie from "react-lottie";
import * as animationData from "../assets/lottie/main-globe.json";
import { motion } from "framer-motion";

function Main({ callback }) {
	const lottieOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
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
				We bring the news, you bring the coffee.
			</motion.h1>
			<motion.button
				variants={buttonVariants}
				initial="hidden"
				animate="visible"
				onClick={exploreHandler}
			>
				Explore
			</motion.button>
			<motion.div
				variants={lottieVariants}
				initial="hidden"
				animate="visible"
				className="main-lottie-globe"
			>
				<Lottie
					speed={0.4}
					options={lottieOptions}
					isClickToPauseDisabled
					style={{
						opacity: 0.1,
					}}
				/>
			</motion.div>
		</div>
	);
}

export default Main;
