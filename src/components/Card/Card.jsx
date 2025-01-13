import { useEffect, useState } from "react";
import "./Card.scss"

export default function Card({title, symbol, price, logo, percent, cap}) {
	return (
		<div className="card">
			<div className="head-card-container">
				<h6 className="crypto-logo">{logo}</h6>
				<div className="names-container">
					<h2 className="crypto-title">{title}</h2>
					<p className="crypto-symbol">{symbol}</p>
				</div>
			</div>
			<h3 className="price">${price}</h3>
			<p className="percent">{percent}</p>
			<p className="cap">Cap. ${cap}</p>
		</div>
	)
}