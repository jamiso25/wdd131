const characterCard = {
    logo: 'images/characterCard.jpg',
    name: 'Snortleblat',
  
     class: 'Swamp Beast Diplomat',
     level: 5,
     health: 100,
    levelUp: function () {

            this.level += 1;
      },
    attack: function () {
        const health = this.health
        if (health > 0) {
          this.health -= 20;}
          else{
            alert('Character Died')
          }
    }                      
  };
    
console.log(characterCard.name);

const img = document.querySelector('#characterCard');
img.setAttribute("src", characterCard.logo);


const attack = document.querySelector('#health');
const level = document.querySelector('#level');
const health = document.querySelector('#attacked');
const levelUp = document.querySelector('#levelUp');

attack.textContent = characterCard.health;
level.textContent = characterCard.level;


health.addEventListener("click", function () {
    characterCard.attack();
    attack.textContent = characterCard.health;
})

levelUp.addEventListener("click", function () {
    characterCard.levelUp();
    level.textContent = characterCard.level;
});