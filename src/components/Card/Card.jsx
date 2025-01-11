import { useEffect, useState } from "react";
import "./Card.scss"

export default function Card({title, body, ...spe}) {
	return (
		<div className="card-container">
			<p className="card-title">{title}</p>
			<h4>{body}</h4>
			<div className="stat-container">
				{spe.percentDiff}
			</div>
		</div>
	)
}