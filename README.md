# Super Secret Message App

This secret message app allows users to share a customized link where the hash is an encoded version of a message that they would like to send to another user. The hash is created using built in JS methods.

## Table of contents

- [Overview](#overview)
  - [The project](#the-project)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The project

Users should be able to:

- Input a message in the text field
- Click 'Create' and receive a customized link to share
- Click 'Copy' to select the url in the text field and save to clipboard
- Enter the customized url in a web browser to dislay the initial message

### Links

- Live Site URL: [Super Secret Message App](https://christineaharper.github.io/secret-msg/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

This project was a great way to get more experience interacting with the DOM. I made the scrolling effect end with/display the final string in the array and played with the timing of the scrolling a little.

### Continued development

The scrolling text effect is definitely not accessible for screen readers. I am curious if the best workaround for an effect like this is an offscreen div (using 'sr-only' as a css class) with the same text as content? Would also really like to figure out where the delay is coming from (before the final element in the array is shown and the array clears).

### Useful resources

- [The Modern JavaScript Bootcamp](https://www.udemy.com/course/javascript-beginners-complete-tutorial/)
- [Typewriter Effect in JavaScript](https://www.youtube.com/watch?v=mULM6KcF_mo)
- [MDN - window.location](https://developer.mozilla.org/en-US/docs/Web/API/Window/location)
- [MDN - Nested Loops & Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [MDN - btoa()](https://developer.mozilla.org/en-US/docs/Web/API/btoa)
- [MDN - atob()](https://developer.mozilla.org/en-US/docs/Web/API/atob)

## Author

- Website - [Christine](https://github.com/christineaharper)
