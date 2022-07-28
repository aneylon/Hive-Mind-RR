import { stringPermutations } from './permutation'

it('returns the correct number of permutations', () => {
	expect(stringPermutations('abc').length).toEqual(6)
})

it('returns the correct output', () => {
	expect(stringPermutations('ab')).toEqual(['ab', 'ba'])
})
