import "./Feed.css";
import { useParams } from "react-router-dom";
import Article from "./article/Article";
import { useDispatch, useSelector } from "react-redux";
import { getArticlesData } from "../../../utils/getArticlesData";
import { setCountryData } from "../../../redux/slice";
import { useEffect } from "react";

const DUMMY_ARTICLES = [
	{
		title: "Test Title",
		publishedAt: 1679453148520,
		author: "Leeroy Jenkins",
	},
	{
		title: "Test Title",
		publishedAt: 1679453148520,
		author: "Leeroy Jenkins",
	},
	{
		title: "Test Title",
		publishedAt: 1679453148520,
		author: "Leeroy Jenkins",
	},
	{
		title: "Test Title",
		publishedAt: 1679453148520,
		author: "Leeroy Jenkins",
	},
	{
		title: "Test Title",
		publishedAt: 1679453148520,
		author: "Leeroy Jenkins",
	},
	{
		title: "Test Title",
		publishedAt: 1679453148520,
		author: "Leeroy Jenkins",
	},
	{
		title: "Test Title",
		publishedAt: 1679453148520,
		author: "Leeroy Jenkins",
	},
	{
		title: "Test Title",
		publishedAt: 1679453148520,
		author: "Leeroy Jenkins",
	},
	{
		title: "Test Title",
		publishedAt: 1679453148520,
		author: "Leeroy Jenkins",
	},
	{
		title: "Test Title",
		publishedAt: 1679453148520,
		author: "Leeroy Jenkins",
	},
	{
		title: "Test Title",
		publishedAt: 1679453148520,
		author: "Leeroy Jenkins",
	},
	{
		title: "Test Title",
		publishedAt: 1679453148520,
		author: "Leeroy Jenkins",
	},
	{
		title: "Test Title",
		publishedAt: 1679453148520,
		author: "Leeroy Jenkins",
	},
];

function Feed() {
	const { id } = useParams();
	const dispatch = useDispatch();

	async function showArticlesHandler() {
		const data = await getArticlesData(id);
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
			{/* HAS TO BE CHANGED FOR PRODUCTION (newsapi.org's rule) */}
			{/* {DUMMY_ARTICLES.map((article, i) => {
				return <Article key={i} id={i} article={article} />;
			})} */}
			{countryData.articles?.map((article, i) => {
				return <Article key={i} id={i} article={article} />;
			})}
		</div>
	);
}

export default Feed;
