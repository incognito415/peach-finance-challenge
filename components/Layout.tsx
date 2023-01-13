import Link from 'next/link'
import React, { useState } from 'react'
import Trash from 'components/Trash'
import styled from 'styled-components'

const Header = styled.header`
  background: var(--color-secondary-100);
  padding: 8px 0;
  margin: 0 0 2rem;
`

const Brand = styled.h1`
  display: flex;
  color: var(--color-black-200);
  flex-grow: 1;
  font-size: x-large;
  margin: 0;

  a {
    background: var(--color-secondary-200);
    border-radius: 6px;
    padding: 0.5rem 1rem;

    &:focus {
      outline-color: var(--color-brand);
    }
  }
`

const TrashButton = styled.button`
  display: flex;
  color: var(--color-black-200);
  cursor: pointer;
  line-height: 31px;
  margin: 0;

  background: var(--color-secondary-200);
  border: 0;
  border-radius: 6px;
  padding: 0.5rem 1rem;

  &:focus {
    outline-color: var(--color-brand);
  }
  .label {
    margin-right: 0.25rem;
  }
`

const Main = styled.main`
  display: grid;
  gap: 2rem;
`

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`

const FlexContainer = styled.div`
  display: flex;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showTrash, setShowTrash] = useState(false)

  return (
    <div>
      <Header>
        <FlexContainer>
          <Brand>
            <Link href='/'>
              <a>🍑 PeachyTask</a>
            </Link>
          </Brand>
          <TrashButton onClick={() => setShowTrash(true)}>
            <span className='label'>Trash</span>
            <Trash showCount={true} />
          </TrashButton>
          <Trash showTrash={showTrash} onClickOverlay={() => setShowTrash(false)} />
        </FlexContainer>
      </Header>

      <main>
        <Container>
          <Main>{children}</Main>
        </Container>
      </main>
    </div>
  )
}

export default Layout
