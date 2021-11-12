const endPoint = "http://localhost:3000/api/v1/vocabulary_words"

document.addEventListener('DOMContentLoaded', () => {
  getVocab()
  Sentence.listenForEvents()

})

function getVocab() {
  fetch(endPoint)
  .then(response => response.json())
  .then(vocab => {
    vocab.data.forEach(vocabulary_word => {
      const vMarkup = `
        <div data-id=${vocabulary_word.id}>
          <h2>${vocabulary_word.attributes.word}</h2>
          <i>${vocabulary_word.attributes.part_of_speech}</i>
          <p>${vocabulary_word.attributes.definition}</p>
          <button onclick="showForm()">Try It</button>

          <div class="form-container"><br>
            <form id="create-sentence-form" style="">
              <input id='input-example' type="text" size="100" name="example" value="" placeholder="Enter your sentence here." class="input-text">
              <input id='input-vocabulary_word_id' type="hidden" name="vocabulary_word_id" value="">
              <br><br>
              <input id= 'create-button' type="submit" name="submit" value="Create New Sentence" class="submit">
            </form>
          </div>
        <br><br>`;

        document.querySelector('#v-container').innerHTML += vMarkup
      })
    })
 }

