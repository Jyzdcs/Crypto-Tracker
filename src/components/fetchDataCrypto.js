export async function fetchDataCrypto() {
	const res = await fetch("https://api.coincap.io/v2/assets");
	const data = await res.json();
	return data.data;
}