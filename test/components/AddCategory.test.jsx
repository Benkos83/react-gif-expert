
import { fireEvent, render, screen } from "@testing-library/react";
import { scryRenderedComponentsWithType } from "react-dom/test-utils";
import { AddCategory } from "../../src/components";

describe('Pruebas en <AddCategory />', () => {

   test('Debe cambiar el valor de la caja de texto', () => {
      render(<AddCategory onNewCategory={() => { }} />);
      const input = screen.getByRole('textbox');
      fireEvent.input(input, { target: { value: 'Saitama' } }); //Con fireEvent podemos simular cualquier evento.
      expect(input.value).toBe('Saitama');
      screen.debug();
   });

   test('Debe llamar a onNewCategory si el input tiene un valor', () => {
      const inputValue = 'Saitama';
      const onNewCategory = jest.fn(); //jest.fn() simula el funcionamiento de una función.

      render(<AddCategory onNewCategory={onNewCategory} />);
      const input = screen.getByRole('textbox');
      const form = screen.getByRole('form');
      fireEvent.input(input, { target: { value: inputValue } });
      fireEvent.submit(form);
      expect(input.value).toBe('');
      expect(onNewCategory).toHaveBeenCalled();
      expect(onNewCategory).toHaveBeenCalledTimes(1);
      expect(onNewCategory).toHaveBeenCalledWith(inputValue);
   });

   test('No debe llamar el onNewCategory si el input esta vacio', () => {
      const onNewCategory = jest.fn(); //jest.fn() simula el funcionamiento de una función.
      render(<AddCategory onNewCategory={onNewCategory} />);

      const form = screen.getByRole('form');
      fireEvent.submit(form);

      expect(onNewCategory).toHaveBeenCalledTimes(0);
      expect(onNewCategory).not.toHaveBeenCalled();
   });

});