import {useRecoilState, useRecoilValue, } from "recoil";
import styled from 'styled-components'
import {toDoSelector, categoryState, categories} from '../atoms'
import CreateToDo from "./CreateToDo";
import Todo from './ToDo'
import CreateCategory from './CreateCategory'

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector)
  const categoryList = useRecoilValue(categories)
  const [category, setCategory] = useRecoilState(categoryState)
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const {currentTarget: {value}}: any = event;
    setCategory(value);
  };

  return (
  <RootDiv>
    <h1>To Dos</h1>
    <FlexRow>
      <select value={category} onInput={onInput}>
        {categoryList.map(cat => <option key={cat} value={cat}>{cat}</option>)}
      </select>
      <CreateCategory />
    </FlexRow>
    <CreateToDo />
    <ul>
      {toDos?.map(toDo => <Todo key={toDo.id} {...toDo} />)}
    </ul>
  </RootDiv>
  )
}

const RootDiv = styled.div`
  max-width: 500px;
  margin: 0 auto;
  ul {
    padding-left: 20px;
  }
`

const FlexRow = styled.div`
  width: 100%;
  margin: 5px 0;
  display: flex;
  form {
    flex: 1 1 auto;
    display: flex;
  }
  input {
    flex: 1 1 auto;
  }
`

export default ToDoList;