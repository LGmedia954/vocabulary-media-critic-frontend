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



// function sFormHandler(e) {
//   e.preventDefault();
//   const eInputGrab = document.querySelector('.input-example').value
//   const vWordIdGrab = parseInt(document.querySelector('.input-vocabulary_word_id').value)
//   const vWordGrab = document.querySelector('.input-vocabulary_word').value

//   const eInput = e.target.input.value
//   const vWordId = e.target.parentElement.dataset.id
//   const vWord = e.target.parentElement.dataset.word
//   Sentence.sPostFetch(eInput, vWordId, vWord)
//   }



  function sFormHandler(e) {
    e.preventDefault();
    const eInput = document.querySelector('.input-example').value
    const vWordId = parseInt(document.querySelector('.input-vocabulary_word_id').value)
    const vWord = document.querySelector('.input-vocabulary_word').value
    sPostFetch(eInput, vWordId, vWord)
    }



function sPostFetch(example, vocabulary_word_id, vocabulary_word) {
    // build the body object outside of fetch
    const sData = {sentence: {example, vocabulary_word_id, vocabulary_word}}
  
    fetch(sEndPoint, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(sData)
    })
    .then(response => response.json())
    .then(sentence => {
      console.log(sentence);
      const sentenceData = sentence.data
      // render JSON response
      // let newSentence = new Sentence(sentence, sentence.attributes)
      let newSentence = new Sentence(sentenceData, sentenceData.attributes)
  
      document.querySelector('#s-container').innerHTML += newSentence.renderMySentence()
    })
    .catch(error => console.log(error))
  }



// function sPostFetch(example, vocabulary_word_id, _vocabulary_word) {
//   // build the body object outside of fetch
//   const sData = {sentence: {example, vocabulary_word_id, _vocabulary_word}}

//   fetch(sEndPoint, {
//     method: "POST",
//     headers: { 
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//    } ,
//     body: JSON.stringify(sData)
//   })
//   .then(response => response.json())
//   .then(sentence => {
//     console.log(sentence);
//     const sentenceData = sentence.data
//     // render JSON response
//     // let newSentence = new Sentence(sentence, sentence.attributes)
//     let newSentence = new Sentence(sentenceData, sentenceData.attributes)

//     document.querySelector('#s-container').innerHTML += newSentence.renderMySentence()
//   })
//   .catch(error => console.log(error))
// }