import { useState } from "react";

function Item(props) {

  return (
    <li>
      <a href={props.link}>
        {props.content}
      </a>
    </li>
  )
}

function Menu({list}) {
  
  return (
    <ul>
      {list.map((item) =>
        (<Item link={item.url} content={item.text} />)
      )}

    </ul>
  );
}
function Header(){
  const list = [
    {url:'/home',text:'Home'},
    {url:'about',text:'About'},
    {url:'/service',text:'Service'},
    {url:'/contact',text:'Contact'},
  ];
  return(
    <header>
      <Menu list={list}/>
    </header>
  )
}


function Login() {
  const [inputs,setInputs]= useState({
    username:'',
    password:'',
    isAdmin:false
  });

  const handleChange = (event)=>{
    const {name,value,type,checked} = event.target;
    setInputs((prevValues) => ({
      ...prevValues,[name]:type==='checkbox' ? checked:value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }
  return(
    <form onSubmit={handleSubmit}>
      <label >
        Enter your username:
        <input type="text"
        name="username"
        value={inputs.username}
        onChange={handleChange}
        />
      </label>  
      <br/>
      <label>
        Enter your password:
        <input type="password"
        name="password"
        value={inputs.password}
        onChange={handleChange}/>
      </label>
      <br/>
      <label>
        <input type="checkbox"
        name="isAdmin"
        checked={inputs.isAdmin}
        onChange={handleChange}/>is Admin ?
      </label>
      <button type="submit">Login</button>
    </form>
  )

}

 

export {

  Header,Login
}