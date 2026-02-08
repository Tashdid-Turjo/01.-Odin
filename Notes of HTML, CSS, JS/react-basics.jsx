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



// !! JSX / React JSX Ex (It syntax looks like HTML but is' actually JS cod that React can render to the DOM)-
/*

return (
  <div
      className="chat-messages-container">
      {chatMessages.map((chatMessage) => {
          return (
              <ChatMessage
                  message={chatMessage.message}   // Here, these " message, sender, key " are attributes. " message, sender " name must be same like chatMessages function's props.
                  sender={chatMessage.sender}
                  key={chatMessage.id}            // Here, key is a mandatory name in this context. key is a special React attribute used for list items. You cannot rename it to id or anything else and expect React to treat it as the list key.
              />
          );
      })}
  </div>
);

*/



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
// TODO: Ex1 (By seeing the exercise, you will understand more about using props to make it reusable.):
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



// TODO: Ex2(for only sock part, discount price should be visible, but for tennis, tshirt, there's no discount so no discount price will be shown in the page):
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



// TODO: Ex3(like previous ex, showing discount price. But here, when product has discount price, it will strike-through the price text):
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
//          -> State doesn't update immediately, it's updated after all of the code is finished. Ex of it can be find from chatbot project's this commit- "That external library's response is now showing in the page. Issue: 'The text that i wrote in the textbox, that's not showing, rather ommiting.It's bcz, state doesn't update immediately,"
//          -> By updating State, React automatically updates the website. Thus no need to manually update the website.



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



// !! Event -> is an object that contain details about the change. One of that details is " event.target ".



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
    <button onClick={sendMessage}>Send Message</button>                {/* If you write sendMessage(), then it will directly run & console.log('send message') won't work/show in the console. */}
  </>
)



// !! React.useState() / State usage: (Know that, useState, useRef & others -> these are under React Hooks)
// Converting data into state, we use React.useState()
// It's call- react hooks, used to create & manage state in function components.
// Using React.useState(), if we update its inside data, it will also update the HTML. 
// React.useState() returns an array.
// In React, we shouldn't update the data directly, Ex- chatMessages.push(...) -> Here, by " .push ", the updated info will be stored in the last part of the array(as it's an array method). So to update the data using React, we must use function, that function is called- Updater function.
// In React, we shouldn't modify the data directly. We should always create a copy, and then modify the copy.
// Ex-
/*

const [count, setCount] = React.useState(0);            // Here, count -> State value, setCount -> state setter. Together they called- "state" bcz changing it causes React to re-render the UI.

*/


// !! One of JS Feature- Spread Operator():
// Spread Operator()  -> Takes the value in an array & then copies them into a new array. 
//                    -> It can be use in React Documentation. 

// Ex of Spread Operator():
/*

const chatMessages = array[0];        // Lets say array[0] & array[1] has some values inside of these arrays. chatMessages is the current data & setChatMessages is Set / Updater / State-Setter function.
const setChatMessages = array[1];     // Generally, for Set / Updater function, the naming convention starts with " set ".

function sendMessage() {                // sendMessage() is a normal function.
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

// Another Ex of Spread Operator()    {got from gpt}:
/*

function App() {
  const [numbers, setNumbers] = React.useState([1, 2, 3]);              // Here, numbers -> holds that array- [1, 2, 3]

  function addNumber() {
    setNumbers([...numbers, 4]);                                        // spread copies old array, then adds 4. setNumbers -> holds the new array- [1, 2, 3, 4]
  }

  return (
    <>
      <p>{numbers.join(", ")}</p>
      <button onClick={addNumber}>Add</button>
    </>
  );
}


*/



// !! Array Destructuring (Remember that -> " ORDER MATTERS "):
// Ex:
/*

const array = React.useState(
...............
);
const chatMessages = array[0];                                  // There can be max two, such as- current data & updater function.
const setChatMessages = array[1];


<!-- Shortcut of the upper code is this: -->
const array = React.useState(
...............
);
const [chatMessages, setChatMessages] = array;                  // Here, order matters. Thus, you should add variables inside [] serially.


<!-- More shortcut: -->
const [chatMessages, setChatMessages] = React.useState(         // There can be max two, such as- current data(chatMessages) & updater function(setChatMessages).
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



// !! Lifting the State up  -> move State to the closest common parent so multiple child components can share the same state via props (and update it via callbacks).
//                          -> So both components's inside parameter, we need to add props & add that in the parent component's two child components as well. 
//                          -> It’s not just “using a variable in another component”; it’s specifically about shared state ownership in a parent. Thus, parent component must have this variable & useState like this- " const [count, setCount] = React.useState(0); ". Here, count -> state & setCount -> setter. React state can read-only, but setter can change it cz it only write/update mechanism for that state(which is Count). Thus, if we change anything, then we have to use setter (here, setter -> setCount). When we want to change anything then these two causes React to re-render the UI. Ex of it-
//                          -> " <button onClick={() => {setCount(0)}></button> " is the correct way. Here, instead of " setCount(0) ", if you write " count(0) ", then this won't work.
//                          -> useState, props is mandatory for using this.
// Ex(useState, props is used in the Ex here as well)-

/*

function CounterButton({ count, setCount }) {
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}

function CounterText({ count }) {
  return <p>The count is {count}</p>;
}

function App() {
  const [count, setCount] = React.useState(0); // state lifted to parent

  return (
    <>
      <CounterButton count={count} setCount={setCount} />
      <CounterText count={count} />
    </>
  );
}

*/



// !! {}  -> We can save any type of value inside a prop.
//        -> Inside the curly braces, we can save an array.
// Ex-
/*

return (
  <>
    <ChatInput
      chatMessages={chatMessages}         // Here, prop is where i stored the data / value / array.
      setChatMessages={setChatMessages}
  </>
)

*/

// N.B: Here in the coding part,  ChatInput -> Component name; 
//                                chatMessages -> prop name; 
//                                {chatMessages} -> data / value / array.
// That's the mandatory naming convention. Thus, don't use this type of naming- chatMessagesProp etc.



// !! Remember this (when putting props inside component, don't forget to add curly braces inside that):
/*

function ChatInput({ chatMessages, setChatMessages })   // Here, ChatInput -> Component; chatMessages, setChatMessages -> props.

*/



// !! Controlled Inputs:(For using this, React state, like React Hooks {useState} is mandatory. Cz without state, it's not controlled.)
// Big enough to explain. See chatbot project's commits where i wrote this word-> Controlled Input.
// Ex-

/*

function App() {
  const [text, setText] = React.useState("");

  return (
    <>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type..."
      />
      <p>You typed: {text}</p>
    </>
  );
}

*/

// N.B: Here, Controlled Input is the <input> because its value is controlled by React via value={text}.



// !! .getResponse() vs .getResponseAsync() vs .then()
// .getResponse()       -> returns the reply immediately.(synchrnnous).
// .getResponseAsync()  -> returns ther reply later (asunchronous).
//                      -> Here, have to use await / .then(.....)
//                      -> It's a JS feature that's called async / await.
// .then()              -> same as .getResponseAsync().
// Ex-
/*
<!------------------ .getResponse() ------------------>
function sendMessage() {
  const response = Chatbot.getResponse(inputText);

  setChatMessages([
    ...newChatMessages,
    {
      message: response,                      
      sender: 'robot',
      id: crypto.randomUUID()
    }
  ]);
}


<!------------------ .getResponseAsync() ------------------>
async function sendMessage() {                                          // async is in front bcz, we can only use await inside an async function.
  const response = await Chatbot.getResponseAsync(inputText);           // This await is to wait for the value to be available before continuing.
                
  <!-- Using prev guarantees you append to the most current state. Though omitting prev as parameter & using that old " ...newChatMessages " still works in this case, don't know why. -->
  <!-- prev is the previous state value (the old chatMessages array). -->
  setChatMessages((prev) => [                                           // If you don't wanna write prev, then no need to add any parameter. So from .getResponse()'s code, just add/change "async", "await", ".getResponseAsync".
    ...prev,                                                            // Instead of prev, we can write ...newChatMessages
    {
      message: response,
      sender: 'robot',
      id: crypto.randomUUID()
    }
  ]);
}


<!------------------ .then() ------------------>
function sendMessage() {                                                // As i won't use await, thus async in the infront is not needed.
  Chatbot.getResponseAsync(inputText).then((response) => {
    <!--  prev is the previous state value (the old chatMessages array). -->
    setChatMessages((prev) => [
        ...prev,
        {
            message: response,
            sender: 'robot',
            id: crypto.randomUUID()
        }
    ]);
})
}

*/



// !! In this lesson, we learned-
// -> save the data(using arrays & objects).
// -> generate HTML (using .map() & key prop).
// -> make it interactive, using onClick & onChange.
// -> State = data that changes over time & is connected to the HTML.
// -> Updater function = update the state & update the HTML.
// -> Array Destructuring.
// -> Lifting the State up = share state between components.
// -> Made <ChatInput> interactive.
// -> Got responses from the Chatbot.



// !! Exercise prac of vdo:
// TODO: Ex01 (State):
// Task: button counter. for 0 & 1 time of click, it will show "time" as text, but if i click the button more than one times than it will show "times" in the button's text part.
/*

<div class="js-container"></div>

<script type="text/babel">
  function Counter(){
    const [count, setCount] = React.useState(0);                      // Here, count -> React state & setCount -> setter
                                                                      <!-- Here, 0 means -> initializes state with a number (starting value 0) & if it's "" instead of 0, that means it initializes state with a string(starting value is empty text). -->

    return(
      <>
        <button 
          onClick={() => {
            setCount(count + 1);
          }}
        >
          {(count === 1 || count === 0) ? `Clicked ${count} time` : `Clicked ${count} times`}
          <!-- or, you can write this code instead: Clicked {count} {(count === 1 || count === 0) ? 'time' : 'times'} -->
        </button>
      </>
    )
  };

  const container = document.querySelector('.js-container');
  ReactDOM.createRoot(container).render(<Counter />);
  
</script>

*/

// N.B: Here, if i wanna add another counter button, then this Counter (child) {no need to add another Counter component} component will be there as well as, I have to add another App (parent) component, inside that, the code will be this-
/* 

function App() {
  return (
    <>
      <Counter />
      <Counter />                             // By typing Counter component two times, it will show two buttons. So that, you don't need to add another Counter component for two separate buttons unless you want to manage both counters state in App.
    </>
  )
}

*/



// TODO: Ex2:
// Task: same task. just two buttons, but by clicking any of the two buttons, it will now show same amount in both buttons. like- clicked 0/1/2/3 times in both buttons.

/*

<div class="js-container"></div>

<script type="text/babel">
  function Counter({ count, setCount }){                      // Added count, setCount props inside Counter component parameter.

    return(
      <>
        <button 
          onClick={() => {
            setCount(count + 1);
          }}
        >
         {(count === 1 || count === 0) ? `Clicked ${count} time` : `Clicked ${count} times`}
        </button>
      </>
    )
  };
  
  function App() {
    const [count, setCount] = React.useState(0);              // This variable, .useState was inside Counter component in previous Ex.
    
    return (
      <>
        <Counter 
          count={count}
          setCount={setCount}
        />
        <Counter 
          count={count}
          setCount={setCount}
        />
      </>
    )
  }

  const container = document.querySelector('.js-container');
  ReactDOM.createRoot(container).render(<App />);

</script>

*/

// N.B: Here, added props, such as- count, setCount inside Counter component's parameter. Also, put the variable & .useState inside App (parent) component. And inside App's both Counter (child) component, wrote props, value. Such as- count={count}



// TODO: Ex3:
// Task: Same task as before, but here, you have to add another single reset button that will reset both the " Clicked ... times " buttons into 0 times / reset:
// N.B: Know that, in the code, if you add the reset button inside Counter component, then this reset button will show two buttons. Thus, you have to add this button inside App component's inside.

/*

  <script type="text/babel">
    function Counter({ count, setCount }){

      return(
        <>
          <button 
            onClick={() => {
              setCount(count + 1);
            }}
          >
            {(count === 1 || count === 0) ? `Clicked ${count} time` : `Clicked ${count} times`}
          </button>
        </>
      )
    };
    
    function App() {
      const [count, setCount] = React.useState(0);
      
      return (
        <>
          <Counter 
            count={count}
            setCount={setCount}
          />
          <Counter
            count={count}
            setCount={setCount}
          />
          <button
            onClick={() => {
              setCount(0);                            // If you write count(0), then it won't work, cz React state is read-only & setter(which is setCount) is write/update mechanism for that state.
              <!-- " setCount(prev => 0); " will also work instead of " setCount(0); " -->
            }}
          >
            Reset
          </button>
        </>
      )
    }

    const container = document.querySelector('.js-container');
    ReactDOM.createRoot(container).render(<App />);

  </script>

*/

// N.B: " setCount(prev => 0); " here, prev is function parameter. See an ex-
/*
Ex1:

setCount(prev => prev + 1);

Ex2:

setCount(function (prev) {
  return prev + 1;
});

Both does the same work.

*/



// TODO: Ex4:
// Task: Whatever you write in the input box, it will show as text after " Hello " text.

/*

<div class="js-container"></div>

<script type="text/babel">
  function App() {
    const [text, setText] = React.useState("");

    function saveInputText(e) {                           // Added a function instead of doing it inside onChange. This is done by supersimpledev & this one's code ismore cleaner.
      setText(e.target.value);
    }

    return(
      <>
        <input
          value={text}
          onChange={saveInputText}                        // You can also write the saveInputText function's works inside onChange here that I did in the Ex3.
          placeholder="Type a name here"
        />
        <p>Hello {text}</p>
      </>
    )
  }

  const container = document.querySelector('.js-container');
  ReactDOM.createRoot(container).render(<App />);

</script>

*/

// N.B: e.target.value -> current text inside the input.
// N.B: e.target -> element that fired the event(here, the <input>).
// N.B: e -> event object. React gives your onChange handler when something changes.



// TODO: Ex5
// Task: Another 2 buttons -> Reset, Example. When reset clicked, it will reset both input box's text & after Hello text's text. And for example, it will show an example after Hello, such as- " Hello Turjo " & reset input box's text.

/*

<div class="js-container"></div>

<script type="text/babel">
  <!----------------------------------------- Method1 (Using two different different states.) ----------------------------------------->
  function App() {
    const [text, setText] = React.useState("");   // This state for inputbox's value.
    const [name, setName] = React.useState("");   // This state for displayed name after " Hello " text.

    function saveInputText(e) { 
      const v = e.target.value;
      setText(v);
      setName(v);
    }

    return(
      <>
        <input
          value={text}
          onChange={saveInputText}                        // You can also write the saveInputText function's works inside onChange here that I did in the Ex3.
          placeholder="Type a name here"
        />
        <button
          onClick={() => {
          setText("");
          setName("");
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            setText("");
            setName("Turjo");
          }}
        >
          Example
        </button>
        <p>
          Hello {name}
        </p>
      </>
    )
  }

  <!----------------------------------------- Method2 (Using one single state.SuperSimpleDev's soln. Here, one difference is that, while clicking example button, turjo name will be
  shown in input box & after hello text. But in method1, input box will become empty & turjo will be shown after hello text. In this Method2, as there's one single state, thus I can't 
  do this like -> for input box, empty text will be shown& after hello text, turjo will be shown.) ----------------------------------------->
    function App() {
      const [text, setText] = React.useState("");

      function saveInputText(e) { 
        setText(e.target.value);
      }

      function resetText(e) {
        setText('');
      }

      function exampleText(e) {
        setText('Turjo');
      }

      return(
        <>
          <input
            value={text}
            onChange={saveInputText}                        // You can also write the saveInputText function's works inside onChange here that I did in the Ex3.
            placeholder="Type a name here"
          />
          <button
            onClick={resetText}
          >
            Reset
          </button>
          <button
            onClick={exampleText}
          >
            Example
          </button>
          <p>
            Hello {text}
          </p>
        </>
      )
    }

  const container = document.querySelector('.js-container');
  ReactDOM.createRoot(container).render(<App />);

</script>

*/





// ?? CSS with React, Hooks, Finish Chatbot Project:

// !! HTML's element is -> CSS's selector. Ex- button -> HTML's element & CSS's selector.



// !! CSS style, CSS Property, CSS value Ex-
/*
<!-- React inside HTML file -->
<button
  onClick={sendMessage}
  className="send-button"                 // For HTML, we use class, but for React, we will use className, cz JS already has a feature called class. Thus it's a reserved word for React. But when you go to the webpage's console, you will see it's written as class. Bcz, className in React is converted to class in HTML.
</button>

<!-- CSS -->

button {
  background-color: green;              // bg-color -> CSS Property, green -> CSS value. Combining both is called -> CSS styles.
}

*/



// !! We can't style fragment with CSS. thus, instead of <></>, you have to use div, like- <div></div>



// !! When a block element(like <div>) is inside a flexbox -> it no longer takes up the entire line. It only takes as much space as it needs to.
// Ex-
/*
<!-- HTML/React -->

<div className="chat-message-text">       // In HTML, where we write class, but for React, we will write className.
  Hello
</div>

<!-- CSS -->

.chat-message-text{
  background-color: grey;                 // without flexbox, this will take the entire area.
  display: flex;
}

*/



// !! React's feature: Hooks:
//  -> Insert React features into our component.
//  -> One of Hooks is = React.useState(). Ex- " const [inputText, setInputText] = React.useState(''); " It inserts state into our component.
//  -> State = automatically updates the HTML when the data changes.
//  -> Other Hooks = useState(), useEffect(), useRef(), etc. All starts with the word - use.
//  -> For autoscrolling, Hooks is needed.
//  -> It's MANDATORY to put Hooks at the top of the component.
//  -> Hooks should not be inside anything. So don't put Hooks inside if-statement/condition or inside a function. But it can be put inside component & in the top of that component.
//  -> Arrow function = Inside a function, if we wanna add another function, then it should be an Arrow function for better understanding.



// !! React.useEffect:
//  -> useEffect = run some code after the component is created or updated,
//               = run some code every time the component is updated.
// TODO: Ex1-
/*

function ChatMessages({ chatMessages }) {
  <!-- React will run this useEffect's function -> after the component is created & every time the component is updated. -->
  React.useEffect(() => {
      console.log('updated');
  }, [chatMessages])                        <!-- This array controls when useEffect runs. -->
                                            <!-- If it's empty array, useEffect only run once after the component is created. -->
                                            <!-- We can also put value such as "[chatMessages]". In that case, [chatMessages] will run this function every time chatMessages changes. This array is called- Dependency Array. It controls when useEffect runs. -->
                                            <!-- Thus best practice is give useEffect a dependency array to avoid running too often. -->
                                            <!-- Whenever this array's thing changes, it will render again after that. That means, it triggers a re-render,-->

*/

/*
N.B: .useEffect usually written as an arrow function, but it's not mandatory.
Dependency Array [] -> Not mandatory but important.
                    -> No array = runs after every render.
                    -> []       = runs once on mount.
                    -> [x, y]   = runs when x or y changes.

*/


// TODO: Collected Ex2-10 from web dev simplified Learn useEffect in 13mins Video.
// TODO: Ex2(for two states) {Ex2,3,4,5 are same type's different different usage}-
/*

<script type="text/babel">
  function App() {
    const [resourceType, setResourceType] = React.useState('posts');
    const [count, setCount] = React.useState(0); // NEW: extra state (causes re-render)

    React.useEffect(() => {
    console.log('effect ran (no deps)');
    });                                                                     // Here, if you add an array, like- [resourceType], then effect runs only when resourceType changes. That means,only clicking posts/users/comments button, the re-render & print message will be shown in the console & increase the print message whenever you click these 3 buttons. But clicking count button, it won't re-render in the console part & won't show the print message.
                                                                            <!-- But the code is as it is or if you add an array, like- [resourceType, count], in that case, the re-render will be shown in the console part whenever & whatever button you click. -->
    return (
    <>
      <div>
      <button onClick={() => setResourceType('posts')}>Posts</button>           // Adding setResourceType as 'posts'/'users'/'comments', this setting is the reason that when you click Posts/Users/Comments more than one time, then in the console, it doesn't re-render / don't increase the print message.
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>

      <h1>{resourceType}</h1>

      <div>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>     // Like posts/users/comments button, it's not set as setCount('count'), thus whenever you click the button, it will re-render & print the message in the console part.
      <p>Count: {count}</p>
      </div>
    </>
    );
  }

  const container = document.querySelector('.js-container');
  ReactDOM.createRoot(container).render(<App />);
</script>

*/



// TODO: Ex3(for single state)-
/*

<script type="text/babel">
  function App() {
    const [resourceType, setResourceType] = React.useState('posts')   // As i wrote 'posts', thus in the console part, clicking posts button, it won't show re-render. But when it's empty like this- '', in that case, clicking any of the 3 button will show render.

    console.log('render');                                    // Here, when clicking any of the 3 button, it will show as well as useEffect's message will be shown. But clicking a button two times in a row, in that case, in 2nd time clicking- just this message will be print. But for the 3rd time clicking a button in a row, no re-render / no message will be shown in the console.

    React.useEffect(() => {
      console.log('resource type changed');                   // Here, clicking a specific button more than one in a row, it won't increase render. But when a specific button is clicked, then clicking another button, it will re-render & will increase in console. It's bcz of in the jsx code's setResourceType('posts'/'users'/'comments').
    }, [resourceType])

    return (
      <>
        <div>
          <button onClick={() => setResourceType('posts')}>Posts</button>
          <button onClick={() => setResourceType('users')}>Users</button>
          <button onClick={() => setResourceType('comments')}>Comments</button>
        </div>
        <h1>{resourceType}</h1>
      </>
    )
  }
  
  const container = document.querySelector('.js-container');
  ReactDOM.createRoot(container).render(<App />);
</script>

*/



// TODO: Ex4-
/*

<script type="text/babel">
  function App() {
    const [resourceType, setResourceType] = React.useState('posts')

    console.log('render');                                    // Here, as inside useEffect is empty array, thus that useEffect's message won't be printed. Just this message will be printed like- clicking a button, it will print, then clicking that button again, it will again print.

    React.useEffect(() => {
      console.log('resource type changed');                   // Here, this message won't be shown even for a single time as the array is empty array. Bcz,[] means React depends on nothing. Button clicks do cause re-renders, but the rule says: don’t run again. Also for [1, 2, 3] array -> these nubmers never change. So react sees nothing changed again. Thus effect still runs only once in both empty or number array cases.
    }, [])                                                    // Here, this empty array- [] or [1, 2, 3] or [1] or [1, 2, 3, 4] whatever the array has these numbers, both work same.

    return (
      <>
        <div>
          <button onClick={() => setResourceType('posts')}>Posts</button>
          <button onClick={() => setResourceType('users')}>Users</button>
          <button onClick={() => setResourceType('comments')}>Comments</button>
        </div>
        <h1>{resourceType}</h1>
      </>
    )
  }

  const container = document.querySelector('.js-container');
  ReactDOM.createRoot(container).render(<App />);
</script>

*/



// TODO: Ex5-
/*

<script type="text/babel">
  function App() {
    const [resourceType, setResourceType] = React.useState('posts')

    React.useEffect(() => {
      console.log('resource changed')

      return () => {
        console.log('return from resource change')                                  // Here, this message will be shown before 'resource changed' message. Bcz, to clean-up whatever we did last time. Also know that, after clicking a button, then 2nd time clicking that particular button, it won't show anything in the console.
      }
    }, [resourceType])

    return (
      <>
        <div>
          <button onClick={() => setResourceType('posts')}>Posts</button>
          <button onClick={() => setResourceType('users')}>Users</button>
          <button onClick={() => setResourceType('comments')}>Comments</button>  
        </div>
      </>
    )
  
  }

  const container = document.querySelector('.js-container');
  ReactDOM.createRoot(container).render(<App />);
  </script>

*/



// TODO: Ex6{Ex6,7 same type}-
/*

<script type="text/babel">
  function App() {
    const [resourceType, setResourceType] = React.useState('posts')

    console.log('render');                                    // Here, after clicking a button for first time, it will be printed & show the 100 posts, then clicking that particular button for the second time, only this printed message will be shown but 100 posts won't be shown. And for 3rd time clicking the same button, nothing will occur. But know that, here, different different button has different things, like- 100 posts, 10 users, 500 commments will be shown.

    React.useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => console.log(json))
    }, [resourceType])

    return (
      <>
        <div>
          <button onClick={() => setResourceType('posts')}>Posts</button>
          <button onClick={() => setResourceType('users')}>Users</button>
          <button onClick={() => setResourceType('comments')}>Comments</button>
        </div>
        <h1>{resourceType}</h1>
      </>
    )
  }

  const container = document.querySelector('.js-container');
  ReactDOM.createRoot(container).render(<App />);
</script>

*/



// TODO: Ex7-
/*

<script type="text/babel">
  function App() {
    const [resourceType, setResourceType] = React.useState('posts')
    const [items, setItems] = React.useState([])

    React.useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => setItems(json))
    }, [resourceType])

    return (
      <>
        <div>
          <button onClick={() => setResourceType('posts')}>Posts</button>
          <button onClick={() => setResourceType('users')}>Users</button>
          <button onClick={() => setResourceType('comments')}>Comments</button>
        </div>
        <h1>{resourceType}</h1>
        {items.map(item => {
          return <pre>{JSON.stringify(item)}</pre>                                      // Here, the posts/users/comments will be shown in the webpage.
        })}
      </>
    )
  }

  const container = document.querySelector('.js-container');
  ReactDOM.createRoot(container).render(<App />);
</script>

*/



// TODO: Ex8 (Ex8,9,10 similar type) {Window's size will be shown in the webpage, but it won't update/change whenever we resize the tab.}-

/*

<script type="text/babel">
  function App() {
    const [windowWidth, setwindowWidth] = React.useState(window.innerWidth)
    
    return (
      <div>
        {windowWidth}
      </div>
    )
  }

  const container = document.querySelector('.js-container');
  ReactDOM.createRoot(container).render(<App />);
</script>

*/



// TODO: Ex9 {Window's size will be shown as well as will be updated/changed whenever we resize the tab.}
/*

<script type="text/babel">
  function App() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    React.useEffect(() => {
      window.addEventListener('resize', handleResize)
    }, [])

    return (
      <div>
        {windowWidth}
      </div>
    )
  }

  const container = document.querySelector('.js-container');
  ReactDOM.createRoot(container).render(<App />);
</script>

*/



// TODO: Ex10-
/*

<script type="text/babel">
  function App() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    React.useEffect(() => {
      window.addEventListener('resize', handleResize)
  
      return () => {                                                              // It prevents the resize listener from staying active after the component is removed (or remounted), which avoids memory leaks and avoids multiple duplicate listeners that would cause extra setWindowWidth calls and unnecessary re-renders later.
        window.removeEventListener('resize', handleResize)
      }
    }, [])

    return (
      <div>
        {windowWidth}
      </div>
    )
  }

  const container = document.querySelector('.js-container');
  ReactDOM.createRoot(container).render(<App />);

</script>

*/



// !! React.useRef:
// ref    -> means = container with special React features.
// useRef -> automatically save an HTML element from the component.
//        -> it's special feature is we can give this ref / container to React & React can automatically save an HTML element inside this ref / container.
//        -> Generally, we put a null inside the parameter which is initial value, such as- " React.useRef(null); ".
//        -> Save an HTML element from the component.
// TODO: Ex1-
/*

function App() {
  const inputRef = React.useRef(null);                            // Creates the ref object.

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} placeholder="Type here" />            // Here, ref will take the variable name- inputRef. Thus, this {inputRef} is a container that holds this .useRef.
                                                                  <!-- Here, ref={inputRef} is a React feature that connects the ref to the element. -->
      <button onClick={focusInput}>Focus input</button>
    </>
  );
}

*/

// N.B:
/*
Here, useRef does not stop a re-render. It just means changing ref.current does not trigger a re-render. But re-renders still happen for other reasons (state/props changes).
*/



// TODO: Ex2 {Ex2 vs Ex3 see the difference}-
/*

<script type="text/babel">

  <!-- Getting the current value of state: -->
  function App() {
    const [name, setName] = React.useState('');
    const inputRef = React.useRef();

    function focus() {
      inputRef.current.focus()
      inputRef.current.value = 'Some value'                  // By clicking the Focus button, it will write this text in the input box.
    }

    return (
      <>
        <input
          ref={inputRef} 
          value={name} 
          onChange={e => setName(e.target.value)} />
        <div>My name is {name}</div>
        <button
          onClick={focus}
        >
          Focus
        </button>
      </>
    );
  }

  const container = document.querySelector('.js-container');
  ReactDOM.createRoot(container).render(<App />);
</script>

*/



// TODO: Ex3 {Ex2 vs Ex3 see the difference}-
/*

<script type="text/babel">

  <!-- Getting previous value of state: -->
  function App() {
    const [name, setName] = React.useState('');
    const prevName = React.useRef('');

    React.useEffect (() => {
      prevName.current = name;
    }, [name])

    return (
      <>
        <input
          ref={prevName} 
          value={name} 
          onChange={e => setName(e.target.value)}
        />
        <div>My name is {name} and it used to be {prevName.current}</div>
        <button
          onClick={focus}
        >
          Focus
        </button>
      </>
    );
  }

const container = document.querySelector('.js-container');
ReactDOM.createRoot(container).render(<App />);
</script>

*/



// !! useRef vs useState:
// Updating useRef does not re-render the component.
// Updating useState does re-render the component.



// !! useRef vs useEffect:
// useEffect: run side effects (timers, fetch, subscriptions, DOM events) after render.
// useRef: store / save a value that persists across renders (often a DOM element or an interval id) without triggering re-renders.



// !! .useState() vs .useEffect() vs .useRef():
/* // .useState() -> causes re-render:

function App() {
  const [text, setText] = React.useState("");

  return (
    <>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text}</p>
    </>
  );
}


<!-- Here,  text is state,
            Typing updates state,
            React re-renders the component,
            UI updates automatically,
            Updates the visible UI (DOM) to reflect new data, like showing what you type in the paragraph,
            This is a visible on the webpage, the text you type will be shown inside <p></p> element, so live UI update. --> 
*/



/* // .useEffect() -> runs side-effects after render:

function App() {
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    console.log("Text changed:", text);
  }, [text]);                                                       // Whenever this text changes, this .useEffect() will be run. 

  return (
    <input onChange={(e) => setText(e.target.value)} />
  );
}


<!-- Here,  useEffect runs after render,
            [text] → runs only when text changes,
            Used for side-effects (logging, fetch, DOM ops),
            Typing does not show anything new on the page,
            The effect runs in the background (e.g., logs to the console),
            This is about side-effects, not UI display. --> 
*/



/* // .useRef() -> no re-render:

function App() {
  const inputRef = React.useRef(null);

  function showValue() {
    alert(inputRef.current.value);
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={showValue}>Show</button>
    </>
  );
}


<!-- Here,  useRef holds a DOM reference,
            Changing .current does not re-render,
            Used for direct DOM access,
            Typing does not auto-show text anywhere,
            Clicking the button shows the input value (e.g., via alert),
            Value is accessed only when you explicitly read it (e.g., button click),
            No re-render happens when typing. --> 
*/


// FINAL REVIEW BETWEEN THESE 3:
/*
For usestate()  -> live UI update like the text i write will be shown in the webpage.
For useEffect   -> React does something automatically after render.
ForuseRef       -> It needs a manual trigger (like a button click) to read or use its value. You manually read/write a value without re-render.
*/



// !!JS DOM vs React DOM:
// JS:
/*

document.querySelector(
  '.chat-messages-container'
);

*/

/*
<!-- React (don't use DOM manually. Instead, use React features to get the element. For that, we will use React Hooks .useRef(). ) -->
function ChatMessages() {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    <!-- same idea as querySelector result -->
    console.log(containerRef.current);               // the <div> DOM element
  }, []);

  return <div className="chat-messages-container" ref={containerRef}></div>;
}


*/



// !! In a variable, when it has Elem, then it indicates that this variable contains an HTML element.



// !! scrollTop, scrollHeight
// scrollTop    -> how far from the top should we scroll.
// scrollHeight -> gives us the total height of the element.
// Ex-
/*

containerElem.scrollTop = containerElem.scrollHeight;       // Here, if we set the scroll top to the total height, it's gonna scroll all the way down to the bottom.

*/



// !! (count + 1) vs ((prevCount) => preCount + 1) difference:
/* (count + 1):

let count = 0;

setInterval(() => {
  count = count + 1;
  console.log(count);
}, 1000);

setTimeout(() => {
  count = 10;                 // After 2.5s, count should become 10. But instead, it will take that previous 3, so after 3s, it will print 3, not 11.
}, 2500);


The output: 
1
2
3
4
...

*/

/* ((prevCount) => preCount + 1)        or           ((count) => count + 1):

let count = 0;

setInterval(() => {
  count = getLatestCount(count => count + 1);           // You can write this as well- ((prevCount) => preCount + 1)
  console.log(count);
}, 1000);

setTimeout(() => {
  count = 10;                                           // After 2.5s, count will become 10, thus after 3s, it will print 11.
}, 2500);


The output: 
1
2
11
12
13
...

*/



// !! Reason behind learning Hooks with CSS is -> Hooks (like useState) are often used to change CSS dynamically (show/hide, active states, loading styles). Teaching CSS alongside hooks lets you immediately see visual effects of state changes, which makes hooks easier to understand.



// !! [...chatMessages, userMessage] means:
/*
-> Make a new array
-> Copy all the old messages from chatMessages into it (...chatMessages)
-> Then add the new userMessage at the end
-> So it’s basically the same as saying: “Keep everything that was already in the chat, then append this new message.”
*/



// !! Custom Hooks-> 
/*
A custom hook is just a normal JavaScript function that:
          -> starts with use (e.g., useAutoScroll)
          -> uses other hooks inside it (useEffect, useRef, etc.)
          -> packages a reusable behavior so you can use it in multiple components.
          -> it's just a js function.
          -> to identify a custom hook, seeing atleast a react hook inside a function(not component), that's custom hook.
          -> custom hook shouldn't be put inside a component.

Why you create one:
          -> You wrote the same hook logic in multiple places (copy-paste).
          -> You want cleaner components (move hook logic out).

Must thing to do in the coding part:
          -> 1. Create a custom hook function outside of any component. This keeps the logic clean and allows multiple components to use it.
          -> 2. Return the value so that other component can use it. If the hook calculates a value (like width) or creates a reference (like ref), you must return it.
          -> 3. Call (use) the custom hooks function inside the component that actually needs the data.
*/



/* Custom hooks Ex- Tracking the window size: Imagine you want to change your UI based on whether a user is on a mobile phone or a desktop. Instead of writing the "resize" logic inside every component, you create a custom hook called useWindowSize.

<!DOCTYPE html>
<html>
  <head>
    <title>Chatbot</title>
  </head>
  <body>
    <div class="js-container"></div>

    <script src="https://unpkg.com/supersimpledev/react.js"></script>
    <script src="https://unpkg.com/supersimpledev/react-dom.js"></script>

    <script src="https://unpkg.com/supersimpledev/chatbot.js"></script>

    <script src="https://unpkg.com/supersimpledev/babel.js"></script>
    
    <script type="text/babel">
        function useWindowSize() {                                        // Custom hook
          <!-- 1. Initialize state with the current window width -->
          const [width, setWidth] = React.useState(window.innerWidth);

          React.useEffect(() => {
            <!-- 2. Define the function to update state -->
            const handleResize = () => setWidth(window.innerWidth);

            <!-- 3. Setup: Add the event listener when the component mounts -->
            window.addEventListener('resize', handleResize);

            <!-- 4. Cleanup: Remove the listener when the component unmounts -->
            return () => {
              window.removeEventListener('resize', handleResize);
            };
          }, []); // Empty array means this runs once on mount

          <!-- 5. Return the value so components can use it -->
          return width;
        }

        function MyComponent() {
          const width = useWindowSize();                            // Using our custom hook

          return (
            <div style={{ padding: '20px', textAlign: 'center' }}>
              <h1>The window width is: {width}px</h1>
              
              {width < 600 ? (
                <p style={{ color: 'red' }}>You are on a Mobile View 📱</p>
              ) : (
                <p style={{ color: 'blue' }}>You are on a Desktop View 💻</p>
              )}
            </div>
          );
        }
      const container = document.querySelector('.js-container');
      ReactDOM.createRoot(container).render(<MyComponent />);

    </script>
  </body>
</html>

*/



// !! DRY -> Don't Repeat Yourself.
// Ex of when we say this- using custom hooks so that, we can use this hooks inside other components. So that, it doesn't need to write repeatedly.



// TODO: Ex1-
// Task: Using React.useState(), save a boolean isButtonOn. This will switch between true & false when clicking the button. Using isButtonOn & the Ternary Operator(?:), switch the text between "ON" & "OFF" when clicking the button.
// Ans:
/*
<style>
  .on-button,
  .off-button {
    background-color: rgb(25, 135, 84);
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
  }
</style>

<script type="text/babel">
  function App() {
    const [isButtonOn, setIsOn] = React.useState(true);

    const getButtonClass = function getButtonClass () {
      return isButtonOn === true
      ? "on-button"                           // className is declared here
      : "off-button"
    }

    const toggleButton = function toggleButton () {
      setIsOn(!isButtonOn)
    }

    const onOff = function onOff () {
      return isButtonOn === true
      ? "ON" 
      : "OFF"
    }
    
    return (
      <button 
        className={getButtonClass()}          // Calling the function
        onClick={toggleButton}
      >
        {onOff()}                             // Calling the function
      </button>
    );
  }
</script>

*/



// TODO: Ex2-
// Task: from the code below- 'Add a button beside the password to show/hide the password. (using State, save a boolean 'showPassord' that switches between true & false when clicking the button. To show/hide the password, switch the password <input>'s type prop between 'password' & 'text').'
/*
<style>
  body {
    font-family: Arial, sans-serif;
  }

  .text {
    font-weight: bold;
  }

  .login-container {
    display: flex;
    flex-direction: column;
  }

  .email, .password {
    margin-bottom: 10px;
    padding: 5px 16px;
  }

  .button {
    display: flex;
    gap: 10px;
  }

  .login-button,
  .signup-button {
    background-color: rgb(0, 123, 255);
    color: white;
    border-radius: 10px;
    padding: 10px 16px;
    border: 0;
    cursor: pointer;
  }
</style>

<script type="text/babel">
  function LoginForm() {
    return (
      <div className="login-container">
        <div>
          <input className="email" placeholder="Email" />
        </div>
        <div>
          <input className="password" placeholder="Password" type="password" />
        </div>
        <div className="button">
          <button className="btn login-button">Login</button>
          <button className="btn signup-button">Sign up</button>
        </div>
      </div>
    );
  }

  function App() {
    return (
      <div className="app-container">
        <p className="text">Hello, welcome to my website</p>
        <LoginForm />
      </div>
    );
  }

  const container = document.querySelector('.js-container');
  ReactDOM.createRoot(container).render(<App />);
</script>



*/

// Ans: (Know For showing the Hide/Show button, used Ex1's function, jsx etc. Then did the <input>'s type prop between 'password' & 'text'.)

/*

<style>
  body {
    font-family: Arial, sans-serif;
  }

  .text {
    font-weight: bold;
  }

  .login-container {
    display: flex;
    flex-direction: column;
  }

  .email, .password {
    margin-bottom: 10px;
    padding: 5px 16px;
  }

  .button {
    display: flex;
    gap: 10px;
  }

  .login-button,
  .signup-button {
    background-color: rgb(0, 123, 255);
    color: white;
    border-radius: 10px;
    padding: 10px 16px;
    border: 0;
    cursor: pointer;
  }

  .password-button {
    display: flex;
    gap: 10px;
  }

  .show-button,
  .hide-button {
    border: 0;
    background-color: skyblue;
    border-radius: 5px;
    margin-bottom: 7px;
    cursor: pointer;
  }
</style>

<script type="text/babel">
  function LoginForm() {
    const [showPassword, setShowPassword] = React.useState(true);           // For Hide/Show button.

    const getButtonClass = function getButtonClass () {                     // For Hide/Show button's className.
      return showPassword === true
      ? "show-button"                                                       // className is declared here.
      : "hide-button"
    }

    const toggleButton = function toggleButton () {                         // For Hide/Show button's toggle by using onClick.
      setShowPassword(!showPassword)
    }

    const hideShow = function hideShow () {                                 // For Hide/Show button's text showing.
      return showPassword === true
      ? "Hide"                                                              // className is declared here.
      : "Show"
    }

    const inputType = function inputType () {                               // For input type="text"/"password"
      return {
        type: showPassword                                                  // In jsx, where we write- <input type="text" or type="password", but instead of that, We used this '{}' is an object & used spread in jsx.
              ? "text"                                                      // <input type="text"/"password".
              : "password"
      }
    }

    return (
      <div className="login-container">
        <div>
          <input 
            className="email" 
            placeholder="Email" 
          />
        </div>
        <div className="password-button">
          <input 
            className="password" 
            placeholder="Password" 
            {...inputType()}                                                // Uses spread as I returned an object {which is inside inputType function}.
          />
          <button 
            className={getButtonClass()}
            onClick={toggleButton}
          >
            {hideShow()}
          </button>
        </div>
        <div className="button">
          <button className="btn login-button">Login</button>
          <button className="btn signup-button">Sign up</button>
        </div>
      </div>
    );
  }

  function App() {
    return (
      <div className="app-container">
        <p className="text">Hello, welcome to my website</p>
        <LoginForm />
      </div>
    );
  }

  const container = document.querySelector('.js-container');
  ReactDOM.createRoot(container).render(<App />);
</script>

*/



// TODO: Ex3-
// Task:
/*
1. Load the DayJS library (external script) -> https://unpkg.com/supersimpledev/dayjs.js
2. Use React.useState() to store the current time as a string (you can get it with dayjs().format('HH:mm:ss')).
3. Use React.useEffect() to run code once after the component mounts: start a setInterval(() => { ... }, 1000) (runs every 1000 ms = 1 second).
4. Inside the setInterval callback, get the time again with dayjs().format('HH:mm:ss') and update state with the setter (e.g., setTime(...)).
5. Add console.log('run code', currentTIme); inside setInterval & check how many times it runs. Then remove the dependency array([]) from React.useEffect() & check how many times it runs.
*/

// Ans:
/*

<script type="text/babel">
  function App() {
    const [time, setTime] = React.useState(() =>
      dayjs().format('HH:mm:ss')
    )

    React.useEffect(() => {
    const id = setInterval (() => {
      const currentTime = dayjs().format('HH:mm:ss');
      setTime(currentTime);
      console.log('run code', currentTime)
    }, 1000);


    <!-- Clean-up part (stopping the interval) -->
    return () => clearInterval(id);
    }, []);                                                           // Important: make sure to give React.useEffect() a dependency array of [] so it only runs once.

    return (
      <>
        {time}
      </>
    );
  }

  const container = document.querySelector('.js-container');
  ReactDOM.createRoot(container).render(<App />);

</script>

*/



// TODO: Ex4-
// Task:
/*
Goal: Build a counter app.
Requirements:
1. Do not put the counter in a separate component (keep everything in one App component for now).
2. Create a Reset button that sets the count back to 0.
3. Create an Auto Click button:
4. When clicked, it should automatically “click” the counter button once per second.
5. Use setInterval(..., 1000) to run something every second.
6. To “click the button with code”:
7. Store the counter button element in JavaScript using & without using useRef{for without useRef, you would just update the count directly using state}. 
8. Then call buttonElem.click() inside the interval.
*/



// Ans: (without useRef, used another useState):
/*

<!DOCTYPE html>
<html>
<head>
  <style>
    .on-button,
    .off-button {
      background-color: rgb(25, 135, 84);
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 5px;
      cursor: pointer;
    }
  </style>
  <title>React Basics</title>
  </head>
  <body>
    <div class="js-container"></div>

    <script src="https://unpkg.com/supersimpledev/react.js"></script>
    <script src="https://unpkg.com/supersimpledev/react-dom.js"></script>

    <script src="https://unpkg.com/supersimpledev/babel.js"></script>
    
    <script src="https://unpkg.com/supersimpledev/dayjs.js"></script>
    
    <script type="text/babel">
      function App() {
        const [count, setCount] = React.useState(0);

        const [isAutoClickOn, setIsAutoClickOn] = React.useState(false);

        React.useEffect(() => {
          if (!isAutoClickOn) return;
          
          const id = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
          }, 1000);

          return () => {
            clearInterval(id);
          };
        }, [isAutoClickOn])

        return (
          <>
            <button
              onClick={() => {
                setCount((prevCount) => prevCount + 1);
              }}
            >
              {(count === 1 || count === 0) ? `Clicked ${count} time` : `Clicked ${count} times`}
            </button>
            <button
              onClick={() => {
                setIsAutoClickOn(false);
                setCount(0);
              }}
            >
              Reset
            </button>
            <button
              onClick={() => {
                setIsAutoClickOn(prev => !prev)     // Instead of another Stop button, used this single Auto Click button to work for both start & stop the Counting.
              }}
            >
              Auto Click
            </button>

            <!--------------------------- Extra  ------------------>
            <button
              onClick={() => setIsAutoClickOn(false)}         // Auto click button will work for both start & stop feature, thus removed this Stop button.
            >
              Stop
            </button>
            <!--------------------------- Extra  ------------------>
          </>
        ) 
      }

      const container = document.querySelector('.js-container');
      ReactDOM.createRoot(container).render(<App />);
    </script>
  </body>
</html>

*/



// Ans(Using useRef {almost same in the coding part.}):
/*

<!DOCTYPE html>
<html>
<head>
  <style>
    .on-button,
    .off-button {
      background-color: rgb(25, 135, 84);
      color: white;
      border: none;
      padding: 10px 15px;
      border-radius: 5px;
      cursor: pointer;
    }
  </style>
  <title>React Basics</title>
  </head>
  <body>
    <div class="js-container"></div>

    <script src="https://unpkg.com/supersimpledev/react.js"></script>
    <script src="https://unpkg.com/supersimpledev/react-dom.js"></script>

    <script src="https://unpkg.com/supersimpledev/babel.js"></script>
    
    <script src="https://unpkg.com/supersimpledev/dayjs.js"></script>
    
    <script type="text/babel">
      function App() {
        const [count, setCount] = React.useState(0);

        const [isAutoClickOn, setIsAutoClickOn] = React.useState(false);

        const counterBtnRef = React.useRef(null);                                    // Used useRef

        React.useEffect(() => {
          if (!isAutoClickOn) return;
          
          const id = setInterval(() => {
            counterBtnRef.current.click();                                          // auto-press the counter button
          }, 1000);

          return () => {
            clearInterval(id);
          };
        }, [isAutoClickOn]);

        return (
          <>
            <button
              ref={counterBtnRef}
              onClick={() => {
                setCount((prevCount) => prevCount + 1);
              }}
            >
              {(count === 1 || count === 0) ? `Clicked ${count} time` : `Clicked ${count} times`}
            </button>
            <button
              onClick={() => {
                setIsAutoClickOn(false);
                setCount(0);
              }}
            >
              Reset
            </button>
            <button
              onClick={() => {
                setIsAutoClickOn(prev => !prev);
              }}
            >
              Auto Click
            </button>

            <!--------------------------- Extra  ------------------>
            <button
              onClick={() => setIsAutoClickOn(false)}                           // Auto click button will work for both start & stop feature, thus removed this Stop button.
            >
              Stop
            </button>
            <!--------------------------- Extra  ------------------>
          </>
        ) 
      }

      const container = document.querySelector('.js-container');
      ReactDOM.createRoot(container).render(<App />);
    </script> 
  </body>
</html>

*/





// ?? Proper React setup with Vite -> Organizing code into different files & folders instead of putting everything into one HTML file.
// !! Command line review in VS Code terminal- bash:
// TODO: command (You can find all commands in my Git/GitHub Doc's 18, 19 no., Link of Docs: https://docs.google.com/document/d/1xkRGWam96m_Y2dXY99-v5hZ25is9XAA0-u-j3W8wxQc/edit?pli=1&tab=t.0#heading=h.elrwqqw9ajl):
// mkdir                                        <!-- Here, Directory -> a folder. -->



// !! NodeJS command line review:
// node = lets us run JS code outside of a browser
// npm = node package manager. It contains lots of packages.
// package = external library
// npm = lets us install external libraries (or packages) into our project.
// TODO: Link of NPM package / external library of supersimpledev: https://www.npmjs.com/package/supersimpledev



// !! How " npm run dev " command works:
// npm run  = tells pc to look inside 'package.json' file for a section called "scripts".
// dev      = look inside 'package.json' file's "scripts" for "dev" & run the command on the right side of "dev" (which is "Vite").
// vite command is added by the vite package. It starts the Vite server, which lets us view the React website.



// !! Learn about Creating your own npm script inside “package.json” file in my Git/GitHub Docs link's 19.4: 
// The link: https://docs.google.com/document/d/1xkRGWam96m_Y2dXY99-v5hZ25is9XAA0-u-j3W8wxQc/edit?pli=1&tab=t.0#heading=h.2illj4m8wf2n



// !! Learn about npx create-vite vs npx supersimpledev difference in my Git/GitHub Docs link's 19.5(same link as previous):



// !! package.json:
// It contains = all the packages that are needed for the project.



// !! The proper React setup:
// -> Using the command line,
// -> npm,
// -> vite.



// !! Inside the created chatbot-project's folder:
// node_modules folder  -> where npm install all the packages.
// public               -> contains files that should be available to the public. Public means we can access these using URL. That means, when website is on the internet, I can give you url to this image & will be able access it.
// src                  -> source folder, that contains all codes for our website, like- CSS, JSX.
// inside src, 'assets' -> contains images that we want to display on our website with svg format.
// inside src, App.css  -> contains the original css codes. 
//                      -> All the CSS for the App component go inside this file. Ex- body style ain't for App component. It's for overall website.
// inside src, App.jsx  -> contains the original js/jsx codes.
// inside src, index.css-> This css file is loaded by main.jsx here using this code inside 'main.jsx' file- " import './index.css' ".
//                      -> All the CSS for the overall website should go inside this file.
// inside src, main.jsx -> Sets up React & displays App onto the website.
//                      -> It calls create root, gives it a container & then renders the App component onto the website.
//                      -> Ex1-   const container = document.querySelector('.js-container');
//                                ReactDOM.createRoot(container).render(<App />);
//                      -> Ex2-   createRoot(document.getElementById('root')).render(
//                                  <StrictMode>                                        // Wraps the App in a component called 'StrictMode'. It's a special component provided by React. ScriptMode gives us some additional checks & wrning when developing our App.
//                                    <App />
//                                  </StrictMode>,
//                                )
// .gitignore           -> It's used by a tool called git which helps us changes in our code. 
// eslint.config.js     -> It's used by a tool called eslint which highlights problems/mistakes in our JS code.
//                      -> Ex- in code, we accidentally wrote this- " const [count, setCoun] = useState(0) ". VS Code won't tell me but eslint will tell it's a mistake.
//                      -> For using this eslint, we have to install eslint extension in VS Code named- ESLint. So now, it will show in the setCount by underline it that it's a mistake/typing mistake.
//                      -> This file configures ESLint, it tell sit what to check for.
//                      -> Inside this file, in the code, there's a rules section. rules = tells ESLint what to check for. Ex- Inside rules section, after " ], ", we can write this code- " 'react/prop-types': 'off' ". This will turn off this particular rule / check.
// index.html           -> Contains all the html code for our website.
// package-lock.json    -> Saves the version numbers of all the packages that we install. So next time we run npm install, this file makes sure that we get the same versions for all of these packages.
//                      -> npm automatically updates package-lock.json, so we don't need to change this file. npm install will install the same (locked) versions written in package-lock.json (unless you change dependencies, delete the lock file, or use update commands).
//                      -> Benefit/use-case: After `git clone` or `git pull` (or switching branches / CI builds), running `npm install` uses `package-lock.json` to install the exact same dependency versions so the project runs the same everywhere.
// package.json         -> Has a list of all packages that we need to install to run the project & also contains some other info about our project.
//                      -> When we npm install a package, it will automatically update this list of packages. Thus, we don't need to change this file.
// README.md            -> Just text. It provides more info about the project. No code is here.
// vite.config.js       -> It configures vite so we don't need to change this file.
//                      -> Vite is the tool that we used to set up our project.
//                      -> Vite also helps us build the website. That means, it takes all the CSS, JSX & then loads them into the HTML file.
//                      -> Vite also creates a server. A server puts our website at a url, which is lets say- " localhost:5173 ".
//                      -> Vite server refreshes the website when we change some code, like- live server extension refreshes automatically.
//                      -> Vite server is a replacement for live server extension.



// !! Know that, Each component(function ChatInput, function ChatMessages etc.) should be separated into their own different file by inserting all components inside a folder by giving a folder name- 'components'.



// !! know that, only CSS, JSX, assets file need to be changed based on requirements. Other files should be as it is.



// !! Know that, some codes won't show error/mistake depending on ESLint extension's version.



// !! Know that, in html code, where we load js library using script src tag like this:
// <script src="https://unpkg.com/supersimpledev/chatbot.js"></script>
// Instead of this, for jsx file usage(as we are using npm), the best practice is load external libraries from 'node_modules' folder.
// For that, we need to download chatbot into this node_modules folder. For that, we have to install supersimpledev package. 



// !! Default Export -> inside App.jsx, when we write this code-
// import {Chatbot} from 'supersimpledev';

// now, instead of this curly braces, when we write this type of code that doesn't contain curly braces-
// import RobotProfileImage from './assets/robot/png';          // Here, RobotProfileImage can be any name.



// !! In this code-
// import { ChatInput } from './components/ChatInput';          // Here, I have avoided ChatInput.jsx. Bcz, we are using Vite, thus Vite adds .js or .jsx automatically.



// !! Know that, first, import from packages('react') at the top, then JS file(ChatInput.jsx / ChatInput.js) & then other types of files(.png, etc.).
/*
import { useState, useEffect, useRef } from 'react'
import { ChatInput } from './components/ChatInput'
import RobotProfileImage from './assets/robot.png'
import UserProfileImage from './assets/user.png'
import LoadingSpinnerGif from './assets/loading-spinner.gif'
import './App.css'
*/



// !! JS Modules features -> any variables/functions that we create in a file only exists in that file. So, inside (lets say) ChatInput file, 'function ChatInput() {.....}' only exists in that file. It can't be used outside this file. That helps us avoid naming conflicts. Bcz, using same variable/function name in different files, it won't cause error.
// Now if we use the variable/function outside of the file, we need to export that first. For doing that, infront of the code- 'function ChatInput() {.....}', we will add 'export' like this- 'export function ChatInput() {.....}'.



// !! JS Modules: Named Export vs Default Export & Using curly braces for Named Export / without curly braces for Default Export:
// 1. Named Export:
// export function ChatInput () { 
//    ..... 
// }


// 2. Default Export:
// export default ChatMessages              // It's useful if we want to export only one thing from a file.
                                            // It makes App component a default export of that file, so another file can import it without braces.
                                            // Ex- import App from './App.jsx'
                                            // and then render/use it.


// Import using curly braces code:
// import { ChatInput } from './components/ChatInput'         // Only works when useState is a named export.


// Import without curly braces code:
// import ChatMessages from './components/ChatMessages';      // Only works when that file uses default export.


// N.B: Know that, there's no fixed like which one is use when. Some people use Default Export bcz it encourages each file to focus on one thing.
// N.B: Some packages use Named Export while other packages use Default Export.



// !! Know that, Each component should have its own CSS file.



start from 5h.