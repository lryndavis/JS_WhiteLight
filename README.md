# White Light Vintage

By Lauryn Davis

4.16.2016

White Light Vintage is an eCommerce site for my business built in ember.js and backed by Firebase; it will serve as my final project in Javascript at Epicodus. It is currently utilizing Paypal as a payment platform, although this will likely be updated in the near future.

View in action on [Heroku](https://secure-waters-85955.herokuapp.com/)

##Project Objectives

* Create an attractive eCommerce site in ember.js with a functioning payment platform
* Data is stored in and retrieved from Ember Data models and Firebase
* Components are used to create display and behavior for templates
* Implement user authentication
* Utilize computed properties, services, and helpers

##Known Bugs

* As of 4.16.2016, user authentication is down due to an unknown bug that likely manifested during a merge. I am currently working on fixing this issue.
* Product photos need to be edited for size and entered into Firebase in base64 to prevent slider image gallery sizing issue.
* Dropdown menu will only close when clicked in dropdown component, will stay open if clicked elsewhere on the page. I am currently experimenting with implementing a ember-cli dropdown add on.
* Checkout system is still very alpha and will be updated with improved functionality, including itemized invoices and dynamically generated shipping costs.
* Views are a bit wonky on mobile; this issue is currently being remedied.

##Technologies Used

* Ember
* Node
* Bower
* HTML
* SCSS
* Firebase
* Bootstrap
* Moment.js
* Google Fonts

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <https://github.com/lryndavis/JS_WhiteLight>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

##### License

*This software is licensed under the MIT license.*

&copy;2016 **Lauryn Davis**
Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
