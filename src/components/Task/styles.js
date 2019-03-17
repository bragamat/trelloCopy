import styled from 'styled-components';

export const TaskCard = styled.div`
  /* max-height: 60px; */
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: gray;
  justify-content: center;
  align-items: center;

  input {
    flex: 1;
    height: 60px;
    max-width: 100%;
    font-size: 13px;
  }
`;
