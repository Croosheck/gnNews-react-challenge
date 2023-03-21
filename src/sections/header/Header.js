import "./Header.css";
import { motion } from "framer-motion";

function Header({ children, title }) {
	const titleVariants = {
		hidden: {
			opacity: 0,
			x: -50,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 1,
				delay: 0.2,
			},
		},
	};

	return (
		<nav className="navbar">
			<motion.div
				variants={titleVariants}
				initial="hidden"
				animate="visible"
				data-logo={title}
			>
				<span>{title}</span>
			</motion.div>
			<ul className="navbar-nav">{children}</ul>
		</nav>
	);
}

export default Header;
