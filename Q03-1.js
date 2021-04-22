// // 以下是威誠的版本

// document.addEventListener('DOMContentLoaded', function() {
//   function add1() {
//     const array = document.querySelectorAll('ul')
//     array.forEach(e => e.addEventListener('click', function(e) {
//      e.target.classList.toggle('checked')
//     }))
//   }
//   function remove1() {
//     const array2 = document.querySelectorAll('li > span')
//     array2.forEach(e => e.addEventListener('click', function(e) {
//      e.target.parentNode.remove()
//     }))
//   }
//   add1()
//   remove1()

//  document.querySelector('#addBtn').addEventListener('click', function() {
//   add1()

//   let span2 = document.createElement('span')
//   let li1 = document.createElement('li')
//   let input1 = document.getElementById('input')
//   li1.textContent = input1.value
//   span2.textContent = 'x'
//   span2.classList.add('close')
//   li1.appendChild(span2)
//   if(li1.textContent != ''){
//       document.querySelector('ul').insertAdjacentElement('beforeend', li1)
//   }

//   remove1()
//   })
// })

// // 先設定一個迴圈