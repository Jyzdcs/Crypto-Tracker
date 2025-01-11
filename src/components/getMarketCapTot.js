export const getMarketCapTot = (data) => {
	let i = 0, brutTot = 0
	while (data[i])
		brutTot += parseInt(data[i++].marketCapUsd)
	let [left, right, ...rest] = brutTot.toLocaleString().split(',')
	let capTot = {"str": left.concat(".").concat(right)}
	capTot["num"] = brutTot
	return (capTot)
}
