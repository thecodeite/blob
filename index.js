const circleEl = document.getElementById('circle')

const width  = window.innerWidth || 
  document.documentElement.clientWidth || 
  document.body.clientWidth;

const height = window.innerHeight || 
  document.documentElement.clientHeight ||
  document.body.clientHeight;

const midX = width/2
const midY = height/2

document.addEventListener('mousemove', e => {
  const stretchX = 0.5 + Math.abs(e.clientX-midX)/(midX*2)
  const stretchY = 0.5 + Math.abs(e.clientY-midY)/(midY*2)
  
  if (stretchX > stretchY) {
    circleEl.setAttribute('rx', stretchX * 50)
    circleEl.setAttribute('ry', 25)
  } else {
    circleEl.setAttribute('ry', stretchY * 50)
    circleEl.setAttribute('rx', 25)
  }
})