
  //  let toLoop = ['makedinner', 'makedinner', ];

    let torray = [];


    rendertodoHTML();

    function rendertodoHTML() {
      let todoHTML = '';

      torray.forEach((value, index) => {
        const todo = torray[index];

        const html = `<p>${todo} <button onclick="
          torray.splice(${index});
          rendertodoHTML();
        " class="js-delete-btn">Delete</button></p>`;

        todoHTML += html; 
        //console.log(value);
      });
        document.querySelector('.js-show-todo').innerHTML = todoHTML;
      }


    function addTodo() {
      let inputElement = document.querySelector('.js-todo');

      let todoName = inputElement.value;

      torray.push(todoName);
      console.log(torray);

      inputElement.value = '';

      rendertodoHTML();


    } 