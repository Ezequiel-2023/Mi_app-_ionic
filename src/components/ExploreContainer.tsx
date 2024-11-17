import React, { useState } from 'react';
import './ExploreContainer.css';

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  const [quetzales, setQuetzales] = useState<number | string>('');
  const [dolares, setDolares] = useState<number | null>(null);
  const conversionRate = 7.72007; // AL dia 16/11/24 segun Banguat https://www.banguat.gob.gt/tipo_cambio/

  const handleConvert = () => {
    const cantidadQuetzales = parseFloat(quetzales.toString());
    if (!isNaN(cantidadQuetzales)) {
      setDolares(cantidadQuetzales / conversionRate);
    } else {
      alert('Por favor, ingresa un número válido.');
    }
  };

  return (
    <div id="container">
      <h1>DivisApp 23002762</h1>
      <strong>Convertidor de Quetzales a Dólares</strong>
      <div className="input-container">
        <label htmlFor="quetzales">Cantidad en Quetzales:</label>
        <input
          type="number"
          id="quetzales"
          value={quetzales}
          onChange={(e) => setQuetzales(e.target.value)}
          placeholder="Ingresa cantidad en Q"
        />
      </div>
      <button onClick={handleConvert}>Convertir</button>
      {dolares !== null && (
        <div className="result">
          <p>
            Equivalente en dólares: <strong>${dolares.toFixed(2)}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default ExploreContainer;
