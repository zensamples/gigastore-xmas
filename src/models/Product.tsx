import type { JSX } from "preact/jsx-runtime"

export type Product = {
	title: string,
	rating: number,
	voters: number,
	price: number,
	previousPrice?: number,
	image: string,
	overlayInfo?: string | JSX.Element
}