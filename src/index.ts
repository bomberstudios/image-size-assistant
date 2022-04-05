import CoreAssistant from '@sketch-hq/sketch-core-assistant'
import { AssistantPackage } from '@sketch-hq/sketch-assistant-types'

const assistant: AssistantPackage = [
  CoreAssistant,
  async () => {
    return {
      name: 'image-size-assistant',
      rules: [],
      config: {
        rules: {
          '@sketch-hq/sketch-core-assistant/images-no-outsized': { active: true, maxRatio: 3 },
        },
      },
    }
  },
]

export default assistant
