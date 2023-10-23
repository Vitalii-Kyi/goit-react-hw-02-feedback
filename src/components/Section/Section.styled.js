import { styled } from 'styled-components';

export const Thumb = styled.section`
  // color: midnightblue;

  h2 {
    padding: 24px 8px;
    margin: auto;
    // margin-bottom: 36px;
  }

  // b {
  //   border-bottom: 2px dashed midnightblue;
  // }

  button {
    font-weight: bold;
    margin-bottom: 24px;
    padding: 8px 12px;
    border: 1px solid #bcbcbc;
    border-radius: 4px;
    text-transform: uppercase;
    background-color: #d9ead3;
    // background-color: #93c47d;
  }

  button:hover,
  button:focus {
    background-color: #93c47d;
    color: white;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 12px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  li p {
    color: black;
    font-size: larger;
    font-style: oblique;
  }

  li span {
    font-weight: bold;
    font-size: large;
    font-style: normal;
  }
`;
