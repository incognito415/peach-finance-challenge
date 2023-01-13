import TaskItem from 'components/TaskItem'
import NoTasks from 'components/NoTasks'
import styled from 'styled-components'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { useGetDeletedTasks, useEmptyTrash } from 'queries'

const EmptyButton = styled.button<{}>`
  cursor: pointer;
  flex: 1;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: small;
  margin-left: 1rem;
  padding: 0.5rem;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const OverlayBackground = styled.div<{ onClick: any }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.5);
  z-index: 100;
`

const Container = styled.div`
  background: #fff;
  border-radius: 5px;
  position: relative;
  z-index: 101;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  width: 400px;
  padding: 1rem;

  h2 span {
    font-weight: bold;
  }
`

const Trash: React.FC<{ showTrash?: boolean; showCount?: boolean; onClickOverlay?: () => void }> = ({showTrash = false, showCount = false, onClickOverlay}) => {
  const { mutateAsync: emptyTrash } = useEmptyTrash()
  const { data: deletedTasks } = useGetDeletedTasks()

  useEffect(() => {
  }, [deletedTasks, emptyTrash, showTrash])

  return showTrash ? (
    <Overlay>
      <OverlayBackground onClick={onClickOverlay} />
      <Container>
        <h2>
          <span>Trash</span>
          {deletedTasks && deletedTasks.length > 0 && <EmptyButton onClick={() => emptyTrash({})}>Empty</EmptyButton>}
        </h2>
        <div>
          {deletedTasks?.length && deletedTasks?.length > 0 ? (
            deletedTasks.map(task => <TaskItem key={task.id} {...task} />)
          ) : (
            <NoTasks emoji='🗑️' text="There's nothing here..." />
          )}
        </div>
      </Container>
    </Overlay>
  ) : showCount ? (
    <span>({deletedTasks?.length})</span>
  ) : null
}

export default Trash