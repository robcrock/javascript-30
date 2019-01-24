# Update CSS Variables with JS
Loved what we were able to accomplish today. The controls look nice and the end result is a fun way to manipulate hero images. The main point made was to learn about and leverage [CSS variables](https://www.w3schools.com/css/css3_variables.asp). Specifically, how to reference the var(-prop) with JavaScript and how to update the [documentElement](https://www.w3schools.com/jsref/prop_document_documentelement.asp).

In later lessons we used the generic [data-*](https://www.w3schools.com/tags/att_global_data.asp) property, but this was the first time Wes introduces us to this attribute. It makes getting clean data from DOM elements a breeze.

One way I drifted from the prescribe lesson here was in calling the event handler function [‘oninput’](https://www.w3schools.com/jsref/event_oninput.asp) rather than on mousemove. This event was a cleaner trigger IMHO.