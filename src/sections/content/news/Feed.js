import "./Feed.css";
import { useParams } from "react-router-dom";
import Article from "./article/Article";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesData } from "../../../utils/getArticlesData";
import { setCountryData } from "../../../redux/slice";
import { memo, useEffect, useState } from "react";
import { DUMMY_ARTICLES } from "../../../appConfig";
import { AnimatePresence, motion } from "framer-motion";

function Feed() {
	const [failedCountry, setFailedCountry] = useState();
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		async function showArticlesHandler() {
			const data = await getArticlesData(id);

			if (data.totalResults === 0) {
				async function getCountryName(code) {
					const response = await fetch(
						`https://restcountries.com/v3.1/alpha/${code}`
					);
					const countryData = await response.json();
					setFailedCountry(countryData[0].name.common);
				}

				getCountryName(id);
			}

			if (data.status === "error") {
				dispatch(
					setCountryData({
						articles: DUMMY_ARTICLES,
						message: data.message,
						status: data.status,
					})
				);

				return;
			}

			dispatch(
				setCountryData({
					articles: data.articles,
					totalResults: data.totalResults,
				})
			);
		}

		if (id) {
			showArticlesHandler();
		}
	}, [id, dispatch]);

	const { countryData, currentLayout } = useSelector(
		(state) => state.newsReducer
	);

	if (countryData.totalResults === 0) {
		return (
			<AnimatePresence>
				<motion.div
					key={id}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { duration: 0.4 } }}
					exit={{ opacity: 0, transition: { duration: 0.1 } }}
					className={`articles-feed-container ${
						currentLayout === "list" ? "articles-feed-container-list" : ""
					}`}
				>
					{
						<h2 id="country-failed">
							No articles has been found{" "}
							{!!failedCountry && `for ${failedCountry}`}
						</h2>
					}
				</motion.div>
			</AnimatePresence>
		);
	}

	return (
		<AnimatePresence>
			<motion.div
				key={id}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { duration: 0.4 } }}
				exit={{ opacity: 0, transition: { duration: 0.1 } }}
				className={`articles-feed-container ${
					currentLayout === "list" ? "articles-feed-container-list" : ""
				}`}
			>
				{countryData.articles?.map((article, i) => {
					return <Article key={i} index={i} article={article} />;
				})}
			</motion.div>
		</AnimatePresence>
	);
}

export default memo(Feed);
