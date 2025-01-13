import { getMarketCapTot } from "./getMarketCapTot"

export const getPercentDiff = (old, curr) => {
	let diffObj
	if (!old)
	{
		console.log("Old has no value !")
		return 0
	}
	diffObj = {"percentDiff": (curr - old) / old * 100}
	if (diffObj.percentDiff > 1)
		diffObj["symbol"] = "/assets/cards/arrow_up.png"
	else
		diffObj["symbol"] = "/assets/cards/arrow_low.png"
	return (diffObj)
}
