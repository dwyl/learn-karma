learn-karma [Work-in-Progress]
===========

Dive into Karma JavaScript Test Runner

- - -

![Dilbert Real Data](https://raw.github.com/nelsonic/learn-karma/master/images/dilbert-performance-test.jpg "Real Data")

Not only can *data* be "real" but so can *testing* (in "real" browsers)!

#### What is Karma?

If you've never heard of Karma, prepare to have your mind blown! :-)

**Official Description**: Karma is a [test automation] tool that spawns a web 
server and executes source code against test code for each of the browsers 
connected. The results for each browser are examined and displayed via the 
command line so developers can see which browsers and tests passed or failed.

In other words, you can **automatically** test all your front-end code
in **any** / **all** your target browsers each time you save your work.

#### Why is Karma Awesome?

You don't have to *think* about switching contexts to run your tests.
Simply save the file you are working on and Karma's watcher will 
automatically instruct all the connected browsers to re-run the tests.

Imagine you have 10 browsers you need to test your code against:
[Internet Explorer 7/8/9/10, Firefox 3.5/Latest, Chrome, Safari Mac/iOS, Opera]
If the target browsers are all on the machine that is running Karma, 
you would simply add them to the configuration file and Karma would manage 
them for you.

Any browsers on machines/devices can connect to Karma over the internet and 
run tests simply by pointing the browser at the Karma server:
http://test.acme.com:9876/

Once the browser is connected to Karma it will run all the tests for you
on auto-pilot and respond with test results.


#### Get Started

If you are learning by cloning this repository

```sh
git clone git@github.com:nelsonic/learn-karma.git
```
then install dependencies (karma and jasmine) locally:

```sh
npm install
```

Otherwise, if you are going to run Karma for all your projects 
(because you think its *awesome*):

```sh
sudo npm install -g karma
````

#### Karama Configuration (File)

Run the Karma initilisation (*wizard*) to create your configuration file:

```sh
karma init karma.config.js
```

Go through each step and select the defaults.
You can always change them manually in your **karma.config.js** file.

Once you are through the wizard, initiate Karma:

```sh
karma start karma.config.js 
```

This will open a browser window (what ever the default on your computer is)
with the url: `http://localhost:9876/`

![Karma Chrome Connected](https://raw.github.com/nelsonic/learn-karma/master/images/karma-first-start-connected-idle.png "Karma Chrome Connected")


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

#### How-to Videos

- Testacular Tutorial (still relevant): http://www.youtube.com/watch?v=MVw8N3hTfCI

#### Tutorials

- Angular-specific: http://www.yearofmoo.com/2013/01/full-spectrum-testing-with-angularjs-and-karma.html
- Angular (Again): http://www.tuesdaydeveloper.com/2013/06/angularjs-testing-with-karma-and-jasmine/
