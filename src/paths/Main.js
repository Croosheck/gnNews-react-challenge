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

	const lottieVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				delay: 0.8,
				duration: 2,
			},
		},
	};

	function exploreHandler() {
		callback();
	}

	return (
		<div className="main">
			<h1>We bring the news, you bring the coffee.</h1>
			<button onClick={exploreHandler}>Explore</button>
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
