var git = require('gift');


var repos = {
  kodeklubben: 'https://github.com/kodeklubben/oppgaver.git'
}


git.clone(repos.kodeklubben, 'tmp', function(err, _repo){
  if(err) console.log(err);
  else console.log(_repo);
});
