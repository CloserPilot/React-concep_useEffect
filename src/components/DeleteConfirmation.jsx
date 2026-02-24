import { useEffect } from "react";
import ProgressBar from "./ProgressBar";

const TIMER = 3000

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  useEffect(() => {
    console.log('Timer Set')
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    //El return de useEffect se ejecuta:
    //*ANTES de que el useEffect se vuelva a ejecutar
    //*ANTES que el componente se desmonte de la UI (del DOM)
    return () => {
      console.log('Cleaning timer')
      clearTimeout(timer);
    }

    //Se pasa la dependencia de la funcion, pero hay que tener cuidado por que cada
    //reenderizado donde se encuentra la funcion, es un objeto diferente y activa el useEffect()
  }, [onConfirm])

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>

      {/*Se usa el ProgessBar en un componente aparte para no tener que checar si todo lo demas se tiene que volver a renderdizar*/}
      {/*cada vez que se actualiza el ProgressBar*/}
      <ProgressBar timer={TIMER} />
    </div>
  );
}
