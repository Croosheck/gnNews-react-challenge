import "./Drawer.css";
import { AnimatePresence, motion } from "framer-motion";
import { ImCross } from "react-icons/im";

import Lottie from "react-lottie";
import * as animationData from "../../assets/lottie/news.json";
import Option from "./menuOptions/Option";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCountryData } from "../../redux/slice";
import { getArticlesData } from "../../utils/getArticlesData";

const DUMMY_COUNTRIES = [
	{
		name: "Germany",
		short: "de",
	},
	{
		name: "USA",
		short: "us",
	},
	{
		name: "United Kingdom",
		short: "gb",
	},
	{
		name: "Poland",
		short: "pl",
	},
	{
		name: "Czech Republic",
		short: "cz",
	},
	{
		name: "China",
		short: "cn",
	},
];

function Drawer({ isOpened, onCloseClick, callback }) {
	const dispatch = useDispatch();

	const drawerVariants = {
		hidden: {
			opacity: 0,
			x: -100,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.3,
			},
		},
		exit: {
			opacity: 0,
			x: -100,
			transition: {
				duration: 0.2,
			},
		},
	};

	const lottieOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	async function getArticlesHandler(country) {
		callback();

		const data = await getArticlesData(country);

		dispatch(
			setCountryData({
				articles: data.articles,
				totalResults: data.totalResults,
			})
		);
	}

	return (
		<>
			<AnimatePresence>
				{isOpened && (
					<motion.div
						variants={drawerVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						className="drawer-container"
					>
						<div className="drawer--close-button-container">
							<motion.div
								initial={{ opacity: 0, y: -100 }}
								animate={{
									opacity: 1,
									y: 0,
									transition: {
										duration: 0.2,
									},
								}}
								className="drawer--close-button"
								onClick={onCloseClick}
							>
								<ImCross size={20} />
							</motion.div>
						</div>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{
								opacity: 1,
								transition: {
									delay: 0.2,
									duration: 0.5,
								},
							}}
							className="drawer-lottie-container"
						>
							<Lottie
								options={lottieOptions}
								height={500}
								isClickToPauseDisabled
							/>
						</motion.div>
						<div className="countries-list">
							{DUMMY_COUNTRIES.map((country, i) => {
								return (
									<NavLink to={`/countries/${country.short}`} key={i}>
										<Option
											countryName={country.name}
											countryShort={country.short}
											index={i}
											onClick={getArticlesHandler.bind(this, country.short)}
										/>
									</NavLink>
								);
							})}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}

export default Drawer;
