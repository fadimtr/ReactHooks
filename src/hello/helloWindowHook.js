import React, {useState,useEffect} from 'react';

const HelloWindowHook = () => {

    const [username,setUsername] = useState('');
    useEffect(() => {
        document.title = `Hello ${username}`;
        console.log('rename');
    },[username]);

    const width = useWindowWidth(window.innerWidth);

    const updateUsername = (e) => {
        setUsername(e.target.value);
    }

    return <section className='hello-user'>
                <form>
                    <label data-for='username'>Please enter your name: </label>
                    <input name='username' value={username} onChange={updateUsername}/>
                </form>
                <div>
                        <span>Window width: </span>
                        <span>{width}</span>
                    </div>
            </section>;
}

const useWindowWidth = (initialValue) => {
    const [width,setWidth] = useState(initialValue);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize',handleResize);
        console.log('resize');
        
        return () => window.removeEventListener('resize',handleResize);
    },[window.innerWidth]);

    return width;
}

export default HelloWindowHook;