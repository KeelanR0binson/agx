const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true })

nightmare
  .goto('https://apps.fliplet.com/ucl-agx')
  .wait(5000)
  .wait(5000)
  .end()
  .then(console.log)
  .catch(error => {
    console.error('Search failed:', error)
  })
