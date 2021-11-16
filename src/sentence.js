const tryIt = document.querySelector("#try-it")
// const createSentenceForm = document.querySelector("#create-sentence-form")
const mySentence = document.querySelector("#my-sentence")

class Sentence {

  // static listenForEvents() {
  //   tryIt.addEventListener('click', this.showForm)
  //   createSentenceForm.addEventListener('submit', (e) => Sentence.sFormHandler(e))
  // }

  static showForm() {
    createSentenceForm.style.display="none"
    createSentenceForm.style.display="block"
  }

  static sFormHandler(e) {
    e.preventDefault();
    const eInput = document.querySelector("#input-example").value
    const vWordId = document.querySelector("#input-vocabulary_word_id").value
    Sentence.postSentence(eInput, vWordId)
  }

  static postSentence(example, vocabulary_word_id) {
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
      // Data not coming through here.
      const sMarkup = `
      <div data-id=${sentence.id}>
        <h5>${sentenceData.attributes.example}</h5><br>
        <button data-id=${sentenceData.id}>edit</button>
      </div>
      <br><br>`;
  
      document.querySelector('#s-container').innerHTML += sMarkup;
    })
  }


}

