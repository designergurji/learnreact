import styled from "styled-components";

export const Filter = styled.div`
 background: #f3f3f3;
 
`
export const FilterRow = styled.ul`
margin: 0px;
padding: 15px 10px;
list-style: none;
display: flex;
align-items: center;
`

export const FilterItem = styled.li`
margin: 0 15px 0 0px;
padding: 5px 10px;
color: #333;
border-radius: 4px;
border: 1px #333 solid;
font-size: 0.9rem;
cursor: pointer;
&:hover{
    color: #fff;
    background: #333;
}
`