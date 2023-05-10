import React, { useState, useEffect } from 'react'
import Values from 'values.js'
import { Simplecolor } from './index'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { changeAlert } from '../features/color_picker/colorReducer'

const Colors = () => {
  const [list, setList] = useState(new Values('#f12065').all(10))
  const { colorInfo, errors } = useSelector((state) => state.colorCart)
  const dispatch = useDispatch()

  useEffect(() => {
    let { color, hue } = colorInfo
    hue = parseInt(hue)

    try {
      const newlist = new Values(color).all(hue)
      setList(newlist)
    } catch (error) {
      if (!errors) {
        dispatch(changeAlert({ type: true, msg: 'Chyba' }))
      }
    }
  }, [colorInfo])

  return (
    <Wrapper>
      {list.map((item, index) => {
        const { hex } = item

        return <Simplecolor key={index} {...item} hex={hex} index={index} />
      })}
    </Wrapper>
  )
}

export default Colors

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(120px, 1fr));
  gap: 0.8rem;
  padding: 3rem;
`
