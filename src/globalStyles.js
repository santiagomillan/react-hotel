import { createGlobalStyle } from "styled-components";

const GoblalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Montserrat', sans-serif;
    }

    html, body {
        overflow-x :hidden;
    }

`;

export default GoblalStyle;