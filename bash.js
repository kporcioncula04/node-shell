//output a prompt
process.stdout.write('prompt > ');
const pwd = require('./pwd.js');
// const ls = require('./ls');

//the stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline
    if(cmd === 'pwd') {
        pwd();
    }
    else if(cmd === 'ls') {
        require('./ls.js');
    }
    else {
        process.stdout.write('You typed: ' + cmd);
    }    
  process.stdout.write('\nprompt > ');
});
