document.addEventListener("DOMContentLoaded",function(){
  const domElements = domCache()
  bindEvents(domElements)
})

function domCache()
{
  const gridBoxes = document.getElementsByClassName('grid-box')
  const bodyOverlay = document.querySelector('.overlay')
  const videoContainer = document.querySelector('.video-container')
  const video = document.querySelector('video')
  const buyBtn = document.querySelector('.buy-link')
  return { bodyOverlay, videoContainer, gridBoxes, video, buyBtn }
}
function bindEvents(domElements)
{
  let { bodyOverlay: bOver, videoContainer: vCont,
      gridBoxes: gBoxes, video, buyBtn } = domElements;

  bOver.addEventListener("click",function(){
    this.style.display = 'none'
    vCont.style.display = 'none'
    video.pause()
  })
  buyBtn.addEventListener("click",function(){
    bOver.style.display = 'none'
    vCont.style.display = 'none'
    video.pause()
  })
  Array.from(gBoxes).forEach(item=>{
    item.addEventListener("click",function(){
      bOver.style.display = 'inherit'
      vCont.style.display = 'inherit'
      const vidPath = item.getAttribute("data-video")
      video.src = vidPath
      console.log(video.src);
    })
  })

}
