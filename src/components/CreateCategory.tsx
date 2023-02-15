import {useSetRecoilState} from 'recoil';
import {categories} from "../atoms"
import {useState} from "react";

function CreateCategory() {
  const setCategory = useSetRecoilState(categories);
  const [newCat, setNewCat] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {currentTarget: {value}} = e;
    setNewCat(value);
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCategory(oldCat => {
      const newArr = [...oldCat];
      const inx = newArr.findIndex(cat => cat === newCat)
      if (inx === -1 ){
        newArr.push(newCat);
      }
      window.localStorage.setItem('Category', JSON.stringify(newArr))
      return newArr;
    })
    setNewCat('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input placeholder="Add Category" value={newCat} onChange={onChange} />
      <button>Add</button>
    </form>
  )
}

export default CreateCategory;