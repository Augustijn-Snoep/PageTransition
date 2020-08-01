# PageTransition
A easy to use transition between different pages and a load screen for the first site visit

## Installation
Clone or download the git repo into your folder


## Usage of the javascript files
In your project look for the next folder ```src/js/modules/``` and add the next files:
```firsVisit.js``` and ```transition.js```

In your project look for this folder ```src/js/index.js/``` and add the following code in the ```index.js```
```pageTransition
import firstVisit from './modules/firstVisit';
import transition from './modules/transition';

firstVisit();
transition();
```

## Usage of the styling
In your project look for the next folder ```src/scss/components/``` and add look for the file:
```_all.scss``` and import the following ```_page-transition.scss```

Now the ```/src/scss/components/_all.scss``` should look like:
```pageTransition
@import '_page-transition';
```

## Setup of home page
In your ```index``` page place the following classname ```page--home``` to your body like ```<body class="page--home">``` and place the code what u see under this paragraph between the ```<body>``` and ```<main>```
```pageTransition
<div class="page--home__transition"></div>

<div class="transition shrink">
    <div class="transition__bg">
        <div class="transition__title">
            <h1>
                Some text
            </h1>
        </div>
    </div>
</div>
```

## Setup of the other pages
In the other ```page templates``` place the following classname ```page--'the-page-name'``` to your body like ```<body class="page--'the-page-name'">``` and place the code what u see under this paragraph between the ```<body>``` and ```<main>```
```pageTransition
<div class="transition shrink">
    <div class="transition__bg">
        <div class="transition__title">
            <h1>
                Some text
            </h1>
        </div>
    </div>
</div>
```

## What now?
If this steps won't work in your project, you always can send a email to ```sayhi@augustijn.studio``` with your question and we will help you out asap.

## Goodluck
