let f1=()=>{
    document.getElementById('spinner').classList.remove('hidden')
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then(x=>x.json())
    .then(y=>f2(y.data))
    .finally(()=>document.getElementById('spinner').classList.add('hidden'))
}


let f2=datas=>{
    let g1=document.getElementById('container');
    g1.innerHTML='';
    let g3=document.getElementById('issu');
   

   let g4=document.getElementById('container2');
   g4.innerHTML='';

   let g5=document.getElementById('container3');
   g5.innerHTML='';
   
    for(let data of datas){
let g2=document.createElement('div');
let gx=document.createElement('div');
let gxi=document.createElement('div');

g2.onclick=()=>f4(data.id)
gx.onclick=()=>f4(data.id)
gxi.onclick=()=>f4(data.id)

        let isOpen=data.status=='open';
        let im=isOpen ? 'Status.png' : 'Status2.png';
        let bor=isOpen ? ' hover:scale-105 transition-all border-t-[#00A96E] border-t-3 rounded-xl p-3 shadow-2xl' : 'border-t-[#A855F7] border-t-3 rounded-xl p-3 shadow-2xl hover:scale-105 transition-all';
        g2.className=bor;
        gx.className=bor;
        gxi.className=bor;
        
        g2.innerHTML=`
       <div class="flex justify-between mb-[12px]">
       <img src="assets/${im}">
<div class="badge badge-outline badge-error">${data.priority}</div>
       </div>
       <h2 class="text-[14px] font-semibold text-[#1F2937] mb-[8px]">${data.title}</h2>
        <p class="text-[16px] text-[#64748B] line-clamp-2">${data.description}</p>
   <div class="flex flex-wrap items-center mt-[12px] gap-1 border-b-2 border-b-gray-200 pb-3">${f3(data.labels)}</div>
   <h3 class="text-[16px] text-[#64748B] mt-[16px]">#${data.id} by ${data.author}</h3>
   <h3 class="text-[16px] text-[#64748B]">${data.updatedAt}</h3>
   
        `;
        g1.appendChild(g2);


        if(data.status=='open'){
             gx.innerHTML=`
       <div class="flex justify-between mb-[12px]">
       <img src="assets/${im}">
<div class="badge badge-outline badge-error">${data.priority}</div>
       </div>
       <h2 class="text-[14px] font-semibold text-[#1F2937] mb-[8px]">${data.title}</h2>
        <p class="text-[16px] text-[#64748B] line-clamp-2">${data.description}</p>
   <div class="flex flex-wrap items-center mt-[12px] gap-1 border-b-2 border-b-gray-200 pb-3">${f3(data.labels)}</div>
   <h3 class="text-[16px] text-[#64748B] mt-[16px]">#${data.id} by ${data.author}</h3>
   <h3 class="text-[16px] text-[#64748B]">${data.updatedAt}</h3>
   
        `;
        g4.appendChild(gx)
        }
        else{
            gxi.innerHTML=`
       <div class="flex justify-between mb-[12px]">
       <img src="assets/${im}">
<div class="badge badge-outline badge-error">${data.priority}</div>
       </div>
       <h2 class="text-[14px] font-semibold text-[#1F2937] mb-[8px]">${data.title}</h2>
        <p class="text-[16px] text-[#64748B] line-clamp-2">${data.description}</p>
   <div class="flex flex-wrap items-center mt-[12px] gap-1 border-b-2 border-b-gray-200 pb-3">${f3(data.labels)}</div>
   <h3 class="text-[16px] text-[#64748B] mt-[16px]">#${data.id} by ${data.author}</h3>
   <h3 class="text-[16px] text-[#64748B]">${data.updatedAt}</h3>
   
        `;
        g5.appendChild(gxi)
        }
    }
    g3.innerText=datas.length;
}
f1();


let f3=(arr)=>{
    let g1=arr.map(ar=> `<span class="badge badge-warning">${ar.toUpperCase()}</span>`);
    let g2=g1.join("");
    return g2
}


let f4=id=>{
    document.getElementById('spinner').classList.remove('hidden')
fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)
.then(x=>x.json())
.then(y=>f5(y.data))
.finally(()=>document.getElementById('spinner').classList.add('hidden'))
}

let f5=datas=>{
    console.log(datas)
    let g1=document.getElementById('moda');

let isOpen=datas.status=='open';
let gre=isOpen ? 'badge badge-success' : 'badge badge-error';

    g1.innerHTML=`
    <h2 class="font-bold text-[24px] text-[#1F2937]">${datas.title}</h2>

    <div class="mt-[8px] flex items-center">
    <p class="${gre} font-medium text-[12px] mr-[8px]">${datas.status}</p>
    &middot
    <p class="text-[12px] text-[#64748B] mr-[8px] ml-[8px]">Opened by ${datas.author}</p>
    &middot
    <p class="text-[12px] text-[#64748B] ml-[8px]">${datas.createdAt}</p>
    </div>

    <div class="mt-[24px] mb-[24px] flex items-center gap-3">
    ${f3(datas.labels)}
    </div>

    <h2 class="mb-[24px] text-[16px] text-[#64748B]">${datas.description}</h2>

    <div class="flex items-center justify-center gap-70 mb-[24px]">
    <div><h3 class="text-[16px] text-[#64748B]">Assignee:</h3><h3 class="font-semibold text-[16px] text-[#1F2937]">${datas.assignee}</h3></div>
    <div><h3 class="text-[16px] text-[#64748B]">Priority:</h3><h3 class="badge badge-outline badge-error">${datas.priority}</h3></div>
    </div>
    `;
    document.getElementById('my_modal_5').showModal();
}

let f6=(id, id2)=>{
    let g1=document.querySelectorAll('.butt');
    let g2= g1.forEach(gg=> gg.classList.remove('btn-primary'));
    let g3=document.getElementById(id).classList.add('btn-primary')

    let g4=document.querySelectorAll('.con');
    let g5=g4.forEach(element => element.classList.add('hidden'));
    let g6=document.getElementById(id2).classList.remove('hidden');

    let g7=document.getElementById(id2).children.length;
    document.getElementById('issu').innerText=g7
}

document.getElementById('search').addEventListener('click',
    function(){
        let g1=document.getElementById('inp');
        let g2=g1.value.trim().toLowerCase();
        document.getElementById('spinner').classList.remove('hidden')
        fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${g2}`)
        .then(x=>x.json())
        .then(y=>{
let g3=y.data;
let g4=g3.filter(g3=> g3.title.toLowerCase().includes(g2));
f2(g4);
        }

    
    )
    .finally(()=>document.getElementById('spinner').classList.add('hidden'))
    }
)
