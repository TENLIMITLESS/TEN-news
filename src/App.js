import React, { useState, useEffect } from "react";
import Navbar from "./MyComponents/Navbar";
import News from "./MyComponents/News";
import Footer from "./MyComponents/Footer";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
	useEffect(() => {
		const shownWarning = sessionStorage.getItem("shownWarning");
		if (!shownWarning) {
			alert(
				"Notice: This API's (Gnews.io) free tier only gives 10 articles per request and page=2 is not allowed for free. So, you will only see 10 articles repeatedly in infinite scroll."
			);
			sessionStorage.setItem("shownWarning", "true");
		}
	}, []);
	const [searchQuery, setSearchQuery] = useState("");
	const [progress, setProgress] = useState(0);
	return (
		<Router basename="/news-monkey3">
			<Navbar onSearch={(query) => setSearchQuery(query)} />
			<LoadingBar
				color="#f11946"
				progress={progress}
				onLoaderFinished={() => setProgress(0)}
			/>
			<div style={{ minHeight: "82.3vh" }}>
				<Routes>
					<Route
						path="/"
						element={
							<News
								key="general"
								category="general"
								searchQuery={searchQuery}
								setProgress={setProgress}
							/>
						}
					/>
					<Route
						path="/nation"
						element={
							<News
								key="nation"
								category="nation"
								setProgress={setProgress}
							/>
						}
					/>
					<Route
						path="/world"
						element={
							<News
								key="world"
								category="world"
								setProgress={setProgress}
							/>
						}
					/>
					<Route
						path="/business"
						element={
							<News
								key="business"
								category="business"
								setProgress={setProgress}
							/>
						}
					/>
					<Route
						path="/sports"
						element={
							<News
								key="sports"
								category="sports"
								setProgress={setProgress}
							/>
						}
					/>
					<Route
						path="/entertainment"
						element={
							<News
								key="entertainment"
								category="entertainment"
								setProgress={setProgress}
							/>
						}
					/>
					<Route
						path="/health"
						element={
							<News
								key="health"
								category="health"
								setProgress={setProgress}
							/>
						}
					/>
					<Route
						path="/science"
						element={
							<News
								key="science"
								category="science"
								setProgress={setProgress}
							/>
						}
					/>
					<Route
						path="/technology"
						element={
							<News
								key="technology"
								category="technology"
								setProgress={setProgress}
							/>
						}
					/>
				</Routes>
			</div>
			<Footer />
		</Router>
	);
}
