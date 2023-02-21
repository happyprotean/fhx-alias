
import alias from './index'
import { describe, it, expect} from 'vitest'

describe('options is object', () => {
  it('options match successfully', () => {
    const aliasObj: any = alias({
      entries: {
        '@': './utils'
      }
    })
    expect(aliasObj.resolveId('@/index')).toBe('./utils/index.js')
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