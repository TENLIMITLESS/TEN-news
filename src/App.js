import React, { useState } from "react";
import Navbar from "./MyComponents/Navbar";
import News from "./MyComponents/News";
import Footer from "./MyComponents/Footer";
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
								pageSize={6}
								category="general"
								searchQuery={searchQuery}
								setProgress={setProgress}
							/>
						}
					/>
					<Route
						path="/business"
						element={
							<News
								key="business"
								pageSize={6}
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
								pageSize={6}
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
								pageSize={6}
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
								pageSize={6}
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
								pageSize={6}
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
								pageSize={6}
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
