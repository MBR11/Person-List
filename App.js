import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


class App extends Component{

  state={
    people:[
      {id:1,name:'John',role:'Developer',image:'https://randomuser.me/api/portraits/thumb/men/60.jpg'},
      {id:2,name:'Bob',role:'Designer',image:'https://randomuser.me/api/portraits/thumb/men/61.jpg', desc:'Loreum Ipsum Loreum Ipsum'},
      {id:3,name:'David',role:'The Boss',image:'https://randomuser.me/api/portraits/thumb/men/62.jpg'}
    ]
  }
  render(){
    return(
      <section>
        {this.state.people.map(item=>(
           <Child key={item.id} info={item}/>
        ))}
       
      </section>
    )
  }
}


class Child extends App{



  render(){

    const {name,role,image,desc}=this.props.info;

    return(
      <div className='grid-container'>
        <article className='grid'>
        
        <img src={image} alt='Image' width='100px' className='imgstyle'></img>
        <p>{name}</p>
        <p>{role}</p>
        <h5>{desc}</h5>
      </article>
      </div>
      
    )
  }
}


export default App;

