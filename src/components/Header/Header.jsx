import "./Header.scss"
import { useQuery } from "@tanstack/react-query";
import { fetchDataCrypto } from "../tools/fetchDataCrypto";
import { useEffect, useRef, useState } from "react";

export default function Header() {
	return (
		<div className="title-container">
			<h1 className="title-header">Crypto Dashboard</h1>
		</div>
	)
}