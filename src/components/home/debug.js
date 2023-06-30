function useState(initialState) {
   let state = initialState;
 
   function setState(newState) {
     state = newState;
   }
 
   return [state, setState];
 }
 
 // Usage
 const [testState, setTestState] = useState(5);
 
 console.log(testState); // Output: 5
 
 setTestState(234);
 
 console.log(testState); // Output: 234
 