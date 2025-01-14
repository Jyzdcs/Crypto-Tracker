import { useEffect, useState } from "react";
import "./Card.scss"

export default function Card({title, symbol, price, logo, percent, cap}) {
	return (
		<div className="card">
			<div className="head-card-container">
				<img className="crypto-logo" src={`/node_modules/cryptocurrency-icons/svg/icon/${logo}.svg`} alt="icon"/>
				<div className="names-container">
					<h2 className="crypto-title">{title}</h2>
					<p className="crypto-symbol">{symbol}</p>
				</div>
			</div>
			<h3 className="price">${price}</h3>
			<div className="evolution-container">
				<img src={percent.symbol} alt="evolution logo" className="evol-logo" />
				<p className="percent">{percent.percentDiff}%</p>
			</div>
			<p className="cap">Cap. ${cap}</p>
		</div>
	)
}