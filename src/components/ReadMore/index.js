import {useState} from 'react'

import {
  MainCont,
  Title,
  TitleJustification,
  ImageEle,
  Description,
  ButtonEle,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const readLess = reactHooksDescription.slice(0, 170)

  const [description, setDescription] = useState(false)

  const onClickReadMore = () => {
    setDescription(prev => !prev)
  }

  return (
    <>
      <MainCont>
        <Title>React Hooks</Title>
        <TitleJustification>
          Hooks are a new addition to React
        </TitleJustification>
        <ImageEle
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        {description ? (
          <>
            {' '}
            <Description> {reactHooksDescription}</Description>
            <ButtonEle onClick={onClickReadMore}>Read Less</ButtonEle>
          </>
        ) : (
          <>
            <Description>{readLess}</Description>
            <ButtonEle onClick={onClickReadMore}>Read More</ButtonEle>
          </>
        )}
      </MainCont>
    </>
  )
}

export default ReadMore
