class Vocabulary {
  constructor(vocabulary_word, vwAttributes) {
    this.id = vocabulary_word.id
    this.word = vwAttributes.word
    this.part_of_speech = vwAttributes.part_of_speech
    this.definition = vwAttributes.definition
    Vocabulary.all.push(this)
    console.log(this);
  }

  renderVocabularyCard() {
    return `
    <form class="create-sentence-form"><br>
      <div data-id=${this.id}>
        <h2 class="display-5 fw-bold">${this.word}</h2>
        <p class="fst-italic">${this.part_of_speech}</p>
        <p class="lead">${this.definition}</p>
    
        <input type="text" class="input-example" name="sentence[example]" value="">
        <p class="form-text" id="emailHelp">Please enter a sentence using this word.</p>
        <input type="hidden" class="input-vocabulary_word_id" name="vocabulary_word_id" value="${this.id}">
        <input type="hidden" class="input-vocabulary_word" name="vocabulary_word" value="${this.word}">
        <input type="submit" class="btn btn-light" value="Create"></input>
        <br><br>
      </div>
    </form><br><br>`
    }
}

Vocabulary.all = [];



// renderVocabularyCard() {
//   return `
//   <div data-id=${this.id}>
//     <h2 class="display-5 fw-bold">${this.word}</h2>
//     <p class="fst-italic">${this.part_of_speech}</p>
//     <p class="lead">${this.definition}</p>
//   </div>
//   <form id="create-sentence-form" onsubmit="sFormHandler(e);return false">
//     <div class="mb-3"><br>
//       <input id="input-example" type="text" name="example" value="" class="form-control">
//       <div id="emailHelp" class="form-text">Please enter a sentence using this word.</div>
//       <input id="input-vocabulary_word_id" type="hidden" name="vocabulary_word_id" value="">
//       <br>
//       <input type="submit" class="btn btn-light" name="submit" value="Create"></input>
//       <br><br>
//     </div>
//   </form><br><br>`
//   }



// renderVocabularyCard() {
//   return `
//     <div data-id=${this.id}>
//     <h2>${this.word}</h2>
//     <i>${this.part_of_speech}</i>
//     <p>${this.definition}</p>
    
//     <div id="form-container"><br>
//       <form id="create-sentence-form" style="">
//         <input id='input-example' type="text" name="example" value="" size="100" placeholder="Enter your sentence here." class="input-text">
//         <input id='input-vocabulary_word_id' type="hidden" name="vocabulary_word_id" value="">
//         <br><br>
//         <input id='create-button' type="submit" name="submit" value="Create New Sentence" class="submit">
//       </form>
//     </div>
//       <div id="s-container"></div>

//     </div>
//   <br><br>`;
//  }



// <div class="col-md-6 p-lg-5 mx-auto my-5 bg-warm rounded">
//   <div class="container" id="s-container"></div>
//   <br><br><br>
// </div>