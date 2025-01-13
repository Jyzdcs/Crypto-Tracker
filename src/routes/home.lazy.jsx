import { useState } from "react";
import "./home.scss"
import Header from "../components/Header/Header";
import Summar from "../components/Summar/Summar"
async function getBtcTickers() {
	const res = await fetch("https://api.coincap.io/v2/assets/bitcoin")
	const data = await res.json()
	return data.data
}

export default function Home() {
	return (
		<div className="main-container">
			<Header />
			<Summar />
		</div>
	)
}