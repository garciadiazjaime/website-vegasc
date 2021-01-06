# Powered
[Sofware Development Tijuana](https://mintitmedia.com/)

Installation Steps
------

* Clone project
* Checkout dev branch
* Create your branch (topics/feature)
* Create python env (recommended: https://virtualenvwrapper.readthedocs.org/en/latest/)
* Install python packages: `npm run install-dj`
* Install node packages: `npm install`
* Install bower packages: `npm run install-bower`
* Run the server: `npm run server`
* Watch js changes: `npm run watch-js`
* Install rbenv (ruby 2.3.0) https://github.com/rbenv/rbenv#homebrew-on-mac-os-x
* Install ruby packages (gem install compass, gem install bootstrap-sass)
* Watch sass changes: `npm run watch-css`

Notes
------

* SASS files are in **sass_components**
* To improve speed when generating sprites, install oily (gem install oily_png) (http://compass-style.org/help/tutorials/spriting/)


## Env
```
export PATH="~/.pyenv/versions/3.5.3/bin:${PATH}"
virtualenv vegasc
source vegasc/bin/activate
```
