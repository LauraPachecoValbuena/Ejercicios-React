import styled from '@emotion/styled';

export const Button: any = styled.button`
    background: ${(props: any) => (props.isRed ? "red" : "")};
 `;

 export const Button1: any = styled.button`
    background: ${(props: any) => props.background};
 `;

export const Redbutton = styled.button`
    background: red;
 `;


 export const Bluebutton = styled.button`
    background: blue;
    &:hover{
        color: white;
    }
 `;
