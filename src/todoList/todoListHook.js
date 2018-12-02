import React, {useState} from 'react'

const TodoListHook = () => {

    let [items,setItems] = useState([
        {
            value: 'implement hooks',
            done: false
        },
        {
            value: 'implement hooks2',
            done: false
        }
    ]);
    
    let [newItem,updateNewItem] = useState({ value: ''});

    const deleteItem = (index) => {
        let newList = items.slice(0, index).concat(items.slice(index + 1))
        setItems(newList);
    }
  
    const markItemDone = (index) => {
        let newList = items.slice();
        newList[index].done = true;
        setItems(newList);
    }
  
    const addElement = (e) => {
        e.preventDefault();
        let newItemsList = [ ...items, newItem];
        setItems(newItemsList);
        updateNewItem({value: ''});
    }


    return <div className='todo-list'>
                <section>
                    { items.map((item,index) => {
                        return <div>
                                    <span className={item.done ? 'done' : ''}>{item.value}</span>
                                    <span onClick={() => deleteItem(index)}>X</span>
                                    <span onClick={() => markItemDone(index)}>V</span>
                                </div>
                    })}
                </section>
                <section>
                    <form onSubmit={addElement}>
                        <input value={newItem.value} onChange={(e) => updateNewItem({value: e.target.value})}/>
                    </form>
                </section>
            </div>
}

export default TodoListHook;