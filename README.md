[![Netlify Status](https://api.netlify.com/api/v1/badges/efbc2191-12d0-46aa-9277-96192dd39533/deploy-status)](https://app.netlify.com/sites/zelda-tracker/deploys)
![Build and Deploy](https://github.com/tommyhama95/ZOoTR-Location-Tracker/workflows/Build%20and%20Deploy/badge.svg)

# Ocarina of Time Randomizer Tracker Website
This is a website/project created to help new players coming to the Ocarina of Time Randomizer community to get a better undestanding of all location chest/item and get to know what items certain checkables are depended on. 

This website/project is open source and you are free to make pull requests or send in ideas anytime! :heart_eyes:

## Tables of Content
1. [Plans for website](#Plans-for-website)
2. [Functionality list](#Checklist-for-functionality)
3. [Optionals/Improvements](#Optionals,-Improvements)
4. [Design and Structure list](#Checklist-for-design-and-structure)
6. [CI/CD related](#CI-and-CD-related)
7. [Code Conventions](#Code-Conventions)
8. [Codes for later](#Codes-for-later)

## Plans for website
- 1. Make card like appearances in order to split up checkable locations depending on areas and have a second item tracker that will open up disabled checks when item is required

- 2. Make Item tracker for locations to open when aquired the unlockable item for it.<br>
Eg: Hookshot is required to enter Forest Temple.

- 3. Make website/project to be PWA friendly and SEO optimized

- 4. Make it swipe-able in order to be further implemented as a PWA for later development

- 5. Add skulltula sanity, cow sanity, scrub salesman sanity, magic bean sanity

[To top :arrow_up:](#Ocarina-of-Time-Randomizer-Tracker-Website)

## Checklist for functionality
- [x] ~~Display cards for each area~~
- [x] ~~Fill cards with locations and make checkable~~
- [x] ~~Make global counter telling checked locations out of total~~
- [ ] Store process in localstorage for page refreshing. So that users don't loose progress accidently
- [ ] Make locations that require a certain item disabled
- [ ] Make global counter count only enabled checks
- [ ] Make item tracker-checker for opening locations that are LOCKED because of an item
- [ ] Item tracker should enable location that requires set item to open when checked

[To top :arrow_up:](#Ocarina-of-Time-Randomizer-Tracker-Website)
## Optionals, Improvements
- [ ] Make the global counter show available locations? (after functionality checklist is done)
- [x] If all checks done inside card, make it disabled or flashy green?
- [x] ~~Refactor project to be written in React~~

[To top :arrow_up:](#Ocarina-of-Time-Randomizer-Tracker-Website)
## Checklist for design and structure
- [x] Make cards align and scale according to width size (mobile friendly)
- [ ] Add Aria-Labels/alt attributes for SEO optimization and screen readers
- [ ] Find a proper color palette for cards and other elements
- [ ] Add a footer?

[To top :arrow_up:](#Ocarina-of-Time-Randomizer-Tracker-Website)

## CI and CD related
- [x] Buy Domain for the website
- [x] Deploy to the domain
- [x] Add CI tool for better code quality before deployment


[To top :arrow_up:](#Ocarina-of-Time-Randomizer-Tracker-Website)
## Code Conventions
**Variables, id and classes:**<br>
- Write variables that are mutable with `let` and `const` for immutable ones.
- Variables should be written with understandable names.
- Id and classes in CSS/SCSS is written with kebab-case.

**Javascript:**<br>
- Follow ES6 code syntaxes like arrow functions
 ```jsx
    const a = () => {...} 
 ```
 - Global or Environmental keys are to be all upper case and snake case
 ```jsx
    const API_KEY 
    const LOCATIONS 
 ```

[To top :arrow_up:](#Ocarina-of-Time-Randomizer-Tracker-Website) 

## Codes for later
To be filled out if needed

[To top :arrow_up:](#Ocarina-of-Time-Randomizer-Tracker-Website)  