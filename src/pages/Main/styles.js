import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Header = styled.div`
  height: 200px;
  border: 1px solid white;
  width: 100%;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
`

export const Title = styled.div`
  color: white;
  font-size: 20px;
  padding: 10px;
`

export const Body = styled.div`
  height: 100%;
  padding: 10px;
  border: 1px solid gray;
  flex-direction: row;
`