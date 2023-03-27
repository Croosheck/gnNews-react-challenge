import "./App.css";
import { LAYOUTS } from "./appConfig";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./paths/Main";
import Popup from "./components/UI/Popup";
import { useEffect, useState } from "react";
import Header from "./sections/header/Header";
import CustomButton from "./components/UI/CustomButton";
import Drawer from "./sections/drawerMenu/Drawer";
import Feed from "./sections/content/news/Feed";
import Article from "./sections/content/news/article/Article";
import { useDispatch } from "react-redux";
import { changeLayout } from "./redux/slice";

import { TfiLayoutGrid4Alt, TfiLayoutMenuV } from "react-icons/tfi";
import { HiCursorClick } from "react-icons/hi";

import Footer from "./sections/footer/Footer";
import { toggleLayout } from "./utils/setLocalStorage";

import { langData } from "./appConfig";

function App() {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [layoutIcon, setLayoutIcon] = useState();
	const [logo, setLogo] = useState("gnNews");

	const dispatch = useDispatch();
	const appLang = localStorage.getItem("lang") || "en";

	const { logoPrompt } = langData.other;

	useEffect(() => {
		const storedLayout = localStorage.getItem("layout");
		if (storedLayout) dispatch(changeLayout(storedLayout));
		else {
			dispatch(changeLayout("default"));
			setLayoutIcon(<TfiLayoutMenuV size={23} />);
		}
		setLayoutIconHandler(storedLayout);
	}, [dispatch]);

	function togglePopupHandler() {
		setIsPopupOpen((prev) => !prev);
	}
	function toggleDrawerHandler() {
		setIsMenuOpen((prev) => !prev);
	}

	function setLayoutIconHandler(currentLayout) {
		if (currentLayout === "list") {
			setLayoutIcon(<TfiLayoutGrid4Alt size={23} />);
		}

		if (currentLayout === "default") {
			setLayoutIcon(<TfiLayoutMenuV size={23} />);
		}
	}

	function toggleLayoutHandler() {
		const layout = toggleLayout({
			data: {
				layouts: LAYOUTS,
			},
		});
		dispatch(changeLayout(layout));
		setLayoutIconHandler(layout);
	}

	function changeLogoHandler() {
		const newLogo = prompt(logoPrompt[appLang]);
		if (newLogo === null) return;
		setLogo(newLogo);
	}

	return (
		<div className="App">
			<Popup
				isOpen={isPopupOpen}
				onClose={togglePopupHandler}
				content={true}
				testid="header-popup"
				lang={appLang}
			/>

			<Drawer
				isOpened={isMenuOpen}
				onCloseClick={toggleDrawerHandler}
				callback={() => setIsMenuOpen(false)}
				lang={appLang}
			/>

			<Header title={logo} onBurgerClick={toggleDrawerHandler} lang={appLang}>
				<CustomButton
					onClick={changeLogoHandler}
					style={{
						width: "30%",
					}}
					className="hidden"
				>
					LOGO
				</CustomButton>
				<CustomButton onClick={toggleLayoutHandler}>{layoutIcon}</CustomButton>
				<CustomButton onClick={togglePopupHandler} testid="header-popup-button">
					{<HiCursorClick size={23} />}
				</CustomButton>
			</Header>

			<Routes>
				<Route path="/*" element={<Navigate replace to="/main" />} />
				<Route
					path="/main"
					element={<Main lang={appLang} callback={() => setIsMenuOpen(true)} />}
				/>
				<Route path="/country/" element={<Feed lang={appLang} />}>
					<Route path=":id" element={<Article lang={appLang} />} />
				</Route>
			</Routes>

			<Footer lang={appLang} />
		</div>
	);
}

export default App;
