import React, { useState, useEffect } from 'react'

import { Task } from 'app/types/Task'

import { Text, Card, Pressable, View, Checkbox } from 'app/ds'

import styles from './TaskItemView.styles'

export const TaskItemView: React.FC<{
  task: Task
}> = ({ task }) => {
  const [isCompleted, setCompleted] = useState(() => (task?.completed ? true : false))

  useEffect(() => {
    setCompleted(task.completed || false)
  }, [task.completed])

  return (
    <Pressable onPress={() => setCompleted(!isCompleted)}>
      <Card my={4}>
        <View style={styles.taskContainer}>
          <View style={{ flex: 1 }}>
            <Text typeface='default/14' color='default' mb={2}>
              {task.name}
            </Text>
            <Text typeface='default/12' color='dimmed'>
              {task.description}
            </Text>
          </View>
          <Checkbox isPressed={isCompleted} />
        </View>
      </Card>
    </Pressable>
  )
}
