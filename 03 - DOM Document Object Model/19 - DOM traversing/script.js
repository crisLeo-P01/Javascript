// Recorrer el DOM (DOM Traversing)

/*
Padre - parent (Nodo del que desciende)
    - parentNode - Devuelve el nodo padre (que puede no ser un elemento)
    - parentElement - Devuelve el nodo elemento padre
    NOTA
    Los nodos del tipo Document y DocumentFragment nunca van a tener un elemento padre,
    parentNode y parentElement devolverá siempre null.

Hijos - child (Nodo que desciende de un padre)
    - childNodes - Devuelve todos los nodos hijos
    - children - Devuelve todos los nodos elementos hijos
    - firstChild - Devuelve el primer nodo hijo
    - firstElementChild - Devuelve el primer nodo elemento hijo
    - lastChild - Devuelve el último nodo hijo
    - lastElementChild - Devuelve el último nodo elemento hijo
    - hasChildNodes() - Devuelve true si el nodo tiene hijos y false si no tiene

Hermanos - siblings (Nodo al mismo nivel)
    - nextSibling - Devuelve el siguiente nodo hermano
    - nextElementSibling - Devuelve el siguiente nodo elemento hermano
    - previousSibling - Devuelve el anterior nodo hermano
    - previousElementSibling - Devuelve el anterior nodo elemento hermano

Cercano
    - closest(selector) - Selecciona el nodo más cercano que cumpla con el selector, aún es experimental.
*/

const parent = document.getElementById('parent');

console.log(parent.parentElement);

// console.log(parent.childNodes); // Los más habitual es usar .children

// console.log(parent.children);

// console.log(parent.children[2]); // Para seleccionar un elemento en específico

console.log(parent.firstChild);

// console.log(parent.firstElementChild);

console.log(parent.lastElementChild);

// console.log(parent.parentElement.previousElementSibling);

// console.log(parent.parentElement.nextElementSibling);
