import { useQuery } from "@tanstack/react-query";
import { fetchDataCrypto } from "../tools/fetchDataCrypto";
import { useRef, useState } from "react";
import Card from "../Card/Card"
import "./Summar.scss"
import { getMarketCap } from "../tools/getMarketCap";
import { getPercentDiff } from "../tools/getPercentDiff";

export default function Summar() {
	const previous = useRef()
	let percent = {}
	const { isPending, isSuccess, error, data: newData } = useQuery({
		queryKey: ['repoData'],
		queryFn: async () => fetchDataCrypto(),
		staleTime: 3000,
	})
	if (isSuccess)
	{
		// if (previous.current)
		previous.current = newData
		getMarketCap(newData[0].marketCapUsd)
	}
	return (
		<>
		{isPending ? <div>LOADING ...</div> :
			<div className="card-container">
				<Card
					title={newData[0].name}
					symbol={newData[0].symbol}
					price={newData[0].priceUsd.substr(0, String(Number(newData[0].priceUsd).toFixed(0)).length)}
					logo={newData[0].symbol}
					percent="1"
					cap={getMarketCap(newData[0].marketCapUsd)}
				/>
				<Card
					title={newData[4].name}
					symbol={newData[4].symbol}
					price={newData[4].priceUsd.substr(0, String(Number(newData[4].priceUsd).toFixed(0)).length)}
					logo={newData[4].symbol}
					percent="1"
					cap={newData[4].marketCapUsd}
				/>
				<Card
					title={newData[2].name}
					symbol={newData[2].symbol}
					price={newData[2].priceUsd.substr(0, String(Number(newData[2].priceUsd).toFixed(0)).length)}
					logo={newData[2].symbol}
					percent="1"
					cap={newData[2].marketCapUsd}
				/>
			</div>
		}
		</>
	)
}