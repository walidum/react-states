import './App.css';
import Profile from "./profile/profile";

const App = () => {
    const fullname = 'WALID UM'
    const bio = 'BIO'
    const profession = 'DEVELOPPEUR'
    const sayhello = () => {
        alert(fullname)
    }
    return (
        <>
            <Profile
                sayhello={sayhello}
                fullname={fullname}
                bio={bio}
                profession={profession}/>
        </>
    );
}

export default App;
