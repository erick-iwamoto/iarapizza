import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Container = styled.header`
  background: white
`

export const Content = styled.div`
  max-width: 1128px;
  margin: 0 auto;
  padding: 0 16px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  margin-bottom: 20px;

  button {
    font-size: 1rem;
    color: #fff;
    background: #5429CC;
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #242424;
    }

    span {
      font-size: 12px;
      color: #242424;
    }
  }
`;