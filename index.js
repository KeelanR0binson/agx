const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: true, height:768, width:1366})

var firstName = 'test'
var surname = 'user'
var email = 'testUser@agx.co.co.co'
var phone = '99999999'
var password = 'password'

nightmare
  //visit site
  .goto('https://apps.fliplet.com/ucl-agx')
  //get to the page with the login button
  //NOTE: the integer suffix can change typically with republishing
  //simply change the integer to the new value found through inspect
  .click('.swiper-button-next-2464314')
  //click login
  .click('input[value="Login "]')
  //go to registration
  .goto('https://apps.fliplet.com/v1/apps/11449/pages/173888/view')
  //type name
  .type('input[id="First Name"]', firstName)
  //type surname
  .type('input[id="Last Name"]', surname)
  //type email
  .type('input[id="Email"]', email)
  //type phone
  .type('input[id="Telephone"]', phone)
  //type password
  .type('#Password', password)
  //confirm password
  .type('#confirmPassword', password)
  //wait for testing
  .click('button[class="btn btn-primary pull-right"]')
  .wait(5000)
  .end()
  .then(console.log)
  .catch(error => {
    console.error('Search failed:', error)
  })
