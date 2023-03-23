import "./Article.css";
import { formatDate } from "../../../../utils/formatDate";
import defaultBackground from "../../../../assets/imgs/article/background3.webp";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import ArticleModal from "./ArticleModal";
import { memo, useState } from "react";

function Article({ article, index = 1 }) {
	const [openArticle, setOpenArticle] = useState(false);
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
				delay: 0.06 * (index + 1),
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	//modal handler
	function toggleArticleHandler() {
		setOpenArticle((prev) => !prev);
	}

	return (
		<>
			<ArticleModal
				isOpen={openArticle}
				data={article}
				onClose={toggleArticleHandler}
			/>
			<AnimatePresence key={currentLayout}>
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
					onClick={toggleArticleHandler}
				>
					<div
						className={`info-container ${
							currentLayout === "default"
								? "card-layout-hover"
								: "list-layout-hover"
						}`}
					>
						<span className="article--title">{article.title}</span>
						<span className="article--publish-date">
							Published at: {formatDate(article.publishedAt)}
						</span>
						<span className="article--source">By: {article.author}</span>
					</div>
				</motion.div>
			</AnimatePresence>
		</>
	);
}

export default memo(Article);
