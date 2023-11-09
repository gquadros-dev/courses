import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  div {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    label {
      position: absolute;
      left: 10px;
      top: 16px;
      transition: all 500ms;
    }

    input {
      height: 40px;
      font-size: 18px;
      outline: none;
      border: none;
      border-bottom: 1px solid #ddd;
      padding: 0 10px;
      border-radius: 4px;
      margin-top: 5px;

      &:focus {
        caret-color: ${colors.primaryColor};
      }

      &:focus + label, &:not(:placeholder-shown) + label {
          transform: translate3d(-4px, -22px, 0);
          scale: 0.9;
      }

      &::selection {
        background-color: ${colors.selectionColor};
      }
    }
  }
`;
