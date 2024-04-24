import React, { useState } from "react";
import logo from "./NewsMonkeyLogo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Navbar(props) {
	const [searchQuery, setSearchQuery] = useState("");
	const navigate = useNavigate();
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					<img src={logo} alt="logo" height="40px" /> News Monkey
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink
								className="nav-link"
								aria-current="page"
								to="/"
							>
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/nation">
								Nation
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/world">
								World
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/business">
								Business
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/sports">
								Sports
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/entertainment">
								Entertainment
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/health">
								Health
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/science">
								Science
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" to="/technology">
								Technology
							</NavLink>
						</li>
					</ul>
					<form
						className="d-flex"
						role="search"
						onSubmit={(e) => {
							e.preventDefault();
							props.onSearch(searchQuery);
							navigate("/");
						}}
					>
						<input
							id="searchInput"
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
						/>
						<button className="btn btn-primary" type="submit">
							Search
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
}
