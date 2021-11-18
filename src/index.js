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