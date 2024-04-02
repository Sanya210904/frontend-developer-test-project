import React from 'react'
import { View } from 'react-native'

import styles from './Checkbox.styles'

export const Checkbox: React.FC<{
  isPressed: boolean
}> = ({ isPressed }) => {
  return <View style={[styles.checkbox, isPressed ? styles.active : styles.disabled]}></View>
}
