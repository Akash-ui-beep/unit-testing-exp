import { describe, it, expect } from 'vitest'
import { validateForm } from './form.js'

describe('Form Test', () => {
    it('invalid case', () => {
        expect(validateForm("ab")).toBe("Invalid")
    })

    it('valid case', () => {
        expect(validateForm("Akash")).toBe("Valid")
    })
})