import "./home.scss"
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";

export default function Home() {
	return (
		<div className="main-container">
			<Header />
			<Search />
		</div>
	)
}