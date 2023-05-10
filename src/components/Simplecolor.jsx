import React from 'react'
import styled from 'styled-components'
import { CgCopy } from 'react-icons/cg'
import { useDispatch } from 'react-redux'
import { changeAlert } from '../features/color_picker/colorReducer'

const Simplecolor = ({ weight, hex, index, rgb }) => {
  const dispatch = useDispatch()
  const rgba = `#${hex}`
  const convertRgb = rgb.join(', ')

  return (
    <Wrapper>
      <div className='card__color' style={{ backgroundColor: rgba }}>
        <CgCopy
          className={`card__color--icons ${index > 10 && 'card__color--light'}`}
          onClick={() => {
            dispatch(changeAlert({ type: true, msg: 'copy' }))
            navigator.clipboard.writeText(rgba)
          }}
        ></CgCopy>
      </div>
      <div className='card__text'>
        <h3>{weight}%</h3>
        <p>{rgba}</p>
        <p className='card__text--rgb'>RGB: {convertRgb}</p>
      </div>
    </Wrapper>
  )
}

export default Simplecolor

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  padding: 0.3rem;
  background-color: #ffff;
  border-radius: 15px;
  box-shadow: 2px 2px 10px #acc2c5;
  padding-top: 10px;

  .card__color {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: solid grey 0.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;

    .card__color--light {
      color: #ffff;
    }

    .card__color--icons {
      font-size: 1.9rem;
      opacity: 0;
      cursor: pointer;
      transition: all 1s ease;
    }

    .card__color--icons:hover {
      opacity: 1;
    }
  }

  .card__text {
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;

    h3 {
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
    }

    p {
      margin-bottom: 0.5rem;
    }

    .card__text--rgb {
      font-size: 0.8rem;
      margin-bottom: 1rem;
    }
  }
`
