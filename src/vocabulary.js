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
    <div data-id=${this.id}>
    <h2>${this.word}</h2>
    <i>${this.part_of_speech}</i>
    <p>${this.definition}</p>
    
    <div id="form-container"><br>
      <form id="create-sentence-form" style="">
        <input id='input-example' type="text" name="example" value="" size="100" placeholder="Enter your sentence here." class="input-text">
        <input id='input-vocabulary_word_id' type="hidden" name="vocabulary_word_id" value="">
        <br><br>
        <input id='create-button' type="submit" name="submit" value="Create New Sentence" class="submit">
      </form>
    </div>
      <div id="s-container"></div>

    </div>
  <br><br>`;
 }

}

Vocabulary.all = [];