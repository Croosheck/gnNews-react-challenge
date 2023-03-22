import "./Feed.css";
import { useParams } from "react-router-dom";
import Article from "./article/Article";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesData } from "../../../utils/getArticlesData";
import { setCountryData } from "../../../redux/slice";
import { useEffect } from "react";
import { DUMMY_ARTICLES } from "../../../appConfig";

function Feed() {
	const { id } = useParams();
	const dispatch = useDispatch();

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
	}

	useEffect(() => {
		if (id) {
			showArticlesHandler();
		}
	}, []);

	const { countryData, currentLayout } = useSelector(
		(state) => state.newsReducer
	);

	return (
		<div
			className={`articles-feed-container ${
				currentLayout === "list" ? "articles-feed-container-list" : ""
			}`}
		>
			{countryData.articles?.map((article, i) => {
				return <Article key={i} id={i} article={article} />;
			})}
		</div>
	);
}

export default Feed;
