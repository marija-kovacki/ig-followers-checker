const btn = document.querySelector('#demoModalTrigger')
const modal = document.querySelector('#modal')
const backdrop = document.querySelector('#backdrop')
const closeBtn = document.querySelector('#closeBtn')

btn.addEventListener('click', (e) => {
  modal.classList.add('open')
  console.log('Clicked:', e.target)
})

closeBtn.addEventListener('click', (e) => {
  modal.classList.remove('open')
})
