import React from 'react';

class HelloWindow extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            width:window.innerWidth
        };
        window.addEventListener('resize',this.handleResize);
    }

    handleResize = () => {
        this.setState({width: window.innerWidth});
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

    componentWillUnmount = () => {
        window.removeEventListener('resize',this.handleResize);
    }

    render() {
        return <section className='hello-user'>
                    <form>
                        <label data-for='username'>Please enter your name: </label>
                        <input name='username' value={this.state.username} onChange={this.updateUsername}/>
                    </form>
                    <div>
                        <span>Window width: </span>
                        <span>{this.state.width}</span>
                    </div>
                </section>
    }
}

export default HelloWindow;