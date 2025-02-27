const Test = () => {
    const [num, setNum] = useState([
        {price: 20000, cnt: 0},
        {price: 30000, cnt: 0},
        {price: 10000, cnt: 0},
    ])
    const plus =(i)=>{
        setNum((prev) => {
            const newArray = [...prev]
            newArray[i].cnt = newArray[i].cnt + 1
            return newArray;
        })
        const minus =(i)=>{
            setNum((prev) => {
                const newArray = [...prev]
                newArray[i].cnt = newArray[i].cnt == 0 ? newArray[i].cnt : newArray[i] - 1
                return newArray;
            })
    }          
    return ( 

     );
}
}
 
export default Test;