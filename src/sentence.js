const mySentence = document.getElementById("#my-sentence")
const showUrl = "http://localhost:3000/api/v1/sentences"
class Sentence {
  constructor(sentence, sAttributes) { 
    this.id = sentence.id
    this.example = sAttributes.example
    this.vocabulary_word_id = sAttributes.vocabulary_word_id
    this.vocabulary_word = sAttributes.vocabulary_word.word
    Sentence.all.push(this)
    console.log(this);
  }


    
 static sPostFetch(example, vocabulary_word_id, vocabulary_word) {
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
      // render JSON response
      // let newSentence = new Sentence(sentence, sentence.attributes)
      let newSentence = new Sentence(sentenceData, sentenceData.attributes)
  
      document.querySelector('#s-container').innerHTML += newSentence.renderMySentence()
    })
    .catch(error => console.log(error))
  }


  
renderMySentence() {
  return `

    <form class="my-sentence"><br>
      <div class="render-field" data-id=${this.id}>
        <i class="fas fa-book-open fa-1x"></i>
        <p class="display-6">${this.example}</p>
        <p class="fst-italic">... using word # ${this.vocabulary_word_id} "${this.vocabulary_word}"</p>
        <input type="hidden" class="input-id" name="id" value="${this.id}">
        <input type="submit" class="delete-btn btn btn-dark" value="Delete"></input>
      </div>
    </form>
      <br><br><br>`
}



static deleteSentence(e) {
  
  const grabId = parseInt(e.target.querySelector('.input-id').value)

  fetch(`${showUrl}/${grabId}`, {
    method: "DELETE",
    headers: {"Content-Type": "application/json"}
  })
  e.target.querySelector(`.render-field`).remove()
  console.log("Sentence deleted.");
}

}

Sentence.all = [];



//e.target.querySelector(`.my-sentence`).innerHTML = "";

// static deleteSentence(e) {
// const showUrl = "http://localhost:3000/api/v1/sentences/${id}"

//   fetch(showUrl, {
//     method: "DELETE",
//     headers: {"Content-Type": "application/json"}
//   })
//   .then(response => response.json())
//   .then(sentence => {
//    console.log(sentence);
//    parseInt(e.target.querySelector(`#${this.id}`).value)
//    this.id.remove()
//    e.target.querySelector(`${this.example}`).innerHTML = "";
//   })
//   .catch(error => console.log(error))
// }


//e.target.querySelector(`[data-id="${this.id}"]`).remove();
//e.target.querySelector(`data-id=${this.id}`).remove();
   //e.target.querySelector(`[data-id=${this.id}]`).remove();

// static deleteSentence(e) {
//   fetch(sEndPoint, {
//     method: "DELETE",
//     headers: {"Content-Type": "application/json"},
//   })
//   //.then(response => response.json())
//    //e.target.querySelector(`[data-id="${this.id}"]`).remove();
//    //e.target.querySelector(`data-id=${this.id}`).remove();
//    //e.target.querySelector(`[data-id=${this.id}]`).remove();
//    //e.target.querySelector(`${this.id}`).remove();
//    //e.target.querySelector(`data-id=${this.id}`).remove()
//    //this.id.remove()
//    //e.target.querySelector(`${this.id}`).remove();
//    (`${this.id}`).remove()
//    e.target.querySelector(`${this.example}`).innerHTML = "";
// }







//.then(json => alert(json.message))

//<button type="button" data-id=${this.id} class="delete-btn btn btn-dark">Delete</button>

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