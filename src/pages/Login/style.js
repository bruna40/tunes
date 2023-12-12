import styled from 'styled-components';

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 10rem;

    h1 {
        font-size: 2rem;
        margin-bottom: 2rem;
    }

    img {
        width: 20rem;
        margin: 0 auto;

        border-radius: 3rem;
    }

    form {
        display: flex;
        flex-direction: column;

        margin-top: 2rem;

        width: 15rem;
    }

`;

export const Input = styled.input`

    margin-bottom: 1rem;

    padding: 1rem 2rem;

    border-radius: 0.5rem;

    border: 0.1rem solid ${(props) => props.theme['gray-300']};

    font-size: 1rem;

    &:focus {
        border: 0.1rem solid ${(props) => props.theme['green-300']};
    }

`;

export const Button = styled.button`

    padding: 1rem 2rem;

    border-radius: 0.5rem;

    border: 0.1rem solid ${(props) => props.theme['gray-300']};

    cursor: pointer;
`;
