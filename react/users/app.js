
const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" classname="brand-logo center">React Users</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">

                </ul>
            </div>
        </nav>
    )
}

const Useritem = (props) => {   
    
    return (
        <ul className="collection">
            <li className="collection-item avatar">
            <img src="images/yuna.jpg" alt="" className="circle"/>
            <span className="title">Title</span>

            <p>{props.data.name.title}</p>
            <p>{props.data.email}</p>
            <p>{props.data.dob}</p>
            <p><img src={props.data.picture.medium} alt=""/></p>
            
            <a href="#!" className="secondary-content"><i class="material-icons">grade</i></a>
            </li>
        </ul>
)
}

const Footer = () => {
    return (
        <footer className="page-footer">

          <div className="footer-copyright">
            <div className="container">
            © 2014 Copyright Text
            
            </div>
          </div>
        </footer>
        )
    }

const App = (props) => {
 const usersList = props.data.map(el => {  /* map metodom prolazimo kroz niz objekata usersData,i vracamo modifikovan
                                           niz=UserItem kom smo dodelili niz usersData kao property
                                                                */
     return  <Useritem data={el}/>
    
 });

    return (
        <div>
            <Navbar />
            {usersList}
            
            <Footer />

        </div>
    )  
}

ReactDOM.render(<App data={usersData}/>, document.querySelector(".root"));

