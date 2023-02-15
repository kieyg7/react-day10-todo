import {useForm} from "react-hook-form";
import styled from 'styled-components'
import {atom, useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {categoryState, toDoState} from '../atoms'

interface IForm {
  toDo: string;
}



function CreateToDo() {
  const [toDos, setToDos] = useRecoilState(toDoState)
  const category = useRecoilValue(categoryState)
  const {register, handleSubmit, setValue} = useForm<IForm>();
  const handleValid = ({toDo}: IForm) => {

    setToDos(oldToDos => {
      const newToDo = [{text: toDo, category, id: Date.now()}, ...oldToDos];
      window.localStorage.setItem('ToDos', JSON.stringify(newToDo))
      return newToDo;
    })
    setValue("toDo", "")
  }

  return (
    <Form onSubmit={handleSubmit(handleValid)}>
      <input type="text" {...register("toDo", {required: "Please write a To Do."})} placeholder="Write a to do"/>
      <button>Add</button>
    </Form>
  )
}

const Form = styled.form`
  width :100%;
  display: flex;
  input {
    flex: 1 1 auto;
  }
`

export default  CreateToDo;