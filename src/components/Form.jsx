import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { saveColor } from '../features/color_picker/colorReducer'

const Form = () => {
  const [colorHue, setColorHue] = useState({
    color: '',
    hue: 10,
  })
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setColorHue({ ...colorHue, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(saveColor(colorHue))
  }

  return (
    <Wrapper>
      <form className='form__form--cont' onSubmit={handleSubmit}>
        <label htmlFor='colorpicker'>
          <input
            type='color'
            value={colorHue.color}
            onChange={handleChange}
            name='color'
            id='colorpicker'
          />
        </label>

        <label htmlFor='color'>
          <input
            className='form__input--color'
            type='text'
            id='color'
            name='color'
            placeholder='Zadej odstín'
            value={colorHue.color}
            onChange={handleChange}
          ></input>
        </label>

        <label htmlFor='hue'>
          <input
            className='form__input--hue'
            type='number'
            id='hue'
            name='hue'
            value={colorHue.hue}
            onChange={handleChange}
          ></input>
        </label>
        <button type='onSubmit' className='form__btn'>
          Send
        </button>
      </form>
    </Wrapper>
  )
}

export default Form

const Wrapper = styled.div`
  .form__input--color,
  .form__input--hue {
    border: none;
    font-size: 1.3rem;
  }

  .form__form--cont {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.8rem;
  }

  .form__input--color[type='text'],
  .form__input--hue[type='number'] {
    outline: transparent;
    padding-bottom: 0.25rem;
    border-bottom: red 1px solid;
  }

  input[type='number']::-webkit-inner-spin-button {
    opacity: 1;
  }

  .form__input--hue {
    width: 100px;
  }

  .form__input--color {
    width: 150px;
  }

  .form__btn {
    width: 100px;
    background-color: blue;
    cursor: pointer;
    color: white;
    border: none;
    border-radius: 15px;
    font-size: 1.1rem;
    padding: 10px;
  }

  .form__btn:hover {
    background-color: darkblue;
  }

  @media (max-width: 763px) {
    .form__form--cont {
      display: grid;
      grid-template-columns: repeat(2, auto);
      align-items: center;
      justify-items: center;
      gap: 2.2rem;
    }

    .form__btn {
      width: 120px;
      padding: 10px;
      font-size: 1.2rem;
    }
  }
`
