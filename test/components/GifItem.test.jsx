import React from "react";
import { GifItem } from "../../src/components/GifItem";
import { render, screen } from "@testing-library/react";

describe("Pruebas en <GiftItem />", () => {
   const title = 'Saitama'
   const url = 'https://one-punch.com/saitama.jpg';
   const id = ''

   test('Debe hacer match con el snapshot', () => {
      const container = render(<GifItem title={title} url={url} id={id} />);
      expect(container).toMatchSnapshot();
   });

   test('Debe mostrar la imagen con el URL y el ALT indicado', () => {
      const container = render(<GifItem title={title} url={url} id={id} />);
      // screen.debug();
      // expect(screen.getByRole('img').src).toBe(url);
      // expect(screen.getByRole('img').alt).toBe(titulo);
      const { src, alt } = screen.getByRole('img');//forma profesional de hacerlo.
      expect(src).toBe(url);
      expect(alt).toBe(title);
   });

   test('Debe mostrar el titulo en el componente', () => {
      render(<GifItem title={title} url={url} id={id} />);
      expect(screen.getByText(title)).toBeTruthy();
   });

});