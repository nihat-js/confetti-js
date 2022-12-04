const btn = document.querySelector('button') as HTMLButtonElement

btn.addEventListener('click', btnClick)

function btnClick() {
   let width = window.innerWidth
   let height = window.innerHeight;
   let k = 30 // px

   for (let i = 1; i <= 20; i += 1) {
      let circle = document.createElement('div')
      let square = document.createElement('div')
      let triangle = document.createElement('div')
      circle.classList.add('circle')
      square.classList.add('square')
      triangle.classList.add('triangle')

      circle.style.top = height / 2 + i * k + "px"
      circle.style.left = width / 2 + "px"

      square.style.top = height / 2 + "px"
      square.style.left = width / 2 + i * k + "px"

      triangle.style.top = height / 2 + "px"
      triangle.style.left = width / 2 - i * k + "px"



      document.body.append(circle, square, triangle)

      const circleTimer = setInterval(() => {
         if (parseInt(circle.style.top) < 200) {
            circle.remove()
            clearInterval(circleTimer)
         } else {
            circle.style.top = parseInt(circle.style.top) - 2 + 'px'
         }
      }, 5)

      const squareTimer = setInterval(() => {
         if (parseInt(square.style.left) > 1300) {
            square.remove()
            clearInterval(squareTimer)
         } else {
            square.style.left = parseInt(square.style.left) + 2 + 'px'
         }
      }, 5)

      const triangleTimer = setInterval(() => {


         if (parseInt(triangle.style.left) < 200) {
            triangle.remove()
            clearInterval(triangleTimer)
         } else {
            triangle.style.left = parseInt(triangle.style.left) - 2 + 'px'
         }
      }, 5)



   }


}