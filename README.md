JQuery Dots
=======================

Animates an element's content using dots to show the user a task is in progress.

###Example

Animate text in a submit button
`<input type="submit" id="my-submit" value="Save" />`

On a submit callback:
`$('#my-submit').startDots({text: 'Saving', interval: 1000});`

Will animate the text *Saving...* adding a dot each second to a max of 3.

When the long task has finished, stop the animation using this code:
`$('#my-submit').stopDots({text: 'Saved!'});`