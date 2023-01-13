import { Task } from '@prisma/client'
import { useDeleteTask, useUpdateTask } from 'queries'
import { FaTrash } from 'react-icons/fa'
import { MdCheck } from 'react-icons/md'
import styled from 'styled-components'

const Card = styled.div`
  display: grid;
  font-size: x-large;
  grid-template-columns: min-content auto;
  gap: 0.75rem;
  align-items: center;
`
const Text = styled.h2`
  margin: 0;
  flex-grow: 1;
  font-size: inherit;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`
const DoneButton = styled.button<{ isDone: boolean }>`
  background: ${props =>
    props.isDone ? 'var(--color-success)' : 'transparent'};
  border-color: ${props =>
    props.isDone ? 'var(--color-success)' : 'var(--color-black-300)'};
  border-style: solid;
  border-width: 2px;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  font-size: inherit;
  display: flex;
  align-items: center;

  svg {
    opacity: ${props => (props.isDone ? '1' : '0')};
  }

  &:not(:disabled):hover {
    background: var(--color-success);
    cursor: pointer;

    svg {
      opacity: 1;
    }
  }

  &:disabled svg {
    color: var(--color-black-400);
  }
`

const TrashButton = styled.button<{}>`
  flex: 1;
`

const Wrapper = styled.div`
  display: flex;
`

const TaskItem: React.FC<Task> = ({ id, isDone, text, isTrash }) => {
  const { mutateAsync: updateTask } = useUpdateTask({ id })
  const { mutateAsync: deleteTask } = useDeleteTask({ id })

  return (
    <Card>
      <DoneButton
        isDone={!!isDone}
        disabled={!!isDone}
        onClick={() => updateTask({ isDone: true })}
      >
        <MdCheck />
      </DoneButton>
      <Wrapper>
        <Text>{text}</Text>
        {!isTrash && <FaTrash style={{cursor: 'pointer'}} onClick={() => deleteTask({})} />}
      </Wrapper>
    </Card>
  )
}

export default TaskItem
