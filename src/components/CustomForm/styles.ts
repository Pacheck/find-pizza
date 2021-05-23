import styled, { css } from 'styled-components';

import { ReactComponent as Icon } from "../../assets/user_icon.svg";

import { CustomButtonProps } from './types';

//  Css declarations

const Dimensions = css`
    width: 323px;
    height: 40px;
`;

const GoogleProperty = css`
    background-color: #6091f4;
    margin-bottom: 25px;

    :hover {
        background-color: #3d79f4;
    }
`;

const DefaultButtonProperty = css`
    background-color: hsla(253, 78%, 74%, 1);

    :hover {
        background-color: hsl(253deg 86% 70%);
    }
`;

const VerticalFlexDirection = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

// Styleds exports

export const FormContainer = styled.form`
    width: 500px;
    ${VerticalFlexDirection}
    justify-content: space-evenly;
    background-color: #fff;
    border-radius: 18px;
`;

export const Input = styled.input`
    ${Dimensions};
    background-color: hsla(215, 100%, 91%, 1);
    border-radius: 6px;
    border: none;
    margin: 6px 0px;
    padding: 0px 10px;

    :focus{
        outline-color: #9F88F0;
    };

    ::placeholder {
        color: hsl(241°, 82%, 56%);
    }
`;

export const Container = styled.div`
    ${VerticalFlexDirection};
    justify-content:center;
`;

export const UserIcon = styled(Icon)`
    width: 84px;
    color: linear-gradient(180deg, #4E7EDF 0%, #4E7EDF 0.01%, #71B6F4 100%);
`;

export const SubmitButton = styled.button<CustomButtonProps>`
    ${Dimensions};
    ${({ isGoogleSign}) => isGoogleSign ? GoogleProperty : DefaultButtonProperty }
    color: #fff;
    margin: 5px 0px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    border: none;
    cursor: pointer;
`;

export const ActionsContainer = styled.div`
    ${VerticalFlexDirection};
    justify-content: space-between;
    margin-bottom: 30px;
`;

export const InputContainer = styled.div`
    ${VerticalFlexDirection};
    justify-content: space-between;
    margin-bottom: 15px;
`;

export const IconContainer = styled.div`
    height: 120px;
    ${VerticalFlexDirection};
    justify-content: center;
`;

export const Text = styled.h3`
    color: #fff;
    cursor: pointer;

    :hover {
        color: #91ceff;
    }
`;