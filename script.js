const list =document.querySelector('#first');
const btn =document.querySelector('#btn');

const addInLocal = async(value)=>{
    counter = 1;
    localStorage.setItem(`${counter}`,`${value}`);
    counter = counter +1;
}
const addList = async()=>{
    let value= await prompt('Enter the what you need to do ');
    addInLocal(value);
    
}

btn.addEventListener('click',()=>{
    addList();
})
const a = async()=>{
    i=0; 
    do{
        let li = await document.createElement('li');
        li.innerHTML = localStorage.getItem(`${value}`);
        list.append(li);
        i++

    }while(i<localStorage.length)
}
document.addEventListener('DOMContentLoaded',()=>{
      // for (let i=0;i<localStorage.length;i++)
      a();
    
})