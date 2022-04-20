const vEndPoint = "http://localhost:3000/api/v1/vocabulary_words"
const sEndPoint = "http://localhost:3000/api/v1/sentences"

document.addEventListener('DOMContentLoaded', () => {
  
  console.log("DOM is Loaded");
  getVocab()
  getSentence()

})



function getVocab() {
  fetch(vEndPoint)
  .then(response => response.json())
  .then(vocab => {
    vocab.data.forEach(vocabulary_word => {
      // creating a new instance of the V class from array
      let newVocabulary = new Vocabulary(vocabulary_word, vocabulary_word.attributes)

      document.querySelector('#v-container').innerHTML += newVocabulary.renderVocabularyCard()
      //better method below to avoid the event listener problem
      //document.querySelector('#v-container').insertAdjacentHTML("beforeend", newVocabulary.renderVocabularyCard())
    })

    document.querySelectorAll(".create-sentence-form").forEach(form => {
      form.addEventListener("submit", (e) => {
        //debugger
        e.preventDefault();

        document.querySelector('.input-example').addEventListener('input-example', (e) => Vocabulary.grabSentence(e))
        Vocabulary.grabSentence(e)
      })
    })

  })
  .catch(error => console.log(error))
 }



function getSentence() {
  fetch(sEndPoint)
  // .then(response => response.json())
  .then(response => {
    return response.json()
  })
  .then(blurb => {
    console.log(blurb);
    blurb.data.forEach(sentence => {
      
      let newSentence = new Sentence(sentence, sentence.attributes)
        
      document.querySelector('#s-container').innerHTML += newSentence.renderMySentence()
    })

    // Event listeners for form and button
    document.querySelectorAll(".my-sentence").forEach(form => {
      form.addEventListener("submit", (e) => {

        e.preventDefault();

        document.querySelectorAll('.delete-btn.btn.btn-dark').forEach(button => {
          button.addEventListener("submit", (e) => { e.preventDefault(), Sentence.deleteSentence(e) })
        })

        e.preventDefault();
        Sentence.deleteSentence(e)
      })

      
      // quick assessment 4/15/22
      // const grabForm = document.getElementById('user-comments-form');
      //   grabForm.addEventListener("submit", (e) => {
      //   e.preventDefault();
  
      //   let pElem = document.querySelector('#user-comments-div');
      //   pElem.innerHTML = document.querySelector('#user-comments-input').value
       
      //  });


    })

  })
  .catch(error => console.log(error))
}


