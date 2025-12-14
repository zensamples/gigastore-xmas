export type ServiceCardProps = {
	icon: string,
	title: string,
	message: string
}

export function ServiceCard({ icon = "gift", title, message }: ServiceCardProps) {
	return <article class="border rounded-4 p-4 text-center">
		<div class="d-flex justify-content-center mb-3">
			<div class="rounded-circle bg-warning-subtle d-flex d-flex justify-content-center align-items-center" style="width: 70px; height: 70px;">
				{/* <img src={`lib/bootstrap-icons/${icon}.svg`} alt={title} style="width: 40px; height: 40px;" /> */}
				<i class={`bi bi-${icon}`} style="font-size: 2rem;"></i>
			</div>
		</div>
		<div>
			<strong>{title}</strong>
			<p>{message}</p>
		</div>
	</article>
}