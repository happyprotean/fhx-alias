
import alias from './index'
import { describe, it, expect} from 'vitest'

describe('alias', () => {
  describe('options is object', () => {
    it('options match successfully', () => {
      const aliasObj: any = alias({
        entries: {
          '@': './utils',
          'utils': './utils'
        }
      })
      expect(aliasObj.resolveId('@/index')).toBe('./utils/index.js')
      expect(aliasObj.resolveId('utils/index')).toBe('./utils/index.js')
    })
  
    it('options match fail', () => {
      const aliasObj: any = alias({
        entries: {
          '@': './utils'
        }
      })
      expect(aliasObj.resolveId('!/index')).toBe('!/index')
    })
  })

  describe('options is Array', () => {
    it('options match successfully', () => {
      const aliasObj: any = alias({
        entries: [
          { find: '@', replacement: './utils' },
          { find: /utils/, replacement: './utils' }
        ] 
      })
      expect(aliasObj.resolveId('@/index')).toBe('./utils/index.js')
      expect(aliasObj.resolveId('utils/index')).toBe('./utils/index.js')
    })
  
    it('options match fail', () => {
      const aliasObj: any = alias({
        entries: [
          { find: '@', replacement: './utils' },
        ] 
      })
      expect(aliasObj.resolveId('!/index')).toBe('!/index')
    })
  })
})