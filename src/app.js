/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];

  let adj = ["great", "big"];

  let noun = ["jogger", "racoon"];

  let ext = [".com", ".es", ".org"];

  let result = "";

  const generateDomain = () => {
    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          for (let l = 0; l < ext.length; l++) {
            if (result == "") {
              result = pronoun[i] + adj[j] + noun[k] + ext[l];
            } else {
              result =
                result + "<br>" + (pronoun[i] + adj[j] + noun[k] + ext[l]);
            }
          }
        }
      }
    }
    return result;
  };

  const excuseElement = document.getElementById("domain");
  excuseElement.innerHTML = generateDomain();
};
