import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { changeAlert } from '../features/color_picker/colorReducer'

const Alert = () => {
  const [distance, setDistance] = useState()
  const { alert } = useSelector((state) => state.colorCart)
  const dispatch = useDispatch()

  useEffect(() => {
    const distance = (window.innerWidth - 130) / 2

    const tim = setTimeout(() => {
      dispatch(changeAlert({ type: false, msg: '' }))
    }, 2000)

    setDistance(distance)

    return () => {
      clearTimeout(tim)
    }
  }, [alert.type])

  return (
    <>
      {alert.type && (
        <Wrapper>
          <div
            className={
              alert.msg === 'copy' ? 'alert__true alert__cont' : 'alert__cont'
            }
            style={{ right: distance }}
          >
            <h2 className='alert__text'>{alert.msg}</h2>
          </div>
        </Wrapper>
      )}
    </>
  )
}

export default Alert

const Wrapper = styled.div`
  .alert__cont {
    width: 130px;
    height: 50px;
    background-color: #f00404;
    position: fixed;
    top: 6%;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .alert__true {
    background-color: #04f037;
  }

  .alert__text {
    font-family: 'arial';
    color: #ffff;
  }
`
