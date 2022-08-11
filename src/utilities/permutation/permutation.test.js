import { stringPermutations } from './permutation'
describe('String Permutations', () => {
	it('returns errors for bad input', () => {
		let errorMessage = 'Please enter a valid string.'
		expect(stringPermutations()).toEqual(errorMessage)
		expect(stringPermutations(123)).toEqual(errorMessage)
	})
	it('returns the correct number of permutations', () => {
		expect(stringPermutations('a').length).toEqual(1)
		expect(stringPermutations('ab').length).toEqual(2)
		expect(stringPermutations('abc').length).toEqual(6)
	})

	it('returns the correct output', () => {
		expect(stringPermutations('a')).toEqual(['a'])
		expect(stringPermutations('ab')).toEqual(['ab', 'ba'])
		expect(stringPermutations('abc')).toEqual([
			'abc',
			'acb',
			'bac',
			'bca',
			'cab',
			'cba',
		])
	})
})
