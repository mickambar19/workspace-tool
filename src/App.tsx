import { createGlobalStyle } from 'styled-components'
import PendingTasksDashboard from './pages/PendingTasksDashboard/PendingTasksDashboard'
import { TasksProvider } from './providers/Tasks'
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Lato', sans-serif;
  }
`

const App = () => {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <TasksProvider>
        <PendingTasksDashboard></PendingTasksDashboard>
      </TasksProvider>
    </>
  )
}

export default App
