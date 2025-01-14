import Card from "../Card/Card"
import "./Search.scss"
import { useQuery } from "@tanstack/react-query";
import { fetchDataCrypto } from "../tools/fetchDataCrypto";
import { useEffect, useState } from "react";
import { getMarketCap } from "../tools/getMarketCap";
import { getPercentDiff } from "../tools/getPercentDiff";
import { handleSearch } from "../tools/handleSearch";

export default function Search() {
	const [old, setOld] = useState([])
	const [data, setData] = useState([])
	let { isSuccess, isFetching, data: newData } = useQuery({
		queryKey: ['repoData'],
		queryFn: async () => fetchDataCrypto(),
		refetchInterval: 60000,
	})
	useEffect(() => {
		if (newData != data)
			setOld(data)
	}, [isFetching, isSuccess])
	useEffect(() => {
		setData(newData)
	}, [newData])
	return (
		<>
			<div className="bar-container">
				<input onChange={(e) => {
					handleSearch(e)
					.then((res) => setData(res))
				}} type="text" placeholder="Search..." className="search-bar"/>
			</div>
			<>
				{(!data || !old) ? (<div>LOADING ...</div>) : data.length === 0 ? <div className="no-result">Nous sommes désolés, nous n'avons trouvé aucune correspondance pour votre crypto-monnaie</div> : (
				<div className="card-container">
					{data.map((obj) => (
						<Card
						title={obj.name}
						symbol={obj.symbol}
						price={obj.priceUsd.substr(0, String(Number(obj.priceUsd).toFixed(0)).length)}
						logo={obj.symbol}
						percent={getPercentDiff(old.find(el => el.id === obj.id).priceUsd, obj.priceUsd)}
						cap={getMarketCap(obj.marketCapUsd)}
						key={obj.id}
						/>
					))}
				</div>
				)}
			</>
		</>
	)
}