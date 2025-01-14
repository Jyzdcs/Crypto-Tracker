export const handleSearch = async (filter) => {
	const res = await fetch("https://api.coincap.io/v2/assets")
	const jsonData = await res.json()
	const data = jsonData.data
	const filterData = data.filter((el) => el.id.includes(filter.target.value))
	return filterData
}