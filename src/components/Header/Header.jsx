import "./Header.scss"

export default function Header() {
	return (
		<div className="nav-bar">
			<p className="exchange-txt">Exchange</p>
			<div className="icon-area">
				<img src="/assets/header/3641364.png" alt="search" className="search-icon"/>
				<img src="/assets/header/menu.png" alt="menu-icon" className="menu-icon"/>
			</div>
		</div>
	)
}