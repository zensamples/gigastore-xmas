import type { ComponentChildren } from "preact"
import type { JSX } from "preact/jsx-runtime"
import { FooterGroupHeader } from "./FooterGroupHeader"

export type FooterGroupProps = {
	title: string | JSX.Element
	children: ComponentChildren
	columns?: string
}

export function FooterGroup({title, children, columns = "col-md-3"}: FooterGroupProps) {
	return <div class={columns}>
		<FooterGroupHeader title={title} />
		{children}
	</div>
}