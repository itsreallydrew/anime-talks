import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";

const pageBackground = styled.background`
    background-size: cover;
    opacity: 0.5;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;

    ${applyStyleModifiers(BACKGROUND_MODIFIERS)}
`

const BACKGROUND_MODIFIERS = {
    main_anime: () => `
        background: url('../../assets/8010.png') no-repeat center center fixed;
    `,
    hunter_page: () => `
        background: url('../../assets/8010.png') no-repeat center center fixed;
    `,
    explorer_page: () => `
        background: url('../../assets/54869.jpg') no-repeat center center fixed;
    `

}

export default pageBackground