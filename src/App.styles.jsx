import styled from 'styled-components';

export const AppStyles = styled.div`
  display: grid;
  grid-template-areas:
      'header header header'
      'aside main main';
  grid-template-rows: 60px 1fr;
  grid-template-columns: 2fr 10fr;
  row-gap: 10px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 10px;
`