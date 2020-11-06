// ==================================================================================//
// var newLink = document.createElement('a'); // Création d'un élément HTML de type a
// // Affectation de divers attributs
// newLink.href = "https://www.google.com"; 
// newLink.id = "ggle_link";
// newLink.title = "Lien vers google.com";
// newLink.text = "Un lien"
// // On insère ensuite ce nouvel élément dans notre site 
// var p2 = document.getElementById("bloc_text2");
// p2.appendChild(newLink);
// ==================================================================================//
// var span = document.body.appendChild(document.createElement('span'));
// span.textContent = 'Du texte en plus !'; // Là, tout fonctionne !
// span.textContent += 'encore plus de text !'
// ==================================================================================//
// var titre = document.getElementById("titre"); // on récupère un élément existant
// var titre2 = titre.cloneNode(true); // on le clone 
// console.log(titre2);
// titre.parentNode.appendChild(titre2); // On l'ajoute à notre document web 
// ==================================================================================//
// var actualTitle = document.getElementById('titre');
// var newTitle = document.createTextNode('Nouveau Titre ajouté via le code JS');
// actualTitle.replaceChild(newTitle, actualTitle.firstChild);
// ==================================================================================//
// var link = document.querySelector('a');
// var oldLink = link.parentNode.removeChild(link);
// console.log(oldLink);
// document.body.appendChild(oldLink);
// ==================================================================================//
// var pp = document.getElementById('bloc_text');
// var contained = pp.childNodes;
// var nodeContained = pp.hasChildNodes();
// console.log(contained);
// console.log(nodeContained); // return "true" si l'élément ciblé contient d'autre éléments
// ==================================================================================// 
// /*
//     Fonction insertAfter, basée sur le principe de insertBefore mais non existante dans JS. 
//     C'est pourquoi nous la réalisons nous même. 
// */
// function insertAfter(newElement, afterElement){
//     var parent = afterElement.parentNode;
//     if(afterElement === parent.lastChild){
//         parent.appendChild(newElement);
//     }else{
//         parent.insertBefore(newElement, afterElement.nextSibling);
//     }
// }
// ==================================================================================// 
// // =================================EXERCICE 1=======================================// 
// var conteneur = document.createElement('div');
// conteneur.id = 'divTP2';

// var textesNode = [
//     'Langages basés sur ECMAScript :',
//     'JavaScript',
//     'JScript',
//     'ActionScript',
//     'EX4'
// ];

// var para = document.createElement('p');
// para.textContent = textesNode[0];

// var maliste = document.createElement('ul'), 
//     liItem;
// for(var i=1, l=textesNode.length; i<l; i++){
//     liItem = document.createElement('li');
//     liItem.textContent = textesNode[i];
//     maliste.appendChild(liItem);
// }

// conteneur.appendChild(para);
// conteneur.appendChild(maliste);

// document.body.appendChild(conteneur);
// ==================================================================================// 
// =================================EXERCICE 2=======================================//
// var conteneur = document.createElement('div');
// conteneur.id = 'divTP3';

// var languages = [{
//     t: 'JavaScript',
//     d: 'JavaScript est un langage de programmation de scripts principalement utilisé dans les pages web interactives mais aussi coté serveur.'
// }, {
//     t: 'JScript',
//     d: 'JScript est le nom générique de plusieurs implémentations d\'ECMAScript 3 créées par Microsoft.'
// }, {
//     t: 'ActionScript',
//     d: 'ActionScript est le langage de programmation utilisé au sein d\'applications clientes (Adobe Flash, Adobe Flex) et serveur (Flash media server, JRun, Macromedia Generator).'
// }, {
//     t: 'EX4',
//     d: 'ECMAScript for XML (E4X) est une extension XML au langage ECMAScript.'
// }];

// var paragraph = document.createElement('p');
// var textParagraph = document.createTextNode('Langages basés sur ECMAScript :');
// paragraph.appendChild(textParagraph);

// var englob = document.createElement('dl'),
//     dtSub, ddSub;
// for(var i=0, l=languages.length; i<l; i++){
//     dtSub = document.createElement('dt')
//     ddSub = document.createElement('dd')
//     dtSub.textContent = languages[i].t;
//     ddSub.textContent = languages[i].d;
//     englob.appendChild(dtSub);
//     englob.appendChild(ddSub);
// }

// document.body.appendChild(paragraph);
// document.body.appendChild(englob);
// ==================================================================================// 
// =================================EXERCICE 3=======================================//
// var mainDiv = document.createElement('div');
// mainDiv.id = 'divTP4';

// var formulaire = document.createElement('form');
// formulaire.enctype = "multipart/form-data";
// formulaire.method = "post";
// formulaire.action = "upload.php";

// var  fildS = document.createElement('fieldset');

// var subDiv = document.createElement('div');
// subDiv.style = "text-align: center";

// var labl = document.createElement('label');
// labl.htmlFor = "inputUpload";
// labl.textContent = "Image à uploader"

// var inpt = document.createElement('input');
// inpt.type = "file";
// inpt.name = "inputUpload";
// inpt.id = "inputUpload";

// var brs = [
//     document.createElement('br'),
// ];

// var inpt2 = document.createElement('input');
// inpt2.type = "submit";
// inpt2.value = "Envoyer";

// var inSubDiv = [
//     labl,
//     inpt,
//     brs[0],
//     brs[1],
//     inpt2
// ];

// for(var i=0, l=inSubDiv.length; i<l; i++){
//     subDiv.appendChild(inSubDiv[i]);
// }
// ==================================================================================// 
// =================================EXERCICE 4=======================================//
function createSimpleNode(nameElement, attributs, contenu){
    var node = document.createElement(nameElement);
    if(contenu){
        node.textContent = contenu;
    }
    for(var i in attributs){
        node.setAttribute(i, attributs[i]);
    }
    return node;
}

var aaa = createSimpleNode('div', {id:'testID', text:"BlaBlaBlaBla"});
var mainDiv = document.getElementById('container');
mainDiv.appendChild(aaa);