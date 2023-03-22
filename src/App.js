import "./App.css";

import { Routes, Route, useParams } from "react-router-dom";
import Main from "./paths/Main";
import Popup from "./components/UI/Popup";
import { useState } from "react";
import Header from "./sections/header/Header";
import CustomButton from "./components/UI/CustomButton";
import Drawer from "./sections/drawerMenu/Drawer";
import Feed from "./sections/content/news/Feed";
import Country from "./sections/content/news/article/Article";
import { useDispatch, useSelector } from "react-redux";
import { changeLayout } from "./redux/slice";
import { TfiLayoutGrid4Alt, TfiLayoutMenuV } from "react-icons/tfi";
import { HiCursorClick } from "react-icons/hi";

function App() {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [layoutIcon, setlayoutIcon] = useState(<TfiLayoutGrid4Alt size={22} />);

	const { currentLayout } = useSelector((state) => state.newsReducer);

	const dispatch = useDispatch();

	let { id } = useParams();

	function togglePopup() {
		setIsPopupOpen((prev) => !prev);
	}
	function toggleDrawer() {
		setIsMenuOpen((prev) => !prev);
	}
	function toggleLayout() {
		if (currentLayout === "default") {
			dispatch(changeLayout("list"));
			setlayoutIcon(<TfiLayoutMenuV size={23} />);
		}
		if (currentLayout === "list") {
			dispatch(changeLayout("default"));
			setlayoutIcon(<TfiLayoutGrid4Alt size={23} />);
		}
	}

	return (
		<div className="App">
			<Popup
				isOpen={isPopupOpen}
				onClose={togglePopup}
				content="Here is your popup!"
			/>

			<Drawer isOpened={isMenuOpen} onCloseClick={toggleDrawer} />

			<Header title="BMine" onBurgerClick={toggleDrawer}>
				<CustomButton onClick={toggleLayout}>{layoutIcon}</CustomButton>
				<CustomButton onClick={togglePopup}>
					{<HiCursorClick size={23} />}
				</CustomButton>
			</Header>

			<Routes>
				{/* <Route path="/*" element={<Navigate replace to="/main" />} /> */}
				<Route path="/main" element={<Main />} />
				<Route path="/feed" element={<Feed />} />
				<Route path="/countries/" element={<Feed />}>
					<Route path=":id" element={<Country />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
