import React, { Fragment, useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
   const [categories, setCategories] = useState(['One Punch']);
   const onAddCategory = (newCategory) => {
      if (categories.includes(newCategory)) return;
      setCategories([newCategory, ...categories]);
   }

   return (
      <Fragment>
         <h1>GifExpertApp</h1>
         <AddCategory
            onNewCategory={(event) => onAddCategory(event)}
         />
         {
            categories.map((category) => (
               <GifGrid
                  key={category}
                  category={category} />
            ))
         }
      </Fragment>
   );
}

      //setCategories([...categories, 'Valorant']);
      // Formas de agragar información a un vector.
      //setCategories('Valorant', [...categories]);
      // setCategories(cat => [...cat, categoria]);