import { getMarketCapTot } from "./getMarketCapTot"

export const getPercentDiff = (old, curr) => {
	let diffObj
	if (!old[0])
		return 0
	console.log(old)
	console.log(curr)
	diffObj = {"percentDiff": (getMarketCapTot(curr).num - getMarketCapTot(old).num) / old * 100}
	console.log(diffObj)
	if (diffObj.percentDiff > 1)
		diffObj["symbol"] = "/assets/cards/arrow_up.png"
	else
		diffObj["symbol"] = "/assets/cards/arrow_low.png"
	return (diffObj)
}
