/* eslint-disable */

function domainnamegenerator() {
  //write your code here

  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  for (let i = 0; i < pronoun.length; i++) {
    for (let a = 0; a < adj.length; a++) {
      for (let b = 0; b < noun.length; b++) {
        return pronoun[i] + adj[a] + noun[b];
      }
    }
  }
}
console.log(domainnamegenerator());
