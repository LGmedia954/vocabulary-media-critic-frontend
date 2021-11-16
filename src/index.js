const endPoint = "http://localhost:3000/api/v1/vocabulary_words"

document.addEventListener('DOMContentLoaded', () => {
  getVocab()
  // Sentence.listenForEvents()

})

function getVocab() {
  fetch(endPoint)
  .then(response => response.json())
  .then(vocab => {
    vocab.data.forEach(vocabulary_word => {
      render(vocabulary_word)
      })

    // the 2 lines below were moved from line 3
    // because we needed to wait for fetch to finish
    const createSentenceForm = document.querySelector('#create-sentence-form')
    createSentenceForm.addEventListener('submit', (e) => Sentence.sFormHandler(e))

    })
  .catch(error => console.log(error))
 }

 function render(vocabulary_word) {
  const vMarkup = `
  <div data-id=${vocabulary_word.id}>
    <h2>${vocabulary_word.attributes.word}</h2>
    <i>${vocabulary_word.attributes.part_of_speech}</i>
    <p>${vocabulary_word.attributes.definition}</p>
    <button id="try-it">Try It</button>

    <div id="form-container"><br>
      <form id="create-sentence-form" style="">
        <input id='input-example' type="text" name="example" value="" size="100" placeholder="Enter your sentence here." class="input-text">
        <input id='input-vocabulary_word_id' type="hidden" name="vocabulary_word_id" value="">
        <br><br>
        <input id='create-button' type="submit" name="submit" value="Create New Sentence" class="submit">
      </form>
    </div>
      <div id="my-sentence" style=""><br></div>

    </div>
  <br><br>`;

  document.querySelector('#v-container').innerHTML += vMarkup;

 }

