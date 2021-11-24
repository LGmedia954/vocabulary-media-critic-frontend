const vEndPoint = "http://localhost:3000/api/v1/vocabulary_words"
const sEndPoint = "http://localhost:3000/api/v1/sentences"
const createSentenceForm = document.getElementById("#create-sentence-form")

document.addEventListener('DOMContentLoaded', () => {
  
  console.log("DOM is Loaded");
  getVocab()
  getSentence()

})

function getVocab() {
  fetch(vEndPoint)
  .then(response => response.json())
  .then(vocab => {
    vocab.data.forEach(vocabulary_word => {
      // creating a new instance of the V class from array
      let newVocabulary = new Vocabulary(vocabulary_word, vocabulary_word.attributes)

      document.querySelector('#v-container').innerHTML += newVocabulary.renderVocabularyCard()
    })
  })
  .catch(error => console.log(error))
 }

 window.onload=function() {
  createSentenceForm.addEventListener("submit", (e) => {
    e.preventDefault();
    sFormHandler(e)
    console.log("Form submitted.");
  })
 }

function getSentence() {
  fetch(sEndPoint)
  // .then(response => response.json())
  .then(response => {
    return response.json()
  })
  .then(blurb => {
    console.log(blurb);
    blurb.data.forEach(sentence => {
      // debugger
      // creating a new instance of the S class
      let newSentence = new Sentence(sentence, sentence.attributes)
        
      document.querySelector('#s-container').innerHTML += newSentence.renderMySentence()
    })
    const mySentence = document.getElementById("#my-sentence")
    // mySentence.addEventListener(to do, for the delete)
  })
  .catch(error => console.log(error))
}

function sFormHandler(e) {
  e.preventDefault();
  console.log('this is a test')
  const eInput = document.querySelector('#input-example').value
  const vWordId = document.querySelector('#input-vocabulary_word_id').value
  Sentence.sPostFetch(eInput, vWordId)
}



// window.onload=function() {
//   if(createSentenceForm) {
//   createSentenceForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     sFormHandler(e)
//     console.log("Form submitted.");
//   })
//  }
// }

// createSentenceForm.addEventListener("submit", (e) => {
//   e.preventDefault()
//   sFormHandler(e)
// })

// const createSentenceForm = document.querySelector("#create-sentence-form")
// createSentenceForm.addEventListener("submit", (e) => Sentence.sFormHandler(e))