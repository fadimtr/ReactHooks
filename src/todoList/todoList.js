import React from 'react';

class TodoList extends React.Component {

  constructor(props){
    super(props);
    this.state = { 
        items : [
            {
                value: 'implement hooks',
                done: false
            },
            {
                value: 'implement hooks2',
                done: false
            }
        ],
        newElement: {
            value:''
        }
    }
  }

  deleteItem = (index) => {
      let newList = this.state.items.slice(0, index).concat(this.state.items.slice(index + 1))
      this.setState({ items: newList});
  }

  markItemDone = (index) => {
      let newList = this.state.items.slice();
      newList[index].done = true;
      this.setState({items: newList});
  }

  addElement = (e) => {
      e.preventDefault();
      let newItemsList = [ ...this.state.items, this.state.newElement];
      this.setState({
          items:newItemsList,
          newElement : {
              value:''
          }
      });
  }

  render(){
    return <div className='todo-list'>
                <section>
                    { this.state.items.map((item,index) => {
                        return <div>
                                    <span className={item.done ? 'done' : ''}>{item.value}</span>
                                    <span onClick={() => this.deleteItem(index)}>X</span>
                                    <span onClick={() => this.markItemDone(index)}>V</span>
                                </div>
                    })}
                </section>
                <section>
                    <form onSubmit={this.addElement}>
                        <input value={this.state.newElement.value} onChange={(e) => this.setState({newElement: {value: e.target.value}})}/>
                    </form>
                </section>
            </div>
  }
}

export default TodoList;