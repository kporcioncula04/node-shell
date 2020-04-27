//output a prompt
process.stdout.write('prompt > ');

//the stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove the newline

  if(cmd === 'pwd'){
    process.stdout.write(process.cwd());
  }
})

