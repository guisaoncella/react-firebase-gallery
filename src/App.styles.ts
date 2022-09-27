import styled from "styled-components";

export const Container = styled.div`
    background-color: #27282F;
    color: #FFF;
    min-height: 100vh;
`;

export const Area = styled.section`
    margin: auto;
    max-width: 980px;
    padding: 30px 0;
`;

export const Header = styled.h1`
    font-size: 48px;
    text-align: center;
    margin-bottom: 30px;
`;

export const Loading = styled.div`
    text-align: center;

    .emoji{
        font-size: 50px;
        margin-bottom: 20px;
    }
`;

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;

    &:has(img:hover) .image:not(:hover){
        scale: 0.7;
        filter: grayscale(80%);
        transition: all 400ms ease;
    }
`;

export const UploadForm = styled.form`
    background-color: #3D3F43;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;


    input[type=submit] {
        background-color: #756DF4;
        border: 0;
        color: #fff;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;

        &:hover{
            opacity: 0.8;
            transition: opacity 0.3s;
        }
    }
`;