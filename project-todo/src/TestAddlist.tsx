import { useEffect, useState } from "react";

type Box = {
    id :  number;
    text: string;
    isCheck : boolean;
}
const TestAddlist = () => {
const [addlist, setAddlist] = useState<Box[]>([])
const [input, setInput] = useState<string>("")

useEffect(()=> {
    const storr = localStorage.getItem("todo")
    if(storr){
        setAddlist(JSON.parse(storr) as Box[])
    }
}, [])

useEffect(()=> {
    localStorage.getItem(JSON.stringify( addlist  ))
}, [addlist])

const addTodo = (): void => {
    if (input.trim() !== "")
    setAddlist([...addlist, {id: Date.now(), text: input, isCheck: false }]);
    setInput("");

  const delTodo = (id):void => {
    setAddlist(addlist.filter((v) => {v.id !== id}))
  }  
  };


    return (  

    );
}
 
export default TestAddlist;