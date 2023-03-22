import "./Feed.css";
import { useParams } from "react-router-dom";
import Article from "./article/Article";
import { useSelector } from "react-redux";

function Feed() {
	const { id } = useParams();

	const { countryData, currentLayout } = useSelector(
		(state) => state.newsReducer
	);

	return (
		<div
			className={`articles-feed-container ${
				currentLayout === "list" && "articles-feed-container-list"
			}`}
		>
			{countryData.articles.map((article, i) => {
				return <Article key={i} id={i} article={article} />;
			})}
		</div>
	);
}

export default Feed;
