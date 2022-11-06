import { Fragment } from "react"
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
   const { images, isLoading } = useFetchGifs(category);
   return (
      <Fragment>
         <h3>{category}</h3>
         {
            isLoading && (<h2>Cargando...</h2>)
         }
         <div className="card-grid">
            {
               images.map((image) => (
                  <GifItem
                     key={image.id}
                     {...image}//Con esta línea desestructuramos todas las props de imagen
                  />
               ))
            }
         </div>
      </Fragment>
   )
}

/**
 * Las importaciones tienen un orden
 * 1. Importaciones de react
 * 2. Importaciones de terceros
 * 3. Importaciones de nuestro código
 * 4. Importaciones de funciones
 */

// const [images, setImages] = useState([]);
// const getImages = async () => {
//    const newImages = await getGifs(category);
//    setImages(newImages);
// }
// useEffect(() => {
//    getImages();
// }, []);


{/* <input value={campos} onChange={(event) => {
               setCampos({ ...campos, [0]: event.target.value });
               console.log(campos);
            }} />

            <input value={campos[1]} onChange={(event) => {
               setCampos({ ...campos, [1]: event.target.value });
               console.log(campos);
            }} />

            <input value={campos[2]} onChange={(event) => {
               setCampos({ ...campos, [2]: event.target.value });
               console.log(campos);
            }} /> */}
