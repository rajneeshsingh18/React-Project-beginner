const Navigation =() =>{
    return(
        <>
        <nav>
            <div className="logo container">
              <img src="./public/brand_logo.png" alt= "logo" />

              <ul>
                <li className="nav__list" href="#">Menu</li>
                <li className="nav__list" href="#">Location</li>
                <li className="nav__list" href="#">About</li>
                <li className="nav__list" href="#">Contact</li>
              </ul>

              <button className="nav__button" >Login</button>
            </div>
          </nav>
        </>
    )
}

export default Navigation;