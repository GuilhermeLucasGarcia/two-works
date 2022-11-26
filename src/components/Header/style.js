import styled from 'styled-components';

export const Container = styled.div`
    display: inline-flex;
    border: 1px solid pink;
    width: 100%;
`;

export const Logo = styled.div`
      border: 1px solid pink;
    width: 20%;
`;

export const Itens = styled.div`
    border: 1px solid pink;
    width: 80%;
    padding: 20px 20px 20px 20px;
    ul{
       display: inline-flex;
        flex-wrap: wrap;
       
    }
    ul li{
        margin: 0px 20px 0px 20px
      }
`;

