export const getDominance = (data) => {
	let dominant = data[0], totPrice = 0, i = 0, current = {}
	while (data[i])
	{
		current = data[i++]
		if (parseInt(current.priceUsd) > parseInt(dominant.priceUsd))
			dominant = current
		totPrice +=parseInt(current.priceUsd)
	}
	const percentDominance = parseInt(dominant.priceUsd) / totPrice * 100
	dominant["dominance"] = percentDominance.toFixed(2) + "%"
	return (dominant)
}