import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {
   const [inputValue, setInputValue] = useState('');
   //const onInputChange = ({target}) => { //Se puede desestructurar el event.
   //con la propiedad target se obtiene el valor del evento.
   const onInputChange = (event) => {
      setInputValue(event.target.value);
   }

   const onSubmit = (event) => {
      event.preventDefault();
      if (inputValue.trim().length <= 1) return;
      // setCategories(categories => [inputValue, ...categories]);//Forma correcta de agregar elementos a un vector llamado callback
      onNewCategory(inputValue.trim());
      setInputValue('');
   }

   return (
      //<form onSubmit={(event) => onSubmit(event)}> Forma larga para recibir el evento cuando solo es un procedimiento a ejecutar.
      <form onSubmit={onSubmit}>
         <input
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            //onChange={onInputChange} //tambien se puede escribir de esta manera y siempre se estara recibiendo el event.
            onChange={(event) => onInputChange(event)}
         />
      </form>
   )
}