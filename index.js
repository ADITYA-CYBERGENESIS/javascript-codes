const firstDiv = document.querySelector('#first');

let a = async()=>{
    let div = document.createElement('div');
    div.innerHTML = 'hacking1';
    firstDiv.append(div); 
};
let b = async()=>{
    setTimeout(()=>{ 
        let div = document.createElement('div');
        div.innerHTML = 'hacking2';
        firstDiv.append(div);
    },1000)
};
let c = async()=>{
    setTimeout(()=>{ 
        let div = document.createElement('div');
        div.innerHTML = 'hacking3';
        firstDiv.append(div);
    },2000)
};

const caller=async()=>{
    await a();
    await b();
    await c();
};
caller();