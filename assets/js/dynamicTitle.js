window.onload = function () {
  const favicon = document.getElementById('favicon')
  const pageTitle = document.title
  const attentionMessage = 'Hoang Manh Khiem | KProtect'

  document.addEventListener('visibilitychange', function (e) {
    const isPageActive = !document.hidden
    toggle(isPageActive)
  })

  function toggle(isPageActive) {
    if (isPageActive) {
      document.title = pageTitle
      favicon.href = './assets/images/favicon.png'
    } else {
      document.title = attentionMessage
      favicon.href = './assets/images/favicon.png'
    }
  }
}