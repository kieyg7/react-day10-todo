import {useRecoilValue, useSetRecoilState} from "recoil";
import styled from 'styled-components'
import {categories, IToDo, toDoState} from "../atoms";

function ToDo({id, text, category}: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const categoryList = useRecoilValue(categories)
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {currentTarget: {name}}: any = e;
    setToDos(oldToDos => {
      const inx = oldToDos.findIndex(toDo => toDo.id === id);
      const newArr = [...oldToDos];
      if (inx > -1) {
        newArr.splice(inx, 1, {text, id, category: name})
      }
      window.localStorage.setItem('ToDos', JSON.stringify(newArr))
      return newArr;
    })
  }


  return (
    <List>
      <span>{text}</span>
      {categoryList.filter(f => f !== category).map((cat, inx) => {
          return <button key={id+inx} onClick={onClick} name={cat}>{cat}</button>
      })}
    </List>
  )
}


const List = styled.li`
  width: 100%;
  height: 30px;
  margin: 5px 0;
  display: flex;
  
  span {
    flex: 1 1 auto;
    padding: 7px;
    align-items: center;
    background: #262b31;
    &:before {
      content: '⚪️';
      font-size: 12px;
      margin: 0 15px 0 -25px;
    }
  }
`

export default ToDo;