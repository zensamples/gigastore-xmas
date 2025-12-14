import { IconStars } from "../icons/IconStars";
import { Reassurance } from "./Reassurance";

export function XMasBanner() {
	return <div class="row gx-5">
		<div className="col-md-6 mt-5">
			<p class="badge bg-danger p-3 rounded-pill mb-5 text-uppercase">
				<span class="text-warning"><IconStars size={20} /></span>
				<span class="ms-2">Collection Noël 2025</span>
			</p>
			<h5>Des cadeaux magiques pour un Noël inoubliable</h5>
			<p class="mb-5">Découvrez notre sélection exceptionnelle de cadeaux de Noël pour tous vos proches.
				Des idées uniques, des emballages soignés et une livraison rapide pour que la magie de Noël opère !</p>

			<a class="btn btn-danger me-4">Découvrez nos produits</a>
			<a class="btn btn-outline-danger">Parcourez les catégories</a>
			<Reassurance />
		</div>

		<div className="col-md-6">
			<img class="img-fluid rounded-4 shadow-lg" src="images/noel/noel-deco.jpg" alt="" />
		</div>

	</div>
}