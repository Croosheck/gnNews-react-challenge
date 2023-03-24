import "./Header.css";
import { motion } from "framer-motion";
import { memo } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

function Header({ children, title, onBurgerClick }) {
	const titleVariants = {
		hidden: {
			opacity: 0,
			x: -50,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
				delay: 0.2,
			},
		},
	};
	const burgerVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 0.3,
				delay: 1,
			},
		},
	};

	return (
		<nav className="navbar">
			<motion.span
				className="menu-burger"
				onClick={onBurgerClick}
				variants={burgerVariants}
				initial="hidden"
				animate="visible"
			>
				<GiHamburgerMenu size={25} />
			</motion.span>
			<NavLink to="/">
				<motion.div
					variants={titleVariants}
					initial="hidden"
					animate="visible"
					data-logo={title}
					className="logo"
				>
					<span role="generic">{title}</span>
				</motion.div>
			</NavLink>
			<ul className="navbar-nav">{children}</ul>
		</nav>
	);
}

export default memo(Header);
