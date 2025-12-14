import type { ComponentChildren } from "preact"

const defaultClasses = ["py-5"]
//const defaultClasses =  ["py-5", "border border-2 border-danger"]

export type ContainerProps = {
	additionalClasses?: string[]
	children: ComponentChildren
}

export function Container({ additionalClasses = defaultClasses, children }: ContainerProps) {
	const containerClass = "container " + additionalClasses.join(' ')
	return <div class={containerClass}>
		{children}
	</div>
}

export function ContainerFluid({ additionalClasses = defaultClasses, children }: ContainerProps) {
	const containerClass = "container-fluid " + additionalClasses.join(' ')
	return <div class={containerClass}>
		{children}
	</div>
}