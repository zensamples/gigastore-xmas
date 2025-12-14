import type { JSX } from "preact/jsx-runtime";

export function FooterGroupHeader({ title }: { title: string | JSX.Element }) {
	if (typeof title == "string") {
		title = title.toLocaleUpperCase()
	}
	return <h6 class="fw-bold" style="height: 1.8em;">
		{title}
	</h6>
}