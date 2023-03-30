import "./Feed.css";
import { useParams } from "react-router-dom";
import Article from "./article/Article";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesData } from "../../../utils/getArticlesData";
import { setCountryData } from "../../../redux/slice";
import { memo, useEffect, useState } from "react";
import { DUMMY_ARTICLES } from "../../../appConfig";
import { AnimatePresence, motion } from "framer-motion";
import { getFailedCountryName } from "./reusable";
import { langData } from "../../../appConfig";

function Feed({ lang }) {
	const [requestFailed, setRequestFailed] = useState({
		isFailed: false,
		country: "",
	});
	const { id } = useParams();
	const dispatch = useDispatch();

	const { noArticles, forWord } = langData.feed.warning;

	useEffect(() => {
		async function showArticlesHandler() {
			window.scrollTo(0, 0);
			const data = await getArticlesData(id);

			//gets the country's name, for which the articles data hasn't been able to fetch
			if (data.totalResults === 0) getFailedCountryName(id, setRequestFailed);

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

	if (requestFailed.isFailed) {
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
							{noArticles[lang]}{" "}
							{requestFailed.country &&
								`${forWord[lang]}: ${requestFailed.country}`}
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
					return <Article key={i} index={i} article={article} lang={lang} />;
				})}
			</motion.div>
		</AnimatePresence>
	);
}

export default memo(Feed);
