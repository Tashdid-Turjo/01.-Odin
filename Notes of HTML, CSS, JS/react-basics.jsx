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
      <!-- // TODO: In JS DOM, where we use "createElement". This " const button = <button>hello</button>; " is a React Element. -->
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
// Task: Show a live clock like this- Current Time: 21:51:43 (time will be updated like exact live clock)

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
      <!-- // TODO: Here, changed the "Current Time" into this text- "CurrentYOO" for better understanding in the webpage. -->
      const paragraph = <p>CurrentYOO {dayjs().format('HH:mm:ss')}</p>;

      const container = document.querySelector('.js-container');
      const root = ReactDOM.createRoot(container);
      root.render(paragraph);

      setInterval(() => {
        <!-- // TODO: Here, changed the "Current Time" text into this text- "CCCC" for better understanding in the webpage. -->
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
      <!-- // TODO: This message will show every time (except for that very first time. So, in the very first time, no text will be shown in the webpage for like kinda 1s.)
      root.render(<p>Current time: {dayjs().format('HH:mm:ss')}</p>);
      }, 1000);
    </script>

  </body>
*/





// ?? Components, Props, Fragment, Start the Chatbot Project(You can see more about chatbot project in my github repo's. Go through the commits from first to last throughly.):
// GitHub Repo Link: https://github.com/Tashdid-Turjo/ChatBot-Project
// !! Component: 
//              -> A piece of website. Like- header, footer, navbar, etc. 
//              -> Create our own HTML elements.
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


// !! in the below code, size 25 isn't about the input box's size, rather, 25 means -> 25 characters will be capable to be shown in the input box.
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

<!-- Destructuring: (Taking the stuff out of the object.) -->
function ChatMessage (props) {
  const message = props.message;
  const sender = props.sender;
}
  
vs

function ChatMessage (props) {
  const { message } = props;
  const { sender } = props;
}

vs (more shortcut)

function ChatMessage (props) {
  const { message, sender } = props;
}

vs (most shortcut {destructuring parameter directly at the top})

function ChatMessage ({ message, sender }) {
  .....
}

*/



// !! Know that, below the code, it's not full jsx, rather, it's js. Only the portion inside of return (...), that's the jsx. So here, if-statement is js, not jsx:
/*

function ChatMessage({ message, sender }) {
  if (sender === 'robot') {
    return (
      <div>
        <img src="robot.png" width="50" />
        {message}
      </div>
    )
  }

  <!-- Inside return (...) is jsx -->
  return (
    <div>
      {message}
      <img src="user.png" width="50" />
    </div>
  )
}

*/



// !! Using JS's Guard / And Operator (&&) in jsx:
const result = value1 && value2;          // Here, value1 is the condition & value2 is the result; meaning -> if value1 is true then the result is value2.
const result = value1 ? value2 : value3;  // Ternary: Here, if value1 -> result is value 2; else -> result is value3.

// Ex:
/*

<!-- if this is the if-condition: -->
if (sender === 'robot') {
  return (
    <div>
      <img src="robot.png" width="50" />
    </div>
  )
}

<!-- Then Inside jsx file, we can write this: -->
return (
  <div>
    {sender === 'robot' && <img src="robot.png" width="50" />}
  </div>
)


*/



// !! Instead of variable, best practice is to use component. Bcz, it gives extra features like -> props.
// Ex:
/*

<!-- Instead of below code(variable): -->
const div = (
  <>
    <ChatInput />
    <ChatMessage 
      message="hello chatbot" 
      sender="user" 
    />
    <ChatMessage 
      message="hello! How can I help you?"
      sender="robot" 
    />
    <ChatMessage 
      message="can you get me todays date?" 
      sender="user" 
    />
    <ChatMessage 
      message="Today is 14 January." 
      sender="robot" 
    />
  </>
);


<!-- Use component(that will give extra feature like- props)(In this below code, there's component{ChatInput, ChatMessage} inside of another component{App}.): -->
function App() {
  return (
    <>
      <ChatInput />
      <ChatMessage 
        message="hello chatbot" 
        sender="user" 
      />
      <ChatMessage 
        message="hello! How can I help you?"
        sender="robot" 
      />
      <ChatMessage 
        message="can you get me todays date?" 
        sender="user" 
      />
      <ChatMessage 
        message="Today is 14 January." 
        sender="robot" 
      />
    </>
  )
}

*/



// !! Some Imp. Exercise of SuperSimpleDev:
// Ex1 (By seeing the exercise, you will understand more about using props to make it reusable.):
// HTML:

/*

<script type="text/babel">
  function ProductDetails({ name, price }) {    // Consider " name, price " as -> props
    return (
      <>
        <p>{name}</p>
        <p>Price: ${price}</p>
        <button>Add to Cart</button>
      </>
    );
  }

  function App() {
    return (
      <>
        <ProductDetails
          name="Cotton socks"
          price="10.90"
        />
        <ProductDetails
          name="Tennis balls"
          price="6.00"
        />
        <ProductDetails
          name="Plain T-Shirt"
          price="7.99"
        />
      </>
    );
  }

  const container = document.querySelector('.js-container');
  ReactDOM.createRoot(container).render(<App />);
</script>

*/



// Ex2(for only sock part, discount price should be visible, but for tennis, tshirt, there's no discount so no discount price will be shown in the page):
/*

<script type="text/babel">
  function ProductDetails({ name, price, discountPrice }) {
    return (
      <>
        <p>{name}</p>
        <p>Price: ${price}</p>
        {discountPrice && <p>discount: ${discountPrice}</p>}     <!-- In this if statement, you could write name === 'sock', but if there's other discount for other products, then we have to write other conditions, thus this below condition works for any product -->
        <button>Add to Cart</button>
      </>
    );
  }

  function App() {
    return (
        <>
            <ProductDetails 
                name="sock"
                price="10"
                discountPrice="5"
            />
            <ProductDetails
                name="tennis"
                price="6"
            />
            <ProductDetails
                name="tshirt"
                price="7"
            />
        </>
    );
  }


const container = document.querySelector('.js-container');
ReactDOM.createRoot(container).render(<App />);
</script>

*/



// Ex3(like previous ex, showing discount price. But here, when product has discount price, it will strike-through the price text):
/*

<script type="text/babel">
  function ProductDetails({ name, price, discountPrice }) {
    return (
      <>
        <p>{name}</p>

        <!-- Used ternary operator -->
        {discountPrice ? (
          <>
            <p>
              <del>Price:${price}</del>
            </p>
            <p>
              discount: ${discountPrice}
            </p>
          </>
        ) : (
            <p>Price:${price}</p>
        )}      
        <button>Add to Cart</button>
      </>
    );
  }

  function App() {
    return (
      <>
        <ProductDetails 
          name="sock"
          price="10"
          discountPrice="5"
        />
        <ProductDetails
          name="tennis"
          price="6"
        />
        <ProductDetails
          name="tshirt"
          price="7"
        />
      </>
    );
  }

  const container = document.querySelector('.js-container');
  ReactDOM.createRoot(container).render(<App />);
</script>

*/





// ?? State, Event Handlers, Chatbot Project Features:

// !! State -> makes our website interactive.
//          -> data that's connected to the HTML. Thus, when we update the data, it will update the HTML.
//          -> stores data (numbers, strings, objects, arrays).
//          -> save data that changes over time.



// !! React Documentation:
// React Documentation Ex:
// Instead of this below code:
/*

const chatMessageComponents = chatMessages.map((chatMessage) => {
  return (
    <ChatMessage
      message = {chatMessage.message}
      sender = {chatMessage.sender}
    />
  );
});

return (
  <>
    <ChatInput />
    {chatMessageComponents}
  </>
)

*/



// We can do this below code (Second return()'s inside part, we put that arrow function directly. that's how React Documentation works.):

/*

return (
  <>
    <ChatInput />
    {chatMessages.map((chatMessage) => {
      return (
        <ChatMessage
          message = {chatMessage.message}
          sender = {chatMessage.sender}
        />
      );
    })}
  </>
);

*/



// !! Key:
/*
  -> helps React track changes in the array. This key for every child must be unique.
  -> key is a React-only attribute used when rendering lists, so React can track items efficiently.
  -> It is not passed as a prop to ChatMessage. Inside ChatMessage, you cannot read props.key.
  -> Ex:



*/



// !! Event Handler -> run a function when we interact with the website. Some Event Handlers:
// onClick  -> run a function while we click.
// onChange -> runs a function when we change the text inside an <input>



// !! event.target -> gives us the element that we're typing in.



// !! {} -> saves any type of value in a prop (including a function)



// !! function ChatMessage() vs function chatMessage() difference:
// first one is treated as react component, we can use it like -> <ChatMessage />. It's called Pascal case / UpperCamelCase.
// second one is a normal function, thus we can't use it like -> <chatMessage />. Rather, we can call it like -> chatMessage(). It's called camelCase.



// !! Ex of a common mistake:
function sendMessage() {
  console.log('send message');
}

return (
  <>
    <button onClick={sendMessage}>Send Message</button> {/* If you write sendMessage(), then it will run & console.log('send message') won't work/show in the console. */}
  </>
)



// !! React.useState() / State usage:
// Converting data into state, we use React.useState()
// It's call- react hook, used to create & manage state in function components.
// Using React.useState(), if we update its inside data, it will also update the HTML. 
// React.useState() returns an array.
// In React, we shouldn't update the data directly, Ex- chatMessages.push(...) -> Here, by " .push ", the updated info will be stored in the last part of the array(as it's an array method). So to update the data using React, we must use function, that function is called- Updater function.
// In React, we shouldn't modify the data directly. We should always create a copy, and then modify the copy.



// !! One of JS Feature:
// Spread Operator()  -> Takes the value in an array & then copies them into a new array. 
//                    -> It can be use in React Documentation. 

// Ex of Spread Operator()
/*

const chatMessages = array[0];        // Lets say array[0] & array[1] has some values inside of these arrays. chatMessages is the current data & setChatMessages is Set / Updater function.
const setChatMessages = array[1];     // Generally, for Set / Updater function, the naming convention starts with " set ".

function sendMessage() {                // sendMessage() is the -> Updater Function.
  setChatMessages([
    ...chatMessages,                    // Will copy that array into this new array.
    {                                   // Added a new value with some key-value pairs into this new array.
      message: 'test',                  
      sender: 'user',
      id: crypto.randomUUID()
    }                                    
  ]);
}

*/



// !! Array Destructuring (Remember that -> " ORDER MATTERS "):
// Ex:
/*

const array = React.useState(
...............
);
const chatMessages = array[0];      // There can be max two, such as- current data & updater function.
const setChatMessages = array[1];


<!-- Shortcut of the upper code is this: -->
const array = React.useState(
...............
);
const [chatMessages, setChatMessages] = array;   // Here, order matters. Thus, you should add variables inside [] serially.


<!-- More shortcut: -->
const [chatMessages, setChatMessages] = React.useState(         // There can be max two, such as- current data & updater function.
...............
);

*/



// !! How to get the Text in Textbox / inputbox:
// In JS, we do using DOM to get the text inside textbox:
/*

<input class="js-input" />

const input = document.querySelector('.js-input');
const text = input.value;

*/





// !! Start from vdo: 2:02:20