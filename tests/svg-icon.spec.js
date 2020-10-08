import { describe, beforeEach, it, expect } from '@jest/globals'
import { render } from '@testing-library/svelte'
import SvgIcon from './../lib/svg-icon.svelte'

const path = 'M 10 10 H 90 V 90 H 10 L 10 10'

describe('Svelte SVG icon', () => {
	let component

	it("accepts a 'type' property", () => {
		const { container } = render(SvgIcon, { path, type: 'mdi' })
		const component = container.querySelector('svg')

		expect(component.getAttribute('height')).toBe('24')
		expect(component.getAttribute('width')).toBe('24')
		expect(component.getAttribute('viewBox')).toBe('0 0 24 24')
	})

	it('renders an svg with path', () => {
		const { container } = render(SvgIcon, { path })
		const component = container.querySelector('path')

		expect(component.getAttribute('d')).toBe(path)
	})

	it("accepts a 'size' property", () => {
		const { container } = render(SvgIcon, { path, size: 2 })
		const component = container.querySelector('svg')

		expect(component.getAttribute('height')).toBe('2')
		expect(component.getAttribute('width')).toBe('2')
	})

	it("accepts a 'viewbox' property", () => {
		const { container } = render(SvgIcon, { path, viewbox: '0 0 30 30' })
		const component = container.querySelector('svg')

		expect(component.getAttribute('viewBox')).toBe('0 0 30 30')
	})

	describe("'flip' property", () => {
		it('defaults correctly', () => {
			const { container } = render(SvgIcon, { path, flip: 'none' })
			let component = container.querySelector('svg')

			expect(getComputedStyle(component).getPropertyValue('--sx')).toBe('1')
			expect(getComputedStyle(component).getPropertyValue('--sy')).toBe('1')
		})

		it('flips horizontally', () => {
			const { container } = render(SvgIcon, { path, flip: 'horizontal' })
			let component = container.querySelector('svg')

			expect(getComputedStyle(component).getPropertyValue('--sx')).toBe('-1')
			expect(getComputedStyle(component).getPropertyValue('--sy')).toBe('1')
		})

		it('flips vertically', () => {
			const { container } = render(SvgIcon, { path, flip: 'vertical' })
			let component = container.querySelector('svg')

			expect(getComputedStyle(component).getPropertyValue('--sx')).toBe('1')
			expect(getComputedStyle(component).getPropertyValue('--sy')).toBe('-1')
		})

		it('flips horizontally and vertically at the same time', () => {
			const { container } = render(SvgIcon, { path, flip: 'both' })
			let component = container.querySelector('svg')

			expect(getComputedStyle(component).getPropertyValue('--sx')).toBe('-1')
			expect(getComputedStyle(component).getPropertyValue('--sy')).toBe('-1')
		})
	})

	it("accepts a 'rotate' property", () => {
		const { container } = render(SvgIcon, { path, rotate: 90 })
		const component = container.querySelector('svg')

		expect(getComputedStyle(component).getPropertyValue('--r')).toBe('90deg')
	})
})
