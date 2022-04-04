import { resolve } from 'path'
import { testAssistant } from '@sketch-hq/sketch-assistant-utils'

import Assistant from '..'

test('test assistant', async () => {
  const { violations, ruleErrors } = await testAssistant(
    resolve(__dirname, './large-images.sketch'),
    Assistant,
  )
  expect(violations).toHaveLength(4)
  expect(violations[0].message).toBe(
    "There's an oversized image in this layer. Images can't be more than 3x bigger than the layer frame's width or height.",
  )
  expect(ruleErrors).toHaveLength(0)
})
