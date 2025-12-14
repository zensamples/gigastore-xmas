import type { ComponentChildren, JSX } from "preact"
import { IconCart } from "../icons/IconCart"
import { CardOverlay } from "./CardOverlay"

export type CardProps = {
	image: string,
	title: string,
	children: ComponentChildren,
	buttonLabel?: JSX.Element,
	buttonUrl?: string,
	overlayInfo?: string | JSX.Element

}

const DefaultButtonLabel = <>
	<span class="me-2"><IconCart size={20} /></span>
	Ajouter au panier
</>

export function Card({ image, title, children, buttonLabel = DefaultButtonLabel, buttonUrl = "#", overlayInfo }: CardProps) {
	return <article class="card">
		<img src={image} class="card-img-top" alt={title} />
		{overlayInfo && <CardOverlay text={overlayInfo} />}
		<section class="card-body text-start">
			<h5 class="card-title text-danger">{title}</h5>
			<div class="card-text">
				{children}
			</div>
			<div class="">
				<a href={buttonUrl} class="btn btn-danger w-100">{buttonLabel}</a>
			</div>
		</section>
	</article>
}