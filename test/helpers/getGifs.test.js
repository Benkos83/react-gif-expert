import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs()', () => {

   test('Debe retornar un arreglo de gifs', async () => {
      const gifs = await getGifs('One Punch');
      expect(gifs.length).toBeGreaterThan(0); //toBeGreaterThan evalua si el resultado de la expresión es mayor a cero.
      expect(gifs[0]).toEqual({
         id: expect.any(String),
         title: expect.any(String),
         url: expect.any(String),
      });
   });
})