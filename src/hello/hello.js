import React from 'react';

class Hello extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username: ''
        };
    }

    updateUsername = (e) => {
        this.setState({ username: e.target.value });
    }

    componentDidMount = () => {
        document.title = `Hello`;
    }

    componentDidUpdate = () => {
        document.title = `Hello ${this.state.username}`;
    }

    render() {
        return <section className='hello-user'>
                    <form>
                        <label data-for='username'>Please enter your name: </label>
                        <input name='username' value={this.state.username} onChange={this.updateUsername}/>
                    </form>
                </section>
    }
}

export default Hello;