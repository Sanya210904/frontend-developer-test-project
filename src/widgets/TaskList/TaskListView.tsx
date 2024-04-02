import React, { useCallback } from 'react'
import { FlatList } from 'react-native'

import { Task } from 'app/types/Task'

import { Header } from 'app/ds'
import { TaskItemView } from './TaskItemView'

import styles from './TaskListView.styles'

export const TaskListView: React.FC<{
  tasks: Task[]
  listHeaderTitle: string,
}> = ({ tasks, listHeaderTitle }) => {
  const renderItem = useCallback(({ item }: { item: Task }) => <TaskItemView task={item} />, [])

  return (
    <FlatList
      data={tasks}
      ListHeaderComponent={<Header mb={12}>{listHeaderTitle}</Header>}
      renderItem={renderItem}
      style={styles.list}
    />
  )
}
