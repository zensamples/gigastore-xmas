import type { JSX } from "preact/jsx-runtime"

export type CardOverlayProps = {
	text: string | JSX.Element
}

export function CardOverlay({text}: CardOverlayProps) {
	return <div class="card-img-overlay text-start">
		<span class="badge bg-danger fw-normal shadow">{text}</span>
	</div>
}