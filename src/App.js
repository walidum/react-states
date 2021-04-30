import './App.css';
import Address from "./component/profile/address";
import ProfilePhoto from "./component/profile/profilephoto";
import FullName from "./component/profile/fullname";

const App = () => {
    return (
        <>
            <FullName/>
            <Address/>
            <ProfilePhoto/>
        </>
    );
}

export default App;
