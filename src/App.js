import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./paths/Main";
import Popup from "./components/UI/Popup";
import { useState } from "react";
import Header from "./sections/header/Header";
import CustomButton from "./components/UI/CustomButton";

function App() {
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	function togglePopup() {
		setIsPopupOpen((prev) => !prev);
	}

	return (
		<div className="App">
			<Header title="BMine">
				<CustomButton onClick={togglePopup}>Popup</CustomButton>
			</Header>
			<Popup
				isOpen={isPopupOpen}
				onClose={togglePopup}
				content="Here is your popup!"
			/>
			<Routes>
				<Route path="/*" element={<Navigate replace to="/main" />} />
				<Route path="/main" element={<Main />} />
			</Routes>
		</div>
	);
}

export default App;
