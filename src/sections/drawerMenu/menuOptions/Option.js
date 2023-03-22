import "./Option.css";
import { motion } from "framer-motion";

function Option({ countryName = "", countryShort = "", onClick, index }) {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
				transition: {
					duration: 0.8,
					delay: 0.1 * (index + 1),
				},
			}}
			className="option-container"
			onClick={onClick}
		>
			<span className="option-icon">
				<img
					src={`https://www.countryflagicons.com/SHINY/32/${countryShort.toUpperCase()}.png`}
					alt="country icon"
				/>
			</span>
			<p className="option-country">{countryName}</p>
		</motion.div>
	);
}

export default Option;
