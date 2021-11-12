const newSentence = document.querySelector("#new-sentence")
const createSentenceForm = document.querySelector("#create-sentence-form")

class Sentence {

    static listenForEvents() {
    newSentence.addEventListener('click', this.showForm)
    sentenceForm.addEventListener('submit', (e) => Sentence.formHandler(e))
  }

  static showForm() {
    newSentence.style.display="none"
    createSentenceForm.style.display="block"
  }

// function showForm() {
//   let x = document.getElementById("sentenceForm");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

  static formHandler(e) {
    e.preventDefault()
    let eInput = document.querySelector("#input-example").value
    let vWordId = document.querySelector("#input-vocabulary_word_id").value
    createSentence(eInput, vWordId)
  }

  static createSentence(example, vocabulary_word_id) {
    console.log();
  }



}

