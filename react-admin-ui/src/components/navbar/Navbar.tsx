import "./navbar.scss"

const Navbar = ()=> {

    return (
    <div className = "navbar" >
        <div className="logo">
            <img src="logo.svg" alt="" />
            <span>IamAdmin</span>
        </div>

        <div className="icons">
            <img src="/search.svg" alt="" className="icon" />
            <img src="/app.svg" alt="" className="icon" />
            <img src="/expand.svg" alt="" className="icon" />
            <div className="notifications">
                <img src="/notifications.svg" alt="" />
                <span>4</span>
            </div>
            <div className="user">
                <img src="https://lh3.googleusercontent.com/a/ACg8ocKSOgIcDhmVgz_Wxeu9-J7xgxKiLQuPVSkFibZAUcNvOA=s288-c-no" alt="" />
                <span>Abhishek Singh</span>
            </div>
            <img src="" alt="" className="icon" />
            
            

        </div>
    </div>
    )
}
export default Navbar