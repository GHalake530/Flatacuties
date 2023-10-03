// Function to load character data from the JSON file
function loadCharactersFromJSON() {
    fetch('db.json') // Assuming db.json is in the same directory as your HTML file
      .then((response) => response.json())
      .then((data) => {
        const characters = data.characters;
        const characterBar = document.getElementById('character-bar');
  
        // Loop through the character data and add each character's name to the character bar
        characters.forEach((character) => {
          const characterName = document.createElement('span');
          characterName.textContent = character.name;
          characterName.classList.add('character-name');
  
          // Add a click event listener to each character name for displaying details
          characterName.addEventListener('click', () => {
            displayCharacterDetails(character);
          });
  
          characterBar.appendChild(characterName);
        });
      })
      .catch((error) => {
        console.error('Error loading character data from JSON:', error);
      });
  }
  // Function to display character details in div#detailed-info
  function displayCharacterDetails(character) {
    const detailedInfo = document.getElementById('detailed-info');
    const nameElement = document.getElementById('name');
    const imageElement = document.getElementById('image');
    const voteCountElement = document.getElementById('vote-count');
    const votesForm = document.getElementById('votes-form');
  
    // Update the character details in the div#detailed-info
    nameElement.textContent = character.name;
    imageElement.src = character.image;
    imageElement.alt = character.name;
    voteCountElement.textContent = character.votes;
  
    // Add a submit event listener to the votes form
    votesForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const votesInput = document.getElementById('votes');
      const votes = parseInt(votesInput.value);
  
      // Update the vote count for the character
      character.votes += votes;
      voteCountElement.textContent = character.votes;
  
      // Clear the input field
      votesInput.value = '';
    });
  }
  // Call the loadCharactersFromJSON function to load character names from the JSON file
  loadCharactersFromJSON();
  