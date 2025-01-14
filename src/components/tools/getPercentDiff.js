import { getMarketCapTot } from "./getMarketCapTot"

export const getPercentDiff = (old, curr) => {
	let diffObj
	if (!old)
	{
		console.log("Old has no value !")
		return 0
	}
	diffObj = {"percentDiff": Number((curr - old) / old).toFixed(5)}
	if (Number(curr) > Number(old))
		diffObj["symbol"] = "/assets/cards/arrow_up.png"
	else
		diffObj["symbol"] = "/assets/cards/arrow_low.png"
	diffObj.percentDiff = String(diffObj.percentDiff)
	return (diffObj)
}

// old : 92417
// new : 92417

// api : 92417
