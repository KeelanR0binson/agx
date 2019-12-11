const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true, height:768, width:1366})

nightmare
  .goto('https://apps.fliplet.com/ucl-agx')
  .click('.swiper-button-next-2462079')
  .click('input[value="Login "]')
  .goto('https://apps.fliplet.com/v1/apps/11449/pages/173888/view')
  .wait(5000)
  .end()
  .then(console.log)
  .catch(error => {
    console.error('Search failed:', error)
  })
