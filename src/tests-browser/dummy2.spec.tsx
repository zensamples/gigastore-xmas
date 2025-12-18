import { describe, expect, it } from "vitest"
import { render } from '@testing-library/preact'
import { Discount } from "../components/Discount"
import { XMasBanner } from "../components/XMasBanner"

describe('Discount', () => {
	it('contains NOEL2025', async () => {
		//const container = document.createElement('div')
		//document.body.appendChild(container)
		const { getByText } = render(<Discount />)
		expect(getByText("NOEL2025")).toBeDefined()
	})
})

describe('XMas Banner', () => {
	it('Image alt text contains Merry XMas', async () => {
		const { getByAltText } = render(<XMasBanner />)
		expect(getByAltText(/merry xmas/i)).toBeDefined()

	})
})