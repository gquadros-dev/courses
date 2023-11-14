import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 20px;


  div {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 10px 0;
  }

  label {
    position: absolute;
    left: 10px;
    top: 16px;
    transition: all 500ms;

    &:hover {
      cursor: text;
    }
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
    margin-bottom: 8px;

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
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px;
  position: relative;
  margin-top: 20px;

  img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    position: absolute;
    bottom: 0;
    color: #fff;
    background: ${colors.primaryColor};
    width: 36px;
    height: 36px;
    border-radius: 20%;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;
