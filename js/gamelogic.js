
// Avatar eco+
function avatar(race, item, playerPG)
{
    playground=document.getElementById(playerPG);
    playground.insertAdjacentHTML("beforeend","<div class='avatar-container'><img class='avatar' id ='avatar-"+playerPG+"' width='100px'><img class='item' id='item-"+playerPG+"' width='100px'> </div>");

    avatarImg=document.getElementById("avatar-"+playerPG);
    itemImg=document.getElementById("item-"+playerPG);

    switch (race) {
        case "human":
            avatarImg.setAttribute("src","../images/races/barbarian.svg");
            avatarImg.setAttribute("alt","avatar human");
            avatarImg.setAttribute("title","20% less damage taken");
            break;

        case "orc":
            avatarImg.setAttribute("src","../images/races/orc-head.svg");
            avatarImg.setAttribute("alt","avatar orc");
            avatarImg.setAttribute("title","40% more max health");
            break

        case "elf":
            avatarImg.setAttribute("src","../images/races/woman-elf-face.svg");
            avatarImg.setAttribute("alt","avatar elf");
            avatarImg.setAttribute("title","30% chance to deflect the attack back to the opponent. The attacker takes damage equal to 50% of the original hit. The elf takes no damage.");
            break;

        case "vampire":
            avatarImg.setAttribute("src","../images/races/vampire-dracula.svg");
            avatarImg.setAttribute("alt","avatar vampire");
            avatarImg.setAttribute("title","10% lifesteal from opponents current health at start of the vampire's turn.");
            break;

        default:
            break;
    }
    switch (item) 
    {
        case "boots":
            itemImg.setAttribute("src","../images/items/boots.svg");
            itemImg.setAttribute("alt","item boots");
            itemImg.setAttribute("title","30% chance to dodge an attack");
            break;

        case "staff":
            itemImg.setAttribute("src","../images/items/wizard-staff.svg");
            itemImg.setAttribute("alt","item staff");
            itemImg.setAttribute("title","20% increase in healing");
            break;

        case "sword":
            itemImg.setAttribute("src","../images/items/two-handed-sword.svg");
            itemImg.setAttribute("alt","item sword");
            itemImg.setAttribute("title","30% more damage");
            break;

        case "bow":
            itemImg.setAttribute("src","../images/items/crossbow.svg");
            itemImg.setAttribute("alt","item bow");
            itemImg.setAttribute("title","30% chance to attack twice");
            break;

        default:
            break;
    }
} 


function races(character,race)
{
    switch (race) 
    {
        case "human" :

            break;
   
        case "orc":
            character.currenthealth = character.currenthealth * 1.4;
            character.maxHealth = character.maxHealth *1.4;
            break;
            
        default:
            break;
    }
}