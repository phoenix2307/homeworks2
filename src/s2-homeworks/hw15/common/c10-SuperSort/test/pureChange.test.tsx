import React from 'react'
import {pureChange} from '../SuperSort'

test('sort ""', () => {
    const newSort = pureChange('', '1a', '0a')
    expect(newSort).toBe('1a')
})
test('sort "1a"', () => {
    const newSort = pureChange('1a', '1a', '0a')
    expect(newSort).toBe('0a')
})
test('sort "0a"', () => {
    const newSort = pureChange('0a', '1a', '0a')
    expect(newSort).toBe('')
})
test('sort "1b"', () => {
    const newSort = pureChange('1b', '1a', '0a')
    expect(newSort).toBe('1a')
})
test('pureChange cycle', () => {
    const value = 'tech'
    const down = '1tech'
    const up = '0tech'

    expect(pureChange('', down, up)).toBe(down)
    expect(pureChange(down, down, up)).toBe(up)
    expect(pureChange(up, down, up)).toBe('')
    expect(pureChange('something-else', down, up)).toBe(down)
})