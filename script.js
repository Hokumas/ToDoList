let list = document.querySelector('#list')
let button = document.querySelector('.all-button')
let input = document.querySelector('.input')

let arr = []
function showName(){
        list.innerHTML = ''
        arr.forEach((item)=>{
let li = document.createElement('li')
        li.innerHTML = `<span>${item}</span><button  onclick = "deleted('${item}')" class ='delete'><i class="fa-solid fa-xmark"></i></button>`;
        list.appendChild(li)           
})
        }
     button.addEventListener('click', function(){
        if(input.value != ''){
            arr.push(input.value)
        }
        input.value = ''
        showName()
     })

       function deleted(name){
arr = arr.filter((item)=> item !== name)
showName()
       }
       showName()


let i = document.querySelector('.i-class-div')
let flag = true
i.addEventListener('click', function(){
if(flag===true){
    arr = arr.sort((a,b)=> a.localeCompare(b))
    i.innerHTML = '<i class="fa-solid fa-arrow-up-short-wide"></i>'
    flag=false
}
else if(flag===false){
newArr = arr.sort((a,b)=> b.localeCompare(a))
    i.innerHTML = '<i class="fa-solid fa-arrow-down-wide-short"></i>'
    flag=true   

}
showName()
})