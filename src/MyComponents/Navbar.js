import React, { useState, useRef, useEffect, useCallback } from "react";
// import logo from "./icon.png";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Navbar(props) {
	const [searchQuery, setSearchQuery] = useState("");
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const navbarRef = useRef(null);
	const navbarContainerRef = useRef(null);

	const handleIsOpen = useCallback(() => {
		setIsOpen((prev) => !prev);
		if (navbarRef.current) {
			const collapseInstance = new window.bootstrap.Collapse(
				navbarRef.current,
				{
					toggle: false,
				}
			);
			isOpen ? collapseInstance.hide() : collapseInstance.show();
		}
	}, [isOpen]);

	const handleLinkClick = () => {
		if (window.innerWidth < 992) {
			if (navbarRef.current) {
				const collapseInstance = new window.bootstrap.Collapse(
					navbarRef.current
				);
				collapseInstance.hide();
			}
		}
	};

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (
				navbarContainerRef.current &&
				!navbarContainerRef.current.contains(event.target) &&
				isOpen
			) {
				handleIsOpen();
			}
		};
		document.addEventListener("click", handleOutsideClick);
		return () => {
			document.removeEventListener("click", handleOutsideClick);
		};
	}, [isOpen, handleIsOpen]);

	return (
		<nav
			className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
			ref={navbarContainerRef}
		>
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					{/*<img src={logo} alt="logo" height="40px" /> TEN News*/}
					NewsIn10
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
					onClick={handleIsOpen}
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
					ref={navbarRef}
				>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/"
								onClick={handleLinkClick}
							>
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/nation"
								onClick={handleLinkClick}
							>
								Nation
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/world"
								onClick={handleLinkClick}
							>
								World
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/business"
								onClick={handleLinkClick}
							>
								Business
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/sports"
								onClick={handleLinkClick}
							>
								Sports
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/entertainment"
								onClick={handleLinkClick}
							>
								Entertainment
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/health"
								onClick={handleLinkClick}
							>
								Health
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/science"
								onClick={handleLinkClick}
							>
								Science
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								to="/technology"
								onClick={handleLinkClick}
							>
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
							handleLinkClick();
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
