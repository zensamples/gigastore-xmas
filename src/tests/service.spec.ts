import { test, expect } from 'vitest'
import type { Service } from '../models/Service'

test('Service is valid', () => {
	const p: Service = {
		icon: "service",
		title: "Dummy service",
		message: "This is really dummy"
	}
	expect(p.title).toBe("Dummy service")
	expect(p.icon).toBe('service')
	expect(p.message).toBe("This is really dummy")
})