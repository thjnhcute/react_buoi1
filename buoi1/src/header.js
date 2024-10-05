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
    {url:'youtube.com',text:'Item1'},
    {url:'youtube.com',text:'Item2'}

  ];
  return(
    <Menu list={list}/>
  )
}

// function Login(){
//  const [inputs,setInputs] = useState({});

//  const handleChange = (event) =>{
//   const name = event.target.name;
//   const value = event.target.value;
//   setInputs(values=>({...values,[name]:value}))
//  }
//  const handleSubmit = (event)=>{
//   event.preventDefault();
//   console.log(inputs)
//  }
//  return(
//   <>
//     <form onSubmit={handleSubmit}>
//       <label>Enter your name:
//         <input type="text"
//           name="username"
//           value={inputs.username || ""}
//           onChange={handleChange}
//         ></input>
//       </label>

//       <label>Enter your age:
//         <input type="number"
//           name="age"
//           value={inputs.age||""}
//           onChange={handleChange}
//         />
//       </label>
//       <input type="submit"/>
//     </form>
//   </>
//  )
// }
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