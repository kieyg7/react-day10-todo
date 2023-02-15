import {atom, selector} from "recoil";

export type CategoryType = string; //"ToDo"|"Doing"|"Done"|

// localstorage
const getLocalCat = window.localStorage.getItem("Category");
const localCategories = !getLocalCat ? null : JSON.parse(getLocalCat);
const getLocalToDo = window.localStorage.getItem("ToDos");
const localToDos = !getLocalToDo ? null : JSON.parse(getLocalToDo);


export interface IToDo {
  text: string;
  id: number;
  category: CategoryType;
}

export const categories = atom<CategoryType[]>({
  key: 'categories',
  default: !localCategories
    ? ["ToDo", "Doing", "Done",]
    : localCategories,
})

export const categoryState = atom<CategoryType>({
  key: 'category',
  default: "ToDo",
})

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: !localToDos ? [] : localToDos,
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({get}) => {
    const toDos = get(toDoState)
    const category = get(categoryState);
    return toDos.filter(toDo => toDo.category === category);
  }
})
