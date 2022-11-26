import {createGlobalStyle} from 'styled-components';
import ('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
export default createGlobalStyle`
    :root {
        --white: #ffffff;
        --primary: #6A49C4;
        --secundary: #77C5C4;
        --terciary: #202024;
    }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--white);
  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    min-height: 50vh;
    min-width: 50vw;
    width: 100%;
    height: 100%;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
  }
  html {
    background: var(--terciary);
  }
  .title{
    font-size: 48px;
  }
  .sub-title{
    font-size: 32px;
  }
`;
