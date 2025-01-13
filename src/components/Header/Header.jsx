import "./Header.scss"

export default function Header() {
	return (
		<div className="title-container">
			<h1 className="title-header">Crypto Dashboard</h1>
			<div className="bar-container">
				<img src="/assets/header/3641364.png" alt="logo" className="search-logo" />
				<input type="text" placeholder="Search..." className="search-bar"/>
			</div>
		</div>
	)
}