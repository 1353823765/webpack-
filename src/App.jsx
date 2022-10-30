import React, { Component } from 'react'
import "./css/film.css"
import axios from 'axios'
export default class App extends Component {
    state={
        list:[]
    }
    componentDidMount(){
        // axios({
        //     url:"/data"
        // }).then(res=>{console.log(res)}
        axios({
            url:"/data",method:"get"
        }).then(res=>{console.log(res.data),
         this.setState({list:res.data.data.hot})
        })
    }
render() {
  
return (
<div>
<ul>
{
 this.state.list.map(item=><li key={item.id}>
    <p>电影名:《{item.nm}》</p>
    
    <p>{item.desc }</p>
   
    <img src={item.img} onClick={()=>{
    }}></img>
    
    </li>)
}
</ul>
</div>
)
}
}
// import React, { Component } from 'react'
// import Style from "./css/style.css"
// import Img from "../src/img/1.gif"
// export default class App extends Component {
//   render() {
//     return (
//       <div className={Style.special}>
//       <img src={Img}/>
//  <span>服务端字体good</span>
//  <span className={Style.one}>类名</span>
//       </div>
//     )
//   }
// }
