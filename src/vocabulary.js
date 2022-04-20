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



  static grabSentence(e) {
    const userInput = e.target.querySelector('.input-example').value
    const vWordId = parseInt(e.target.querySelector('.input-vocabulary_word_id').value)
    const vWord = e.target.querySelector('.input-vocabulary_word').value
    console.log("Form handler pass.");
    Sentence.sPostFetch(userInput, vWordId, vWord)
  }

}

Vocabulary.all = [];

