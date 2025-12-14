import { services } from "../data/ServiceList"
import { ServiceCard } from "./ServiceCard"


export function Services() {
	return <div class="row text-center">
		<header class="mb-5">
			<h2>Pourquoi choisir Gigastore Noël ?</h2>
			<p>
				Depuis plus de 10 ans, nous rendons vos fêtes de fin d'année encore plus magiques avec nos cadeaux exceptionnels
			</p>
		</header>

		{services.map((s, ix) => <div class="col-md-3 mb-3">
			<ServiceCard key={ix} icon={s.icon} title={s.title} message={s.message} />
		</div>)}
	</div>
}