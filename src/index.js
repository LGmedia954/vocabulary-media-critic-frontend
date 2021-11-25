const vEndPoint = "http://localhost:3000/api/v1/vocabulary_words"
const sEndPoint = "http://localhost:3000/api/v1/sentences"

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

    document.querySelectorAll(".create-sentence-form").forEach(form => {
      form.addEventListener("submit", (e) => {
       debugger
        e.preventDefault();
        console.log("Form submitted.");
        sFormHandler(e)
      })
    })

  })
  .catch(error => console.log(error))
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
      let newSentence = new Sentence(sentence, sentence.attributes)
        
      document.querySelector('#s-container').innerHTML += newSentence.renderMySentence()
    })
  })
  .catch(error => console.log(error))
}



function sFormHandler(e) {
  e.preventDefault();
  console.log('Form handler.')
  const eInput = document.querySelector('#input-example').value
  const vWordId = document.querySelector('#input-vocabulary_word_id').value
  Sentence.sPostFetch(eInput, vWordId)
}




