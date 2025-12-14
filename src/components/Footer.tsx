import { IconGeoAltFill } from "../icons/IconGeoAltFill";
import { IconGift } from "../icons/IconGift";
import { IconEnvelope } from "../icons/IconEnvelope";
import { IconTelephone } from "../icons/IconTelephone";
import { FooterAddress } from "./FooterAddress";
import { FooterGroup } from "./FooterGroup";

export function Footer() {
	const gigaHeader = <>
		<span class="text-danger"><IconGift size={26} /></span>
		<span class="ms-2">GIGASTORE NOËL</span>
	</>

	const addr = <>123 piste des rennes<br />
		Saint Roustan &mdash; France
	</>

	return <footer class="bg-dark text-white">
		<div className="row p-5 fs-6 gx-5">
			<FooterGroup title={gigaHeader}>
				<p>Votre destination pour trouver les cadeaux de Noël parfaits. Qualité, originalité et magie garanties !</p>
			</FooterGroup>

			<FooterGroup title="Liens">
				<ul class="list-unstyled stack gap-3">
					<li class="mb-2">Accueil</li>
					<li class="mb-2">Catégories</li>
					<li class="mb-2">Offres du moment</li>
					<li class="mb-2">À propos</li>
					<li class="mb-2">Contact</li>
				</ul>
			</FooterGroup>

			<FooterGroup title="Contact">
				<FooterAddress icon={<IconGeoAltFill size={20} />} text={addr} />
				<FooterAddress icon={<IconTelephone size={20} />} text="+33 1 23 45 67 89" />
				<FooterAddress icon={<IconEnvelope size={20} />} text="contact@gigastore.com" />
			</FooterGroup>

			<FooterGroup title="Newsletter">
				<p>Recevez nos offres exclusives et nos nouveautés</p>
				<form class="d-flex">
					<input class="form-control me-2" type="search" placeholder="Votre email" aria-label="Newsletter" />
					<button class="btn btn-danger" type="submit">OK</button>
				</form>
			</FooterGroup>
		</div>
	</footer >
}