import "./Feed.css";
import { useParams } from "react-router-dom";
import Article from "./article/Article";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesData } from "../../../utils/getArticlesData";
import { setCountryData } from "../../../redux/slice";
import { useEffect } from "react";
import { DUMMY_ARTICLES } from "../../../appConfig";
import { AnimatePresence, motion } from "framer-motion";

function Feed() {
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		async function showArticlesHandler() {
			const data = await getArticlesData(id);

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

			// Trigger animation on content change
		}

		if (id) {
			showArticlesHandler();
		}
	}, [id, dispatch]);

	const { countryData, currentLayout } = useSelector(
		(state) => state.newsReducer
	);

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

export default Feed;
