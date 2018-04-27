

// function mapp(arr, transform){

//     var newArr = [];
//     for(var i = 0;i<arr.length;i++){

//         var oldEl = arr[i];
//         var newEl = transform(oldEl);

//         newArr.push(newEl);
//     }

//     return newArr;
// }

// var arrTest = [1,2,3,4];


// mapp(niz, (y) => {
//     var toStoMiTreba = <Kartica jedanUser={y} />
//     return toStoMiTreba
// })


const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">Logo</a>
                
            </div>
        </nav>
    )
}


const PostItem = (props) => {
    // console.log(props);
    

    return (
        <div className="container ">
            <div className="row">
                <div className="col s12">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{}</span>
                            <p>{props.post.title}</p>
                            <p>{props.post.body}</p> 
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        )
   
}


const App = (props) => { /*props je ovde data property iz render metode */
    console.log(props.data);
    
    const items = props.data.map(el => {  
        
                                            /* map metodom prolazimo kroz niz objekata POSTS(pravimo kopiju niza)
                                            i vracamo PostItem sa atributom post koji sadrzi element niza posts*/

    return  <PostItem post={el} />  /* */ 
    })



    return (
        <div>
            <Navbar />
            {items}

            
        </div>
    )
}


ReactDOM.render(<App data={posts} />, document.querySelector(".root"));
//red iznad- Funkciji App smo prosledili niz posts,kao data property