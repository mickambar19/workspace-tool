import { FaTimes } from 'react-icons/fa'
import Card from '../../components/Card'
import {
  TagStyled,
  TextStyled,
  DeleteButtonStyled,
  ButtonStyled
} from './styled'

const TASK_STATUSES = ['ACTIVE', 'DONE', 'DELETED']

export type TaskStatus = typeof TASK_STATUSES[number]

type Task = {
  id: number
  priority: string
  text: string
  status: TaskStatus
}

const TaskCard = ({ id, priority, text, status, onDelete, onDone }: Task) => {
  return (
    <Card>
      {/* {id} */}
      <DeleteButtonStyled onClick={() => onDelete({ id, status })}>
        <FaTimes />
      </DeleteButtonStyled>
      <TagStyled>{priority}</TagStyled>
      <TextStyled>{text}</TextStyled>
      <ButtonStyled onClick={() => onDone({ id, status })}>
        Mark as Done
      </ButtonStyled>
    </Card>
  )
}

const task = {
  id: 12,
  priority: 'sadf',
  text: 'sadf',
  status: 'DONE'
}
TaskCard(task)

export default TaskCard
