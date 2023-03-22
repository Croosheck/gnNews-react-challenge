import "./Article.css";
import { formatDate } from "../../../../utils/formatDate";
import defaultBackground from "../../../../assets/imgs/article/background2.jpg";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

function Article({ id, article, totalResults }) {
	const { currentLayout } = useSelector((state) => state.newsReducer);
	let background = article.urlToImage;
	if (!article.urlToImage || currentLayout === "list")
		background = defaultBackground;

	const articleVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 1,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<AnimatePresence>
			<motion.div
				className={`article-container ${
					currentLayout === "list" && "article-container-list"
				}`}
				style={{
					backgroundImage: `url(${background})`,
					backgroundSize: "cover",
				}}
				variants={articleVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
			>
				<div className="info-container">
					<span className="article--title">{article.title}</span>
					<span className="article--publish-date">
						Published at: {formatDate(article.publishedAt)}
					</span>
					<span className="article--source">By: {article.author}</span>
				</div>
			</motion.div>
		</AnimatePresence>
	);
}

export default Article;
