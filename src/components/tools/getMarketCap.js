export const getMarketCap = (crypto) => {
	let grandeur = 0
	if (18 >= String(Number(crypto).toFixed(0)).length && String(Number(crypto).toFixed(0)).length >= 16)
		grandeur = 'T'
	if (15 >= String(Number(crypto).toFixed(0)).length && String(Number(crypto).toFixed(0)).length >= 13)
		grandeur = 'B'
	if (12 >= String(Number(crypto).toFixed(0)).length && String(Number(crypto).toFixed(0)).length >= 10)
		grandeur = 'Md'
	if (9 >= String(Number(crypto).toFixed(0)).length && String(Number(crypto).toFixed(0)).length >= 7)
		grandeur = 'M'
	let capPrice = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
		crypto,
	)
	capPrice = capPrice.substring(0, 3) + grandeur
	return capPrice
}