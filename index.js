const endPoint = "http://localhost:3000/api/v1/vocabulary_words"

document.addEventListener('DOMContentLoaded', () => {
  getVocab()
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
          <button data-id=${vocabulary_word.id}>Try It</button>
        </div>
        <br><br>`;

        document.querySelector('#v-container').innerHTML += vMarkup
      })
    })
 }

