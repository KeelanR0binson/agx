const Nightmare = require('nightmare')
const nightmare = Nightmare({ show: false, height:768, width:1366})

var firstName = 'test2'
var surname = 'user2'
var email = 'testUser@agx.co.co.co2'
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
  //register
  .click('button[class="btn btn-primary pull-right"]')
  .wait(5000)

  //login
  .type('input[class="form-control profile_email"]', email)
  .type('input[class="form-control profile_password"]', password)
  //.click('button[class="btn btn-primary btn-login"]')
  .click('button[type="submit"]')

  //logged in?
  
  .wait(5000)
  .end()
  .then(console.log)
  .catch(error => {
    console.error('Search failed:', error)
  })
