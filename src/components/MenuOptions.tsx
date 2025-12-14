export type MenuOption = {
	label: string,
	url: string,
	active?: boolean
}

export type MenuOptionsProps = {
	options: MenuOption[]
}

export function MenuOptions({ options }: MenuOptionsProps) {
	return <>
		{
			options.map((opt, ix) => <li key={ix} class="nav-item">
				{opt.active && <a class="nav-link" aria-current="page" href={opt.url}>{opt.label}</a> }
				{!opt.active && <a class="nav-link" href={opt.url}>{opt.label}</a> }
			</li>
			)}
	</>
}