import { test, expect } from 'vitest'
import type { Product } from '../models/Product'

test('Product is valid', () => {
	const p: Product = {
		title: "Dummy",
		price: 100,
		image: 'dummy.jpg',
		rating: 4.5,
		voters: 3
	}
	expect(p.title).toBe("Dummy")
})