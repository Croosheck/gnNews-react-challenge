import "./ArticleModal.css";
import Popup from "../../../../components/UI/Popup";
import Placeholder from "../../../../assets/imgs/article/background1.webp";
import { memo } from "react";
import { langData } from "../../../../appConfig";

function ArticleModal({
	isOpen,
	onClose,
	data = {
		url: "",
		urlToImage: Placeholder,
		author: "",
		description: "",
		title: "",
	},
	lang,
}) {
	const { authorLabel, buttonLabel } = langData.feed.articleModal;

	return (
		<Popup isOpen={isOpen} onClose={onClose}>
			<div className="article-modal">
				<img
					src={data.urlToImage || Placeholder}
					alt="Article"
					className="article-photo"
				/>
				<div className="article-content">
					<p id="title">{data.title}</p>
					{data.description && <p id="description">{data.description}</p>}
					<p id="author">
						{authorLabel[lang]}: {data.author}
					</p>
					<a id="url" href={data.url} target="_blank" rel="noreferrer">
						<button>{buttonLabel[lang]}</button>
					</a>
				</div>
			</div>
		</Popup>
	);
}

export default memo(ArticleModal);
