import "./Article.css";
import { formatDate } from "../../../../utils/formatDate";
import defaultBackground from "../../../../assets/imgs/article/background2.jpg";
import { useSelector } from "react-redux";

function Article({ id, article, totalResults }) {
	const { currentLayout } = useSelector((state) => state.newsReducer);

	let background = article.urlToImage;

	if (article.urlToImage === null || currentLayout === "list")
		background = defaultBackground;

	return (
		<div
			className={`article-container ${
				currentLayout === "list" && "article-container-list"
			}`}
			style={{
				backgroundImage: `url(${background})`,
				backgroundSize: "cover",
			}}
		>
			<div className="info-container">
				<span className="article--title">{article.title}</span>
				<span className="article--publish-date">
					Published at: {formatDate(article.publishedAt)}
				</span>
				<span className="article--source">By: {article.author}</span>
			</div>
		</div>
	);
}

export default Article;
