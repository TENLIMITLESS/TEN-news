import React from "react";

export default function NewsItem(props) {
	let { title, desc, imgUrl, newsUrl, source, date } = props;
	return (
		<div>
			<div
				className="card mx-auto"
				style={{ width: "18rem", height: "26rem" }}
			>
				<img
					src={imgUrl}
					className="card-img-top"
					alt="img"
					style={{ display: "block", height: "12rem" }}
				/>
				<div className="card-body">
					<h5
						className="card-title"
						style={{ height: "3rem", overflow: "hidden" }}
					>
						{title}
					</h5>
					<p
						className="card-text my-1"
						style={{ height: "4.5rem", overflow: "hidden" }}
					>
						{desc}
					</p>
					<p className="card-text my-1">
						<small className="text-muted">
							By {source} <br /> on{" "}
							{new Date(date).toLocaleString("en-IN", {
								timeZone: "Asia/Kolkata",
							})}
						</small>
					</p>
					<a
						href={newsUrl}
						target="_blank"
						rel="noreferrer"
						className="btn btn-primary btn-sm"
					>
						Read more
					</a>
				</div>
			</div>
		</div>
	);
}
