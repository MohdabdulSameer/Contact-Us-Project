import Styles from "./Navigation.module.css"

const Navigation = () => {
    console.log(Styles);    
return (
    <nav className={`${Styles.navigation} container`}>
        <div className="logo">
            <img src="./images/Frame 2 1.png" alt="logo of nav"/>
        </div>
        <ul>
            <li>Home</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
    </nav>
)
}

export default Navigation