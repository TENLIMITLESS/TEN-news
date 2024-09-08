import React, { useEffect, useState, useCallback } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading.gif";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
	const apikey = process.env.REACT_APP_API_KEY;
	const { category, setProgress, searchQuery } = props;
	const [articles, setArticles] = useState([]);
	const [page, setPage] = useState(1);
	const [totalArticles, setTotalArticles] = useState(0);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchData = useCallback(async () => {
		try {
			const url = searchQuery
				? `https://gnews.io/api/v4/top-headlines?q=${searchQuery}&in=title,description&lang=en&country=in&max=10&apikey=${apikey}`
				: `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&max=10&apikey=${apikey}`;
			setLoading(true);
			setProgress(25);
			let data = await fetch(url);
			if (data.status === 403) {
				setError("API daily limit exceeded. Please try again after 24 hours.");
				return;
			} else if(data.status === 429) {
				setError("Too Many Requests. Please try again later.");
				return;
			} else if(data.status !== 200) {
				setError("Unable to fetch data.");
			}
			setProgress(50);
			let parsedData = await data.json();
			setProgress(75);
			setArticles(parsedData.articles);
			setTotalArticles(parsedData.totalArticles);
			setProgress(100);
			setLoading(false);
		} catch (error) {
			console.error("Error fetching data:", error);
			setError("An unexpected error occurred. Please try again.");
			setLoading(false);
		}
	}, [apikey, setProgress, category, searchQuery]);

	const fetchMoreData = async () => {
		try {
			const nextPage = page + 1;
			const url = searchQuery
				? `https://gnews.io/api/v4/top-headlines?q=${searchQuery}&in=title,description&page=${nextPage}&lang=en&country=in&max=10&apikey=${apikey}`
				: `https://gnews.io/api/v4/top-headlines?category=${category}&page=${nextPage}&lang=en&country=in&max=10&apikey=${apikey}`;
			let data = await fetch(url);
			if (data.status === 403) {
				setError("API daily limit exceeded. Please try again after 24 hours.");
				return;
			} else if(data.status === 429) {
				setError("Too Many Requests. Please try again later.");
				return;
			} else if(data.status !== 200) {
				setError("Unable to fetch data.");
			}
			let parsedData = await data.json();
			setArticles([...articles, ...parsedData.articles]);
			setPage(nextPage);
		} catch (error) {
			console.error("Error fetching more data:", error);
			setError("An unexpected error occurred. Please try again.");
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
					Top{" "}
					{category.charAt(0).toUpperCase() + category.slice(1)}{" "}
					Headlines
				</u>
			</h2>
			{error ? (
				<div
					style={{
						height: "70vh",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						color: "red",
						textAlign: "center"
					}}
				>
					<h3>Error: {error}</h3>
				</div>
			) : (
				<InfiniteScroll
					dataLength={articles.length}
					next={fetchMoreData}
					hasMore={articles.length !== totalArticles}
					loader={
						<div
							style={{
								textAlign: "center",
								marginBottom: "10px",
							}}
						>
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
											<div
												className="col-lg-4 col-md-6 col-sm-12 my-4"
												key={idx}
											>
												<NewsItem
													title={e.title}
													desc={e.description}
													imgUrl={e.image}
													newsUrl={e.url}
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
			)}
		</>
	);
}
