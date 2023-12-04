/*
Instructions:

In this activity, there are two steps

First, you will fetch all the weather data from the OpenWeather API
Second, you will identify the specific weather data to show based on a given city name

1. Asynchronously fetch data from different URLs and store the data in the `dataArray`.
2. Filter the data based on the city name.
3. Display the data for the city of Lisbon by manipulating the DOM

Hints:
Use the await keyword for both sending the request out to URL and fetching the data response as shown in the fetch example above.

Be sure to parse the received data as text, just like the example, in order to proceed with the second step of this exercise.
*/




// * the entire next bit is encapsulated in a "wrapper function" aka IIFE
// * IIFE = immediately invoked function expression
// * IIFE creates a new scope for everything inside it, it's now -not part of global scope anymore
// * since inside the IIFE is contained, and not accessible outside the scope, these aren't global variables
// * async/await is not allowed at "top level" of a script 
// * fetchData() is IIFE, and does not call itself until a SNEAKY SNEAK little empty parenthesis pair down at the way way bottom of all this code! })(); is it finally calling itself!
(async function fetchData(dataArray = []) {
  // Performs a fetch request with the passed URL and returns the data as text asynchronously
  // * below, ANOTHER async function is declared: makeRequest()
  // * the makeRequest() function is stored in a variable 
  const makeRequest = async function (url) {
    // * below fetches data from a specified url by making an HTTP request
    // * it will pause and await until the Promise returned by fetch is resolved 
    const response = await fetch(url);
    // * then, below it will store the fetched data response as an HTTP response Object in the data variable 
    // * it will pause and await until the Promise returned by response.text() is resolved 
    // * once resolved, it will extract the .text data from the response Object
    // * the variable data now contains the text content of the response Object
    const data = await response.text();
    // * return data variable so it can be used elsewhere
    return data;
  };




  // * WTF is @param???? WTF is the @ symbol doing?
  // * the comments below: use JSDoc, a markup language of JS documentation syntax 🤯
  // * JSDoc comments can be processed by various tools and integrated into documentation generators!
  // * the tools can extract information from the comments then produce documentation from them 🤯
  // * the slash double asterisk /**  begins the comment block
  // * each line begins with * (lol, like how i've been doing it for months.. guess i need to find a new symbol... i hope % or ~ aren't taken! 🤪)
  // ~ anyway, data and dataArr are the names of the parameters being documented
  // ~ the text after the dash  - provides a description of what kind of data the parameter should contain
  // ~ some special JSDoc tags: 
  // ~ @param: describes a function parameter
  // ~ @returns or @return: describes the value that a function returns
  // ~ @description: provides a long description of a function or code
  // ~ @example: an example of how to use a function or code snippet



  // don't change this function, you will need to pass the Lisbon data to it to complete this exercise
  /**
   * @param data - the first parameter for this function should be your variable with the stored Lisbon weather data
   * @param dataArr - the dataArray variable which should hold all four data responses from the given URLs
   */

  // ~ fyi, we're still inside the wrapper the function
  // ~ addLisbonToDocument, an arrow function that parses JSON data and adds it to Document
  // ~ (data, dataArr) are parameters 
  // ~ parameters are placeholders for what the function expects
  // ~ parameters are part of a function declaration
  // ~ an argument is the actual value passed to function
  // ~ arguments are the actual values that correspond to the parameters in the function
  // ~ when a function gets CALLED is when you pass arguments that match the parameters

  const addLisbonDataToDocument = (data, dataArr = []) => {
    // validate data format and data

    // ~ never taught us JSON.parse()!!! Ugh..it's SO FREAKIN' much...
    // ~ to quote my fave movie... "Hold onto your butts!"


    // ~ JSON (pronounced JAY-sawn) = JS Object Notation
    // ~ JSON gives us data as readable text using Key/Value pairs
    // ~ JSON is like a JS Object, but is stored as all strings with " "s around the "key": "value" pairs
    // ~ JSON.parse() is a built-in JS Method 
    // ~ "parse" definition in english: to examine and extract meaningful info
    // ~ JSON.parse() examines a JSON formatted string and extracts/converts it into a true JS Object

    // ~ so anyway! below, when you see data = JSON.parse(data), WITHOUT data being declared a variable with let, const, or var... it's assumed that data is a global variable
    // ~ but why assume? we could be specific to eliminate problems!!
    // ~ it should be written like this: const data = JSON.parse(data);

    // ~ anyway, finally! below, const data is converting a JSON formatted string into a JS Object
    // ~ the parsed data is then stored cyclically back into the data variable. TRICKY!
    // ~ this effectively OVERWRITES the original JSON string with the newly parsed JS Object 🤯
    data = JSON.parse(data);

    // ~ if logic: checks if the parsed data Object has a Key named "name" whose value is NOT exactly equal to 'Lisbon'
    // ~ if this is true, meaning if none of the Keys' of name has a Value of Lisbon, then the entire data Object is set to null
    // ~ basically meaning, if the Key/Value of name: "Lisbon" is present anywhere within the Object, data will not be null and we'll be able to proceed 😵‍💫🤪
    if (data.name !== 'Lisbon') {
      data = null;
    }

    // create DOM element for Lisbon Data and add it to document
    // ~ creates an element called "div" and saves it inside the arrayLengthDiv variable
    let arrayLengthDiv = document.createElement('div');

    // ~ uses the JS property innerHTML to grab the "inner HTML code guts" of the div we just created and instead sets it to a string that contains an embedded div with the id of "array-length-div" 
    // ~ the document will read this string as actual HTML and will create this dynamically
    // ~ the newly named div with the id of "array-length-div" will then use a template literal to write directly to HTML
    // ~ also within this HTML string, it will actually display the text "Data Items:" to the page followed by the length of the dataArray we have yet to encounter (it's in the makeRequest function below)
    arrayLengthDiv.innerHTML = `<div id="array-length-div">Data Items:${dataArr.length}</div>`;
    // ~ appends the div at the end of the Document body
    document.body.appendChild(arrayLengthDiv);

    // create DOM element for Lisbon Data and add it to document
    // ~ dynamically creates another div in HTML and saves it to the lisbonDiv variable
    let lisbonDiv = document.createElement('div');

    // ~ uses the JS property innerHTML to grab the "inner HTML code guts" of the div we just created and instead sets it to a string that contains an embedded div with the id of "lisbon-data-div" 
    // ~ the document will read this string as actual HTML and will create the element dynamically
    // ~ the newly named div with the id of "lisbon-data-div" will then use a template literal to write directly to HTML
    // ~ also within this HTML string, it will actually display the text "Weather:" to the page followed by the the stringified version of the JSON data we've been working with 
    // ~ JSON.stringify() is a built-in JS Method that converts a JS Object back into JSON string-format
    lisbonDiv.innerHTML = `<div id="lisbon-data-div">Weather:${JSON.stringify(data)}</div>`;
    // ~ appends the div at the end of the Document body (so after the arrayLengthDiv)
    document.body.appendChild(lisbonDiv);
  };

  // ~ remember, we're still in the wrapper function, so this is asynchronous too
  // ~ this is an array of a few API endpoint urls about certain cities
  const urlArray = [
    'https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=7b68bf0910a2a7530b9929d01904bc79',
    'https://api.openweathermap.org/data/2.5/weather?q=Houston&APPID=7b68bf0910a2a7530b9929d01904bc79',
    'https://api.openweathermap.org/data/2.5/weather?q=Lisbon&APPID=7b68bf0910a2a7530b9929d01904bc79',
    'https://api.openweathermap.org/data/2.5/weather?q=Baltimore&APPID=7b68bf0910a2a7530b9929d01904bc79',
  ];

  // ~ uses forEach Loop to iterate over each of the above urls
  // ~ by using async here, we mean for the following function to always return a Promise
  // ~ Promises are an entire face melting situation i'll explain later
  urlArray.forEach(async (url) => {
    // ~ since we've just declared that we're doing something asynchronous with async, we can now use await
    // ~ using await means the loop will pause and wait for the Promise returned to resolve before moving on to the next iteration of whatever it's doing
    // ~ except THESE TRICKY TRICKSTERS! for this particular async/await function they straight up left out AWAIT
    // ~ ugh, the await is "implied" by using .then() since .then() is a method of Promises
    // ~ why do this to beginners without explaining it? 
    // both styles are acceptable, however many prefer using await bc it explicitly states and clearly indicates what the code is doing 🙄 
    makeRequest(url).then(function (result) {

      // STEP 1: Store `result` inside the variable dataArray, this is required to pass this exercise

      // ~ forEach url, an asynchronous arrow function will perform the following operations:
      // ~ the code inside .then() won't execute until the Promise returned by makeRequest(url) is resolved
      // ~ so it ensures the loop iterates sequentially, AWAITING each one to finish before moving on the next
      // ~ once the Promise resolves, the first thing makeRequest(url) does is .push() the result of the Promise into the dataArray
      dataArray.push(result);
      // ~ if the length of dataArray is exactly equal to the length of the urlArray, perform the following tasks
      // ~ this helps to check if asynchronous operations have completed before moving on
      if (dataArray.length == urlArray.length) {

        // STEP 2: Loop through each item in the `dataArray` and use the logic below by uncommenting the code to see if it is the correct weather data for `Lisbon`

        // ~ secondly, if each async operation has completed, it's going to iterate over the dataArray again
        // ~ forEach(item) in the dataArray an arrow function will perform the following operations:
        dataArray.forEach((item) => {
          // ~ because each URL result is returning a JSON string-formatted response, it's being parsed into a JS Object again
          // ~ it then checks if the newly parsed JSON Object has a property(Key) named "name", that's exactly equal to "Lisbon"
          // ~ item has changed meaning and now refers to the data fetched by the API
          // ~ while it's common to use terms like "item" or "element" as generic names, i find it easier for clarity to be very explicit
          // ~ item could be named 2 different more clear names: one could be arrayItem and one could be dataItem
          if (JSON.parse(item).name == 'Lisbon') {

            // You will need to change the itemInDataArray variable to match your own variable that stores the current item in array that you are checking

            // ~ if this returns true and name: "Lisbon" is present, it calls addLisbonDataToDocument()
            // ~ remember that const addLisbonDataToDocument = (data, dataArr = []) => takes 2 parameters: data, and dataArray
            // ~ we pass item as the argument to the data parameter and dataArray as the argument to the dataArray parameter
            addLisbonDataToDocument(item, dataArray);
          }
        });
        // STEP 3: Return dataArray
        // ~ returns the dataArray from the asynchronous function for use outside this long ass wrapper function
        return dataArray;
      }
    });
  });
  // ~ remember an IIFE must immediately invoke itself, that's the final 2 ()'s here
})();

//don't change this code
if (typeof module !== 'undefined') {
  module.exports = { fetchData };
}

/*
------Challenges:

1. doing enough research to deeply understand what a wrapper function and async/await do

2. doing enough research to deeply understand what a a dang Promise is. it's much more complicated when not just dealing with returning an HTTP request. def went down quite the rabbit hole

3. finding out that my beloved asterisk is already part of a  markup language. temporarily, i'll use a ~ symbol from now on until i take the time to learn how to JSDoc correctly

4. notice, none of this was taught nor mentioned: just thrown out there. i truly don't understand how MItxPro Emeritus guarantees or even know what nor ho much of this students actually learn. since they give us the Solution Files, so much important info could be 100% skipped over and never understood

5. i think all this work i'm doing to figure out and explain in extreme detail what all this code is doing might be called reverse engineering... which is great! quite the skill!


6. Promise Face Melters: 

~ in a function declaration: async means the function itself is asynchronous and will always return a Promise

~ in a function call: async means that the function being called is expected to return a Promise (it does not automatically make the function it's contained in asynchronous by itself) it just allows the use of await for that specific function call

~ a Promise is an Object that has 2 Methods: .then() and .catch()
~ a Promise basically replaces a callback function for asynchronous operations in ES6
~ a Promise is either resolved or rejected
~ a Promise Object is always expected when we use async

~ the Promise Object represents an eventual completion or failure of an asynchronous operation
~ it also will carry with it: the resulting value of said completion or failure
~ when created, a Promise is in a "pending" state, once completed successfully it's in "fulfilled" state, and if it encounters an error it's in "rejected" state


Callback vs Promise Example:

Callback Style:
---------------
function readFileAsynchronously(fileName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fileContents = `Contents of ${fileName}`;
      resolve(fileContents);
        reject(new Error(`Error reading ${fileName}`));
    }, 1000);
  });
}

Promise Style:
--------------
const fileName = "example.txt";

readFileAsynchronously(fileName)
  .then((contents) => {
    console.log(`File contents: ${contents}`);
  })
  .catch((error) => {
    console.error(`Error: ${error.message}`);
  });

*/


