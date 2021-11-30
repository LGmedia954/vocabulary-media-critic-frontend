# Javascript Project Notes

MODELS and ASSOCATIONS

Vocabulary_Word

- has_many sentences
  • word
  • part_of_speech
  • definition

Sentence

- belongs_to vocabulary_word
  • example
  • vocabulary_word_id

WHAT THE PROGRAM DOES

- When a user loads the webpage, they should see a list of vocabulary words.
- A user should be able to view the word, its part of speech, and its definition.
- A user should be able to type a sentence into the input field using that word.
- A user should be able to view their sentence as it appears on the DOM after the create button has been activated.

AJAX/FETCH REQUESTS

- On initial page load, a Get Request is made for all Vocabulary Words.
- A Post Request will be made to create and add a Sentence Example to the DOM.
- Reach: Upon user mouse actions, Get Requests are made for items to show.
