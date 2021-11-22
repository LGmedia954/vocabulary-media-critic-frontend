const mySentence = document.querySelector("#my-sentence")
class Sentence {
  constructor(sentence, sAttributes) { 
    this.id = sentence.id
    this.example = sAttributes.example
    this.vocabulary_word_id = sAttributes.vocabulary_word_id
    this.vocabulary_word = sAttributes.vocabulary_word.word
    Sentence.all.push(this)
    console.log(this);
  }

  sFormHandler(e) {
    // Page keeps refreshing upon submit
    e.preventDefault();
    const eInput = document.querySelector('#input-example').value
    const vWordId = document.querySelector('#input-vocabulary_word_id').value
    Sentence.sPostFetch(eInput, vWordId)
  }

  sPostFetch(example, vocabulary_word_id) {
    // build the body object outside of fetch
    const sData = {example, vocabulary_word_id}

    fetch(sEndPoint, {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(sData)
    })
    .then(response => response.json())
    .then(sentence => {
      console.log(sentence);
      const sentenceData = sentence.data
      // let newSentence = new Sentence(sentence, sentence.attributes)
      let newSentence = new Sentence(sentenceData, sentenceData.attributes)

      document.querySelector('#s-container').innerHTML += newSentence.renderMySentence()
    })
  }
  
renderMySentence() {
  return `
    <div data-id=${this.id}>
    <p class="display-6">${this.example}</p>
      <p class="fst-italic">... using word # ${this.vocabulary_word_id} "${this.vocabulary_word}"</p>
      <br>
      <button type="button" class="btn btn-dark" data-id=${this.id} value="delete">Clear</button>
    </div><br><br>`
  }

}

Sentence.all = [];



// renderMySentence() {
//   return `
//     <div data-id=${this.id}>
//       <h3>${this.example}</h3>
//       <p>${this.vocabulary_word_id}</p>
//       <button data-id=${this.id}>delete</button>
//     </div>
//     <br><br>`;
//   }