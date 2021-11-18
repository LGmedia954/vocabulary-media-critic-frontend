const mySentence = document.querySelector("#my-sentence")
class Sentence {
  constructor(sentence, sAttributes) { 
    this.id = sentence.id
    this.example = sAttributes.example
    this.vocabulary_word_id = sAttributes.vocabulary_word_id
    Sentence.all.push(this)
  }

  static showForm() {
    createSentenceForm.style.display="none"
    createSentenceForm.style.display="block"
  }

  static sFormHandler(e) {
    e.preventDefault();
    const eInput = document.querySelector("#input-example").value
    const vWordId = document.querySelector("#input-vocabulary_word_id").value
    Sentence.sPostFetch(eInput, vWordId)
  }

  static sPostFetch(example, vocabulary_word_id) {
    let sData = {example, vocabulary_word_id}

    fetch(endPoint, {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(sData)
    })
    .then(response => response.json())
    // .catch(error => console.log(error))
    .then(sentence => {
      console.log(sentence);
      const sentenceData = sentence.data
      // Data not coming through here. Check the above line for how it's nested.
      // let newSentence = new Sentence(sentence, sentence.attributes)
      let newSentence = new Sentence(sentenceData, sentenceData.attributes)

      document.querySelector('#s-container').innerHTML += newSentence.renderMySentence()
    })
  }
  
renderMySentence() {
  return `
    <div data-id=${this.id}>
      <h3>${this.example}</h3>
      <p>${this.vocabulary_word_id}</p>
      <button data-id=${this.id}>edit</button>
    </div>
    <br><br>`;
  }

}

Sentence.all = [];