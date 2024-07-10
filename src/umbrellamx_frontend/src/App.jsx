import React, { useState, useEffect } from 'react';

function App() {
  const [ph, setPh] = useState(8);
  const [conductividad, setConductividad] = useState({
    valor: '',
    salinidadPureza: '',
    variaciones: ''
  });

  useEffect(() => {
    // Función para simular cambios en los valores cada 5 segundos
    const interval = setInterval(() => {
      // Simular cambios aleatorios en el pH
      const newPh = (Math.random() * (14 - 0) + 0).toFixed(2); // Genera un pH aleatorio entre 0 y 14
      setPh(newPh);

      // Simular cambios aleatorios en la conductividad
      const newConductividad = {
        valor: (Math.random() * (1000 - 0) + 0).toFixed(2), // Genera un valor de conductividad aleatorio
        salinidadPureza: Math.random() < 0.5 ? 'Agua salada' : 'Agua dulce', // Simula agua salada o dulce aleatoriamente
        variaciones: Math.random() < 0.5 ? 'Aumentando' : 'Disminuyendo' // Simula variaciones aleatorias
      };
      setConductividad(newConductividad);
    }, 5000); // Intervalo de 5000 milisegundos (5 segundos)

    // Limpia el intervalo al desmontar el componente para evitar fugas de memoria
    return () => clearInterval(interval);
  }, []); // El array vacío asegura que useEffect se ejecute solo una vez al montar el componente

  return (
    <div>
      <header>
        <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
          <div className='text-center rounded-xl bg-white p-8 shadow-lg max-w-3xl w-full'>
            <h1 className='text-6xl mb-12'>Lectura de sensores</h1>
            
            {/* Cuadro para Sensor de pH */}
            <div className='border-2 border-gray-300 rounded-lg p-6 mb-8'>
              <div className='text-3xl mb-6'>
                <p className='text-4xl mb-4'>Sensor de pH</p>
                <div className='text-xl'>
                  <p className='mb-2'>Valor de pH: {`${ph}`}</p>
                  <p className='mb-2'>Tendencias y cambios: {` `}</p>
                </div>
              </div>
            </div>
            
            {/* Cuadro para Sensor de conductividad */}
            <div className='border-2 border-gray-300 rounded-lg p-6'>
              <div className='text-3xl mb-6'>
                <p className='text-4xl mb-4'>Sensor de conductividad</p>
                <div className='text-xl'>
                  <p className='mb-2'>Valor de conductividad: {`${conductividad.valor}`}</p>
                  <p className='mb-2'>Salinidad y pureza: {`${conductividad.salinidadPureza}`}</p>
                  <p className='mb-2'>Variaciones: {`${conductividad.variaciones}`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
