import styled from 'styled-components';

export const PizzaList = styled.ul`
  position: relative;
  margin-bottom: 260px;

  @media (max-width: 480px) { 
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    list-style: none;
    margin-right: 20px;
    margin-left: 20px;

    li {
      display: flex;
      flex-direction: column;
      background: #fff;
      border-radius: 4px;
      padding: 20px;
      justify-self: center;

      img {
        align-self: center;
        max-width: 250px;
      }

      > strong {
        font-size: 16px;
        line-height: 20px;
        color: #333;
        margin-top: 5px;
      }

      > span {
        font-size: 21px;
        font-weight: bold;
        margin: 5px 0 20px;
      }

      button {
        background: #7159c1;
        color: #fff;
        border: 0;
        border-radius: 4px;
        overflow: hidden;
        margin-top: auto;
        width: 60%;
        align-self: center;

        display: flex;
        align-items: center;
        transition: background 0.2s;

        &:hover {
          background: #8978bf;
        }

        div {
          display: flex;
          align-items: center;
          padding: 12px;
          background: rgba(0, 0, 0, 0.1);

          svg {
            margin-right: 5px;
          }
        }

        span {
          flex: 1;
          text-align: center;
          font-weight: bold;
        }
      }
    }
  }

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    list-style: none;
    margin-right: 20px;
    margin-left: 20px;

    li {
      display: flex;
      flex-direction: column;
      background: #fff;
      border-radius: 4px;
      padding: 20px;
      justify-self: center;

      img {
        align-self: center;
        max-width: 250px;
      }

      > strong {
        font-size: 16px;
        line-height: 20px;
        color: #333;
        margin-top: 5px;
      }

      > span {
        font-size: 21px;
        font-weight: bold;
        margin: 5px 0 20px;
      }

      button {
        background: #7159c1;
        color: #fff;
        border: 0;
        border-radius: 4px;
        overflow: hidden;
        margin-top: auto;
        width: 60%;
        align-self: center;

        display: flex;
        align-items: center;
        transition: background 0.2s;

        &:hover {
          background: #8978bf;
        }

        div {
          display: flex;
          align-items: center;
          padding: 12px;
          background: rgba(0, 0, 0, 0.1);

          svg {
            margin-right: 5px;
          }
        }

        span {
          flex: 1;
          text-align: center;
          font-weight: bold;
        }
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    list-style: none;
    margin-right: 20px;
    margin-left: 20px;

    li {
      display: flex;
      flex-direction: column;
      background: #fff;
      border-radius: 4px;
      padding: 20px;

      img {
        align-self: center;
        max-width: 250px;
      }

      > strong {
        font-size: 16px;
        line-height: 20px;
        color: #333;
        margin-top: 5px;
      }

      > span {
        font-size: 21px;
        font-weight: bold;
        margin: 5px 0 20px;
      }

      button {
        background: #7159c1;
        color: #fff;
        border: 0;
        border-radius: 4px;
        overflow: hidden;
        margin-top: auto;
        width: 60%;
        align-self: center;

        display: flex;
        align-items: center;
        transition: background 0.2s;

        &:hover {
          background: #8978bf;
        }

        div {
          display: flex;
          align-items: center;
          padding: 12px;
          background: rgba(0, 0, 0, 0.1);

          svg {
            margin-right: 5px;
          }
        }

        span {
          flex: 1;
          text-align: center;
          font-weight: bold;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    list-style: none;
    margin-right: 20px;
    margin-left: 20px;

    li {
      display: flex;
      flex-direction: column;
      background: #fff;
      border-radius: 4px;
      padding: 20px;

      img {
        align-self: center;
        max-width: 250px;
      }

      > strong {
        font-size: 16px;
        line-height: 20px;
        color: #333;
        margin-top: 5px;
      }

      > span {
        font-size: 21px;
        font-weight: bold;
        margin: 5px 0 20px;
      }

      button {
        background: #7159c1;
        color: #fff;
        border: 0;
        border-radius: 4px;
        overflow: hidden;
        margin-top: auto;
        width: 60%;
        align-self: center;

        display: flex;
        align-items: center;
        transition: background 0.2s;

        &:hover {
          background: #8978bf;
        }

        div {
          display: flex;
          align-items: center;
          padding: 12px;
          background: rgba(0, 0, 0, 0.1);

          svg {
            margin-right: 5px;
          }
        }

        span {
          flex: 1;
          text-align: center;
          font-weight: bold;
        }
      }
    }
  }
`;

export const DrinkContainer = styled.div`
  width: 100%;
  bottom: 0;
  position: fixed;
  background-color: #fff;
  height: 250px;

  button {
    background: #7159c1;
    color: #fff;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: auto;
    align-self: center;

    display: flex;
    align-items: center;
    transition: background 0.2s;

    &:hover {
      background: #8978bf;
    }

    div {
      display: flex;
      align-items: center;
      padding: 12px;
      background: rgba(0, 0, 0, 0.1);

      svg {
        margin-right: 5px;
      }
    }

    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
      padding-right: 10px;
      padding-left: 10px;
    }
  }
`;

export const DrinkContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  background-color: #EDF2F7;
  border-radius: 5px;
  align-items: center;
  padding: 10px; 
`