import "./ArticleModal.css";
import Popup from "../../../../components/UI/Popup";
import Placeholder from "../../../../assets/imgs/article/background1.jpg";

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
}) {
	return (
		<Popup isOpen={isOpen} onClose={onClose}>
			<div className="article-modal">
				<img src={data.urlToImage} alt="Article" className="article-photo" />
				<div className="article-content">
					<p id="title">{data.title}</p>
					{data.description && <p id="description">{data.description}</p>}
					<p id="author">By: {data.author}</p>
					<a id="url" href={data.url} target="_blank" rel="noreferrer">
						<button>Open In New Tab</button>
					</a>
				</div>
			</div>
		</Popup>
	);
}

export default ArticleModal;
