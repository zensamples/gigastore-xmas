import type { JSX } from "preact/jsx-runtime"

export type FooterAddressProps = {
	icon: string | JSX.Element,
	text: string | JSX.Element
}

export function FooterAddress({ icon, text }: FooterAddressProps) {
	return <div class="d-flex mb-3">
		<span class="text-danger me-2">{icon}</span>
		<span>{text}</span>
	</div>
}