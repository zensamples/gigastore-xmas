import { Card } from "./Card";
import { produits } from "../data/ProductList"
import { IconStar } from "../icons/IconStar";

export function MonthSelection() {
	return <div class="text-center mt-5">
		<h2>Produits phares</h2>
		<p>Une sélection de nos meilleurs cadeaux de Noël</p>


		<div class="row row-cols-1 row-cols-md-3 g-5">
			{produits.map((p, ix) => <div class="col" key={ix}>
				<Card image={p.image} title={p.title} overlayInfo={p.overlayInfo}>
					<div class="my-2"><span class="text-warning"><IconStar /></span> {p.rating} <span class="text-secondary">&mdash; {p.voters} avis</span></div>
					<div class="my-2">
						<span class="fw-bold fs-5">{p.price} €</span>
						{p.previousPrice && <span class="ms-4"><del>{p.previousPrice}</del></span>}
					</div>
				</Card>
			</div>)}
		</div>

		<a class="btn btn-outline-danger mt-5">Voir tous les produits</a>
	</div>
}