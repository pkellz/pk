document.addEventListener("DOMContentLoaded", _=> {
    document.querySelector("#portfolio-icon-container").addEventListener("click", _=> {
      parent.postMessage('portfolio', "*")
    })

    document.querySelector("#about-me-arrow span").addEventListener("click", _=> {
      parent.postMessage('about', "*")
    })

    document.querySelector("#arrow-icon img").addEventListener("click", _=> {
      parent.postMessage('about', "*")
    })
})
