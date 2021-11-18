const endPoint = "http://localhost:3000/api/v1/vocabulary_words"

document.addEventListener('DOMContentLoaded', () => {
  getVocab()

})

function getVocab() {
  fetch(endPoint)
  .then(response => response.json())
  .then(vocab => {
    vocab.data.forEach(vocabulary_word => {
      // creating a new instance of the V class from array
      let newVocabulary = new Vocabulary(vocabulary_word, vocabulary_word.attributes)

      document.querySelector('#v-container').innerHTML += newVocabulary.renderVocabularyCard()
    })

    // these 2 lines were moved here because we needed to wait for fetch to finish
    const createSentenceForm = document.querySelector('#create-sentence-form')
    createSentenceForm.addEventListener('submit', (e) => Sentence.sFormHandler(e))

    })
  .catch(error => console.log(error))
 }

function getSentence() {
  fetch(endPoint)
  .then(response => response.json())
  .then(blurb => {
    blurb.data.forEach(sentence => {
      // creating a new instance of the S class from array
      let newSentence = new Sentence(sentence, sentence.attributes)
      
      // document.querySelector('#s-container').innerHTML += newSentence.renderMySentence()
    })
    .catch(error => console.log(error))
  })
}
