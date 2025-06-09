
import prompts from 'prompts'
import figlet from 'figlet'



const questions = [
  {
    type: 'text',
    name: 'name',
   message: 'What is your name?',
    
  },
];

(async () => {
  const response = await prompts(questions);
log(response)

  // => response => { username, age, about }
})();




async function log(data) {
let name = data.name
figlet(name, function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
  
};


