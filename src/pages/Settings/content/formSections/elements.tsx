import styled from 'styled-components'
import { Field } from 'react-final-form'
import { Image } from 'rebass'

export const Label = styled.label`
  margin: 10px;
  /* padding: 0 10px; */
  &:has(input:checked) {
    background-color: grey;
  }
`

export const RadioInputWImg = styled(Field)`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  & + img {
    cursor: pointer;
  }
  &:checked + img {
    opacity: 1;
  }
`

export const ImgOp = styled(Image)`
  opacity: 0.5;
`