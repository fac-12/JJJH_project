# Four Digital
We build websites that work for all.
[Four Digital website](https://fac-12.github.io/JJJH_project/)

## Why?

We were given the challenge of creating a portfolio page for our team of developers. The website needed to be responsive, mobile friendly and accessible.

## What?

We wanted to create a site that looked great but also presented all the information necessary for potential clients to learn enough about Four Digital to want to get in contact with us.

We decided to have 6 sections:

*Navbar*
* A menu with links to About / Team / Contact
* Fixed to the top of the screen, so it stays with you as you scroll up/down the page
* Responsive to mobile, with a show/hide burger menu button

*Heading*
* A big cover image
* Our team name and tag-line over the image
* Both responsive to screen size

*About*
* A friendly image of our team in a work environment
* A short paragraph introduciton
* Image / text are inline for desktop, and stacked for mobile

*Team*
* A team section introducing each member
* Seperate photos, bios and Github/LinkedIn/CodeWars links
* Flexible layout depending on screen size

*Contact*
* A form section for sending us an email
* Additional information with our phone number, email and social links  
* A Google maps iframe with our location
* Flexible layout depending on screen size

*Footer*
* Copyright notices


## How?

### Planning our work

- Started off with a brainstorm as a group, after reading the user stories.
- Outlined the structure of the website on the whiteboard to have a visual guide for our subsequent work.
- Created a github repository and created a basic html file while raising a number of issues related to the brief and user stories.

### Division of tasks
- For the first afternoon, one pair worked on the Headline and About sections and the other pair working on the Team and Contact sections.
- Following this pairs swopped frequently and both pairs were in constant communication

### Lessons
- Over the build process the team was able to come up with a clear process for commiting changes locally, pushing to github, making a pull request and merging to the master branch. After an initial error on the first day, the team was very careful to ensure that changes were committed locally before pulling from origin/master and merging into the local branch.
- Accessibility needs to be incorporated from the beginning of the project. We allocated time for one pair to assess this at the end, but this made any subsequent changes complicated since changes were made throughout the files that the other pair were doing finishing touches on.
- We discovered that digital camera photo files have an orientation tag that made them rotate the wrong way
[Stack Overflow explanation](https://stackoverflow.com/questions/20600800/js-client-side-exif-orientation-rotate-and-mirror-jpeg-images)
- We also found an interesting bug when using the hover property with Flexbox. We found that our CSS wasn't appearing consistently when hovering over elements positioned with flexbox. [This Stack Overflow post](https://stackoverflow.com/questions/35858680/hover-effect-not-working-with-flexbox-in-chrome) revealed a solution where you give your Flex container class a `z-index: 1;`.   
- We initially found our images weren't appearing on Github pages. The solution was to double check our `<img src"">` attributes and consistent use of lowercase `.jpg` in our image files.   


### Stretch Goals
- The nav bar is fixed and covers up text when user has navigated to a section
- In the Team section through using Flexbox wrap, the photos are going from column on mobile, to 2 photos by 2 photos, to 3 photos and 1 photo below and then 4 in a row. For design purposes we would prefer the photos to go from column on a mobile, to 2 photos by 2 photos, and then to a row of 4.
- Change the icons from the webfont pack to ones we have selected and downloaded. That way users are not having to download resources they don't need.
