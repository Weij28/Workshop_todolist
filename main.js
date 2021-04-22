// 第一題：點擊變色

document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('li').forEach(function(item){
    item.addEventListener('click', function(i){
      i.target.classList.toggle('checked');
    })
  })

//   // 第二題：按紐刪除

  document.querySelectorAll('.close').forEach(function(door){
    door.addEventListener('click', function(d){
    d.target.parentNode.remove();
    })
  })
  // })


// // 第三題：新增項目
//   document.addEventListener('DOMContentLoaded', function() {
//     function add1() {
//       const array = document.querySelectorAll('ul')
//       array.forEach(e => e.addEventListener('click', function(e) {
//        e.target.classList.toggle('checked')
//       }))
//     }
//     function remove1() {
//       const array2 = document.querySelectorAll('li > span')
//       array2.forEach(e => e.addEventListener('click', function(e) {
//        e.target.parentNode.remove()
//       }))
//     }
//     add1()
//     remove1()
  
//    document.querySelector('#addBtn').addEventListener('click', function() {
//     add1()
//     console.log(document.querySelector('li').textContent)
//     let span2 = document.createElement('span')
//     let li1 = document.createElement('li')
//     let input1 = document.getElementById('input')
//     li1.textContent = input1.value
//     span2.textContent = 'x'
//     span2.classList.add('close');
//     li1.appendChild(span2);
//     if(li1.textContent != ''){
//         document.querySelector('ul').insertAdjacentElement('beforeend', li1)
//     }
    
    // remove1()
    // })
  })

// // 提示A：在ls放上事件

