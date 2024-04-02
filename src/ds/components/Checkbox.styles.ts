import { StyleSheet } from 'react-native'

import colors from 'app/theme/colors'

export default StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: colors.card.border,
    borderRadius: 10
  },
  active: {
    backgroundColor: colors.primary.main
  },
  disabled: {}
})
