# learn-karma

[![Build Status](https://travis-ci.org/dwyl/learn-karma.png?branch=master)](https://travis-ci.org/dwyl/learn-karma)
[![Code Climate](https://codeclimate.com/github/dwyl/learn-karma/badges/gpa.svg)](https://codeclimate.com/github/dwyl/learn-karma)
[![dependencies Status](https://david-dm.org/dwyl/learn-karma/status.svg)](https://david-dm.org/dwyl/learn-karma)
[![devDependencies Status](https://david-dm.org/dwyl/learn-karma/dev-status.svg)](https://david-dm.org/dwyl/learn-karma?type=dev)

A ***complete beginner's guide*** to using **Karma JavaScript Test Runner** to test your Web Applications.

- - -

![Dilbert Real Data](https://raw.github.com/dwyl/learn-karma/master/images/dilbert-performance-test.jpg "Real Data")

<small> Not only can *data* be "real" but so can *testing* (in "real" browsers)! </small>

## _Why_

(_Automatically_) Testing your work (_code_) is _essential_
for ensuring reliability in any software project.

The moment your team _stops_ testing (_but continues writing code_)
the project becomes "_unstable_" and eventually fails.

![jenga-falling](https://cloud.githubusercontent.com/assets/194400/19320846/da32c0d2-90aa-11e6-812f-4f9fb3fdce76.png)

### _Accelerating Test Automation_


(_Karma is Awesome_) ?

You don't have to *think* about switching contexts to run your tests.
Simply save the file you are working on and Karma's "_watcher_" will
automatically instruct all the connected browsers to re-run the tests.

Imagine you have 10 browsers you need to test your code against:
[Internet Explorer 7/8/9/10, Firefox 3.5/Latest, Chrome, Safari Mac/iOS, Opera]
If the target browsers are all on the machine that is running Karma,
you would simply add them to the configuration file and Karma would manage
them for you.

Any browsers on machines/devices can connect to Karma over the internet and
run tests simply by pointing the browser at the Karma server:
http://test.acme.com:9876/ *or* using a service like http://localtunnel.me
to make your development machine accessible outside of your network.

Once the browser is connected to Karma it will run all the tests for you
on auto-pilot and respond with test results.



## _What_ (is Karma) ?

If you've never _heard_ of Karma (_or tried it_),
prepare to be [_amazed_](https://youtu.be/x-skFgrV59A)! :-)

**Official Description**: Karma is a [_test automation_] tool that spawns a web
server and executes source code against test code for each of the browsers
connected. The results for each browser are examined and displayed via the
command line so developers can see which browsers and tests passed or failed.

In other words, you can **automatically** test all your front-end code
in **any** / **all** your target browsers each time you save your work.

## _Who_ (_Should Use Karma_) ?



## _How_?

### Get Started

If you are learning by cloning this repository

```sh
git clone https://github.com/dwyl/learn-karma.git
```
then install dependencies (karma and jasmine) locally:

```sh
npm install
```

Otherwise, if you are going to run Karma for all your projects
(because you think its *awesome*):

```sh
sudo npm install -g karma
```

As of version 0.12

```sh
sudo npm install -g karma-cli
```


#### Karama Configuration (File)

Run the Karma initilisation (*wizard*) to create your configuration file:

```sh
karma init
```

Go through each step and select the defaults.
You can always change them manually in your **karma.config.js** file.

Once you are through the wizard, initiate Karma:

```sh
karma start karma.conf.js
```

This will open a browser window (what ever the default on your computer is)
with the url: `http://localhost:9876/`

![Karma Chrome Connected](https://raw.github.com/dwyl/learn-karma/master/images/karma-first-start-connected-idle.png "Karma Chrome Connected")


>> I will need to come back to this tutorial later as have just been handed
> a ton of work that needs to be done **Today**! :-(
> if you can't wait read: http://www.tuesdaydeveloper.com/2013/06/angularjs-testing-with-karma-and-jasmine/




### Notes

#### Useful Links

- Project Site: http://karma-runner.github.io/
- Karma GitHub page: https://github.com/karma-runner/karma
- Karma Config File: http://karma-runner.github.io/0.8/config/configuration-file.html
- Sample Karma Config: https://github.com/karma-runner/karma/blob/v0.8.5/test/client/karma.conf.js
- Using Karma with Travis CI: http://karma-runner.github.io/0.10/plus/travis.html
- Jasmine Report: http://stackoverflow.com/questions/16684582/generate-jasmine-report-using-karma-runner
- ~~https://egghead.io/lessons/unit-testing-introduction-to-karma~~ (requires webstorm...)
- Non angular-specific: http://kroltech.com/2013/11/javascript-tdd-with-jasmine-and-karma


#### Using Karma with Travis CI

- http://karma-runner.github.io/0.8/plus/Travis-CI.html
- http://docs.travis-ci.com/user/gui-and-headless-browsers/

#### How-to Videos


+ "Testacular" (now Karma) Tutorial (_the original video_): http://www.youtube.com/watch?v=MVw8N3hTfCI (14:51)
instructs you to install Karma globally, uses Jasmine and heavily focussed on Angular so ignore those bits ...
+ Jesse Warden's Introduction To Karma: https://www.youtube.com/watch?v=FQwZrOAmMAc (35:22)
_misleadingly_ states that Karma is used "on top of `grunt`" (_globally installed_) and also focussed on Angular (_asumes lots of prior knowledge_).



#### Tutorials

- Angular-specific: http://www.yearofmoo.com/2013/01/full-spectrum-testing-with-angularjs-and-karma.html
- Angular (Again): http://www.tuesdaydeveloper.com/2013/06/angularjs-testing-with-karma-and-jasmine/
