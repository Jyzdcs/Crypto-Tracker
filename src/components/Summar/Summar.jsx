import { useQuery } from "@tanstack/react-query";
import { fetchDataCrypto } from "../fetchDataCrypto";
import { useState } from "react";
import Card from "../Card/Card"
import "./Summar.scss"
import { getDominance } from "../getDominance";
import { getMarketCapTot } from "../getMarketCapTot";
import { getPercentDiff } from "../getPercentDiff";

export default function Summar() {
	let marketCapTot = 0
	const [oldData, setOldData] = useState([])
	const { isPending, error, data } = useQuery({
		queryKey: ['repoData'],
		queryFn: async () => {
			const res = await fetch("https://api.coincap.io/v2/assets");
			const dataJson = await res.json();

			if (data)
				setOldData(data)
			return dataJson.data;
		},
		staleTime: 10000,
	})
	if (data)
	{
		getPercentDiff(oldData, data)
	}
	return (
		<>
		{isPending ? <div>LOADING ...</div> :
			<div className="summar-container">
				<div className="sentence-intro">
					<h3>Today's cryptocurrencies by Market Cap</h3>
					<p>The global crypto market cap is ...  increase over the last day.</p>
				</div>
				<div className="cards-container">
					<Card 
					title="Market Cap"
					body={
						`$${getMarketCapTot(data).str}T`
					}
					spe={getPercentDiff(oldData, data)}
					/>
					<Card 
					title="CMC100"
					body="$3.25T"
					/>
					<Card 
					title="Dominance"
					body={getDominance(data).dominance}
					spe={getDominance(data).symbol}
					/>
					<Card 
					title="Fear & Greed"
					body="$3.25T"
					/>
				</div>
			</div>
		}
		</>
	)
}