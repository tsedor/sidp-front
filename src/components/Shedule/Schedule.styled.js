import styled from 'styled-components';

export const Cell = styled.div`
background-color: ${props => props.sunday && "#ffeeee"};
border-bottom: 1px solid #E8E8E8;
filter: ${props => !props.current && "opacity(.2)"};
padding: 5px;
position: relative;
&:hover {
  div:last-child {
    opacity: 1;
  }
}
@media (max-width: 1100px) {
  display: ${props => !props.current && 'none'};
}
`;

export const DayCell = styled.div`
border-bottom: 1px solid #E8E8E8;
font-weight: 700;
padding: 5px;
@media (max-width: 1100px) {
  display: none;
}
`;

export const EditButton = styled.div`
bottom: 0;
opacity: 0;
position: absolute;
right: 0;
transition: opacity .2s;
`;

export const Month = styled.div`
font-size: 16px;
font-weight: 700;
grid-column: 1 / 8;
margin: 10px;
text-align: center;
button {
  margin: 0 20px;
}
span {
  display: inline-block;
  width: 130px;
}
@media (max-width: 1100px) {
  
grid-column: 1 / 2;
}
`;

export const ScheduleContainer = styled.div`
display: grid;
grid-template-columns: repeat(7, 1fr);
position: relative;
@media (max-width: 1100px) {
  grid-template-columns: repeat(1, 1fr);
}
`;

export const Spinner = styled.div`
align-items: center;
background-color: rgba(255, 255, 255, .8);
bottom: 0;
display: ${props => props.request ? 'flex' : 'none'};
justify-content: center;
left: 0;
position: absolute;
right: 0;
top: 0;
z-index: 999;
`;

export const WorkDetails = styled.div`
  min-height: 88px;
  padding-left: 20px;
  @media (max-width: 1100px) {
    min-height: 0;
  }
`;