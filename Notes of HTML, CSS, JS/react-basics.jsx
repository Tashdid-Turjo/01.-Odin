// From YT: SuperSimpleDev. Link: https://www.youtube.com/watch?v=TtPXvEcE11E

/*
-> Keyword:
           -> 
*/




// ?? React Basics, JSX:
// !! 1. React & ReactDOM:
// React    -> Shared features. 
//          -> It's an External Library (other's code that we can use for our website). 
//          -> It's more simpler than DOM of JS. 
//          -> Also, JSX finds errors more easier.
//          -> Here, each HTML element has closing tag(like- input, img, etc.). We can use a shortcut like this {Only when there's nothing to write inside input element}- " <input /> ", instead of this- " <input></input> ".

// ReactDOM -> features specific to websites. For creating websites, React & ReactDOM is used, where for creating mobile apps, React & ReactNative is used.

// JSX      -> JavaScript XML. Enhanced version of JS is- React. We can write HTML directly in our JS code. It's JS with extra features. But web browser doesn't understand JSX, only understands JS. So we need to translate JSX into JS. For that, we use babel external library which is shown in the below Ex.





// !! 2. Ex:
// HTML:
/*
  <body>
    <!-- // TODO: Where every elements of React will be stored inside of this js-container. (MANDATORY- this js-container must exist before your script runs.) -->
    <div class="js-container"></div>

    <!-- // TODO: for loading js code from another website. (NOT MANDATORY) -->
    <script src="https://unpkg.com/supersimpledev@3.2.1/external-library.js"></script>

    <!-- // TODO: <!-- React + ReactDOM (MANDATORY) -->
    <script src="https://unpkg.com/supersimpledev/react.js"></script>
    <script src="https://unpkg.com/supersimpledev/react-dom.js"></script>

    <!-- // TODO: code for Babel. Babel -> JS compiler. It translates other languages(JSX, etc.) into JS. -->
    <script src="https://unpkg.com/supersimpledev/babel.js"></script>
    
    <!-- // TODO: This "text/babel" tells babel to translate all codes into JS. -->
    <script type="text/babel">
      
      <!-- // TODO: Inside this JS script, we can write HTML code. -->
      <!-- // TODO: This const button is not the DOM element, rather, it's a React Element. -->
      <!-- // TODO: Using JS DOM, where we use "createElement". -->
      <!-- // TODO: Ex of that JS DOM:  -->
      <!-- // TODO: const button = document.createElement('button'); -->
      <!-- // TODO: button.innerHTML = 'hello'; -->
      const button = <button>hello</button>;

      const container = document.querySelector('.js-container');

      <!-- // TODO: To set-up react, "ReactDOM.createRoot()" is used. -->
      <!-- // TODO: .render -> one of React's feature. It's to display something. -->
      <!-- // TODO: This message/text will add in the webpage's element's inside "js-container" class's message/text. -->
      <!-- // TODO: In this method, we can't use multiple elements at a time in the webpage.
      ReactDOM.createRoot(container).render('Welcome to SuperSimpleDev React Course');
      
      <!-- // TODO: Instead of upper line's code, you can do this (It will show that button in the webpage & here, container is the root/parent element & button is its child element):
      <!-- // TODO: In this method, we can't use multiple elements at a time in the webpage.
      ReactDOM.createRoot(container).render(button);
    </script>
  </body>

*/


// TODO: i. In that Ex -> Inside HTML Code (Loading JS code from another website):
<body>
    {/* <!-- !! for loading js code from another website. --> */}
    <script src="https://unpkg.com/supersimpledev@3.2.1/external-library.js"></script>
</body>

// N.B: This is called External library.
// N.B: External Library -> a code that's outside of our computer / someone else's code that's written in a different website.

/*
<!-- // TODO: ii. In that Ex -> To set-up react, "ReactDOM.createRoot()" is used. -->
    ReactDOM.createRoot(container).render('Welcome to SuperSimpleDev React Course');

*/


/*
<!-- // TODO: iii. To add/use multiple elements at a time in the webpage. -->
<script type="text/babel">
    const div = (
        <div>
            <button>hello</button>
            <p>paragraph text {2 + 2}</p>   // Here, it will show 4. Cz, inserting JS into JSX elements.
        </div>
    );
    
    const container = document.querySelector('.js-container');

    <!-- Both 'button', 'p' elements will be inside container's child elements. --> 
    ReactDOM.createRoot(container).render(div);
</script>

*/





// !! 3. Ex:
// Task: Show a live clock like this- Current Time: 21:51:43

// Ans:
// HTML:
/*
  <body>
    <div class="js-container"></div>

    <script src="https://unpkg.com/supersimpledev/dayjs.js"></script>

    <script src="https://unpkg.com/supersimpledev/react.js"></script>
    <script src="https://unpkg.com/supersimpledev/react-dom.js"></script>

    <script src="https://unpkg.com/supersimpledev/babel.js"></script>

    <!-- // TODO: METHOD1(Better for the initial message part):
    <script type="text/babel">
      <!-- // TODO: In this method, it will show the very first message before 1s: -->

      <!-- // TODO: This is only for the initial render (show something immediately before 1 second passes). Then this doesn't show after that. -->
      <!-- // TODO: Here, changed the Current Time into this text for better understanding. -->
      const paragraph = <p>CurrentYOO {dayjs().format('HH:mm:ss')}</p>;

      const container = document.querySelector('.js-container');
      const root = ReactDOM.createRoot(container);
      root.render(paragraph);

      setInterval(() => {
        <!-- // TODO: Here, changed the Current Time into this text for better understanding. -->
        const paragraph = <p>CCCC {dayjs().format('HH:mm:ss')}</p>;
        root.render(paragraph);
      }, 1000);
    </script>


    <!-- // TODO: ------------------------------------ OR ------------------------------------ -->
    
    
    <!-- // TODO: METHOD2:
    <script type="text/babel">
        <!-- // TODO: In this method, the initial message won't show like the previous code. Thus, the first method is better than this one:

        const container = document.querySelector('.js-container');
        const root = ReactDOM.createRoot(container);

        setInterval(() => {
        <!-- // TODO: This message will show every time (except for that very first time)
        root.render(<p>Current time: {dayjs().format('HH:mm:ss')}</p>);
        }, 1000);
    </script>

  </body>
*/





// ?? Components, Props, Fragment, Start the Chatbot Project:
// !! Component: 
//              -> A piece of website. Like- header, footer, navbar, etc. 
//              -> Component name must start with a capital letter, which is PascalCase (each word starts with capital letter, like- ChatInput).



// !! Same Work but different syntax for React(supersimpledev said, but gpt saying- If ChatInput uses hooks, {ChatInput()} becomes invalid):
/*
function ChatInput() {
  .....
}

<div>
  {ChatInput()}
</div>

## vs ##

<div>
  <ChatInput></ChatInput>
</div>

*/



// !! For grouping elements together, without creating extra <div>, React has Fragment(<></>):
// Ex:
// instead of this-
/*
<div>
  <input></input>
  <button>Send</button>
</div>

<!-- We can do this- -->
<>
  <input></input>
  <button>Send</button>
</>

<!-- N.B: Advantage is that- in webpage's inspect, this extra div element won't be created. -->
*/


// !! in the below code, size 25 isn't about the input box, rather, 25 means -> 25 characters will be capable to be shown.
// <input placeholder="Send a message to Chatbot" size="25" />



// !! props (property): -> makes our component reusable.
/*

function ChatMessage(props) {       <!-- This props can contains every attributes that we give to this component -> " <ChatMessage message="hello chatbot" /> " -->
  return (
    <div>
      <p>hello chatbot</p>
      <img src="user.png" width="50"></img>
    </div>
  );
}

const app = (
  <>
    <ChatMessage message="hello chatbot" />  <!-- Here, message is an attribute. -->
  </>
);

*/



// !! Shortcuts:
/* 

<!-- Destructuring: -->
const message = props.message;
const sender = props.sender;

vs

const { message, sender } = props;

*/

/*

<!-- Destructuring: -->
function ChatMessagte


*/

// !! First revise the previous lesson + vdo, then go to -> 3. State, event handlers, chatbot project features.
