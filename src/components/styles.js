import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
  overflow: hidden;
`;

export const Pre = styled.pre`
  text-align: left;
  font-size: 16px;
  margin: 1em 0;
  padding: 1em;
  overflow: scroll;
  overflow-y: hidden;
  overflow-x: hidden;


  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`;

export const Line = styled.div`
  display: table-row;
`;

export const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

export const LineContent = styled.span`
  display: table-cell;
`;
