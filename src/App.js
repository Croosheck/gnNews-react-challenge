import "./App.css";

import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Main from "./paths/Main";
import Popup from "./components/UI/Popup";
import { useState } from "react";
import Header from "./sections/header/Header";
import CustomButton from "./components/UI/CustomButton";
import Drawer from "./sections/drawerMenu/Drawer";
import Feed from "./sections/content/news/Feed";
import Country from "./sections/content/news/article/Article";

function App() {
	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	let { id } = useParams();

	function togglePopup() {
		setIsPopupOpen((prev) => !prev);
	}
	function toggleDrawer() {
		setIsMenuOpen((prev) => !prev);
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
				<CustomButton onClick={togglePopup}>Click Me!</CustomButton>
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
