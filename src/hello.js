

function Hello(){

    return(
        <span>
            <button onClick={hiAll()}>Hi ALL</button>
            <button onClick={hiYou("thinh")}>Hi you</button>

        </span>
    )
}

function HelloPersion(){
    const name = 'thinh'
    return(
        <h1> Xin chào bạn : {name}</h1>
    )
}

function hiAll(){
    alert("hello everyone");
}

function hiYou(name){
    alert("Hello"+name)
}
export {
    HelloPersion,
    Hello,
    hiAll,
    hiYou
};
