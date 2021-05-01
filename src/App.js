import './App.css';
import {useState} from 'react'
import Profile from "./profile/profile";

const App = () => {
    const [age, setAge] = useState(20)
    const [fullname, setFullname] = useState('WALID UM')
    const [bio, setBio] = useState('BIO')
    const [profession, setProfession] = useState('DEVELOPPEUR')
    const sayhello = () => {
        setAge(age + 1)
        setBio('Nouvelle bio')
    }
    return (
        <>
            <h1>age : {age}</h1>
            <Profile sayhello={sayhello} fullname={fullname} bio={bio} profession={profession}/>
        </>
    );
}

export default App;
