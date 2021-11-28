const mySentence = document.getElementById("#my-sentence")
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
    e.preventDefault();
    const userInput = e.target.input.value
    const vWordId = e.target.parentElement.dataset.id
    const vWord = e.target.parentElement.dataset.word
    console.log("Form handler check.");
    sPostFetch(userInput, vWordId, vWord)
    }


    
  sPostFetch(example, vocabulary_word_id, vocabulary_word) {
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

      // debugger
      // double check how data is nested in the console so you can successfully access the attributes of each individual object
      // render JSON response
      // let newSentence = new Sentence(sentence, sentence.attributes)
      let newSentence = new Sentence(sentenceData, sentenceData.attributes)
  
      document.querySelector('#s-container').innerHTML += newSentence.renderMySentence()
    })
    .catch(error => console.log(error))
  }



// to do
// mySentence.addEventListener(for delete action)


  
renderMySentence() {
  return `
    <div id="my-sentence">
      <div data-id=${this.id}>
        <i class="fas fa-book-open fa-1x"></i>
        <p class="display-6">${this.example}</p>
        <p class="fst-italic">... using word # ${this.vocabulary_word_id} "${this.vocabulary_word}"</p>
        <button class="btn btn-dark" id=${this.id} >Delete</button>
      </div>
    </div>
      <br><br><br>`
  }

}

Sentence.all = [];



// <input type="hidden" id="sentence-id" value="${this.id}">
// <input type="submit" class="btn btn-dark" value="Delete" id="delete-sentence-button">

// <button class="btn btn-dark" id=${this.id} >Delete</button>

// renderMySentence() {
//   return `
//     <div data-id=${this.id}>
//       <h3>${this.example}</h3>
//       <p>${this.vocabulary_word_id}</p>
//       <button data-id=${this.id}>delete</button>
//     </div>
//     <br><br>`;
//   }