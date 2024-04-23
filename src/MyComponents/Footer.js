import React from "react";

export default function Footer() {
	let footerStyle = {
		width: "100%",
		padding: "15px 0 1px 0",
		backgroundColor: "#212529",
		color: "white",
	};

	return (
		<footer style={footerStyle}>
			<p className="text-center">Copyright &copy; NewsMonkey.com</p>
		</footer>
	);
}
