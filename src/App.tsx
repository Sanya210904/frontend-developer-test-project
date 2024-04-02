import{ useCallback, useState, useEffect, useMemo } from 'react'
import { View } from 'react-native'

import { Project } from 'app/types/Project'
import { ProjectsListView } from 'app/widgets/ProjectsList'
import { PROJECTS } from 'app/mock/data'

import styles from './App.styles'
import { TaskListView } from './widgets/TaskList'
import { Task } from './types/Task'

function App() {
  const [currentProject, setCurrentProject] = useState<Project | null>(null)

  const onProjectPress = useCallback((project: Project) => {
    setCurrentProject(prevProject => (prevProject === project ? null : project))
  }, [])

  const filteredTasks = useMemo(() => {
    if (!currentProject) {
      return PROJECTS.reduce((taskArray, project) => {
        taskArray.push(...project.tasks)
        return taskArray
      }, [] as Task[])
    }

    return currentProject.tasks
  }, [currentProject])

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <ProjectsListView projects={PROJECTS} onProjectPress={onProjectPress} />
      </View>
      <View style={styles.column}>
        <TaskListView
          listHeaderTitle={
            currentProject?.name ? `Tasks for "${currentProject.name}"` : 'All tasks'
          }
          tasks={filteredTasks}
        />
      </View>
    </View>
  )
}

export default App
