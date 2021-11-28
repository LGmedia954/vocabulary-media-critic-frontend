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
        e.preventDefault();

        document.querySelector('.input-example').addEventListener('input-example', Vocabulary.grabSentence);
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
      
      let newSentence = new Sentence(sentence, sentence.attributes)
        
      document.querySelector('#s-container').innerHTML += newSentence.renderMySentence()
    })
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