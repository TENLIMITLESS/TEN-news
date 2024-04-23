import React, { useEffect, useState, useCallback } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading.gif";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
	const apikey = process.env.REACT_APP_API_KEY1;
	// const apikey = process.env.REACT_APP_API_KEY2;
	const { pageSize, category, setProgress, searchQuery } = props;
	const [articles, setArticles] = useState([]);
	const [page, setPage] = useState(1);
	const [totalResults, setTotalResults] = useState(0);
	const [loading, setLoading] = useState(false);

	const fetchData = useCallback(async () => {
		try {
			const url = searchQuery
				? `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&page=1&pageSize=${pageSize}&q=${searchQuery}`
				: `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&page=1&pageSize=${pageSize}&category=${category}`;
			setLoading(true);
			setProgress(25);
			let data = await fetch(url);
			setProgress(50);
			let parsedData = await data.json();
			setProgress(75);
			setArticles(parsedData.articles);
			setTotalResults(parsedData.totalResults);
			setProgress(100);
			setLoading(false);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}, [apikey, category, pageSize, setProgress, searchQuery]);

	const fetchMoreData = async () => {
		try {
			const nextPage = page + 1;
			const url = searchQuery
				? `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&page=${nextPage}&pageSize=${pageSize}&q=${searchQuery}`
				: `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&page=${nextPage}&pageSize=${pageSize}&category=${category}`;
			let data = await fetch(url);
			let parsedData = await data.json();
			setArticles([...articles, ...parsedData.articles]);
			setPage(nextPage);
		} catch (error) {
			console.error("Error fetching more data:", error);
		}
	};

	useEffect(() => {
		fetchData();
	}, [category, searchQuery, fetchData]);

	let loadingStyle = {
		height: "76.2vh",
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	};

	return (
		<>
			<h2 style={{ marginTop: "5rem", textAlign: "center" }}>
				<u>
					News Monkey - Top{" "}
					{category.charAt(0).toUpperCase() + category.slice(1)}{" "}
					Headlines
				</u>
			</h2>
			<InfiniteScroll
				dataLength={articles.length}
				next={fetchMoreData}
				hasMore={articles.length !== totalResults}
				loader={
					<div style={{ textAlign: "center", marginBottom: "10px" }}>
						<img src={Loading} alt="Loading..." />
					</div>
				}
			>
				{loading ? (
					<div style={loadingStyle}>
						<img src={Loading} alt="Loading..." height="75px" />{" "}
					</div>
				) : (
					<>
						{articles.length === 0 && !loading && (
							<div
								style={{
									height: "70vh",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<h3>No match found</h3>
							</div>
						)}
						<div className="container">
							<div className="row">
								{articles.map((e, idx) => {
									return (
										<div className="col-lg-4 col-md-6 col-sm-12 my-4" key={idx}>
											<NewsItem
												title={e.title}
												desc={e.description}
												imgUrl={e.urlToImage}
												newsUrl={e.url}
												author={e.author}
												source={e.source.name}
												date={e.publishedAt}
											/>
										</div>
									);
								})}
							</div>
						</div>
					</>
				)}
			</InfiniteScroll>
		</>
	);
}
