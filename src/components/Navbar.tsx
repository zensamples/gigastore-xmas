import { IconCart } from "../icons/IconCart"
import { IconGift } from "../icons/IconGift"
import { IconSearch } from "../icons/IconSearch"
import { MenuOptions } from "./MenuOptions"

const menuOne = [
	{
		label: "Accueil",
		url: "/",
		active: true
	},
	{
		label: "Catégories",
		url: "#"
	},
	{
		label: "Offres du moment",
		url: "#"
	},
]

const menuInfo = [
	{
		label: "À propos",
		url: "/about"
	},
	{
		label: "Contact",
		url: "/contact"
	}
]

export function Navbar() {
	return <nav class="navbar navbar-expand-lg bg-white shadow-sm sticky-top mb-5" aria-label="Menu principal">
		<div class="container">
			<a class="navbar-brand" href="#">
				<div class="text-danger d-flex">
					<IconGift size={28} />
					<span class="ms-2">Gigastore Noël</span>
				</div>
			</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<MenuOptions options={menuOne} />
				</ul>
				<ul class="navbar-nav">
					<MenuOptions options={menuInfo} />
					<li class="nav-item">
						<IconCart size={20} />
					</li>
					<li class="nav-item">
						<IconSearch size={20} />
					</li>
				</ul>
			</div>
		</div>
	</nav>
}