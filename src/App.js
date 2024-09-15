import React, { useState } from "react";
import Navbar from "./MyComponents/Navbar";
import News from "./MyComponents/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
	const [searchQuery, setSearchQuery] = useState("");
	const [progress, setProgress] = useState(0);
	return (
		<Router>
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
		</Router>
	);
}
