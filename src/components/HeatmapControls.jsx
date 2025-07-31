import { useState } from 'react';
import { startTracking, stopTrackingAndShowHeatmap, hideHeatmap } from '../lib/heatmap-tracker';

export default function HeatmapControls() {
  // Estado para gestionar el flujo del seguimiento
  const [trackingStatus, setTrackingStatus] = useState('inactive');
  const [statusMessage, setStatusMessage] = useState('Seguimiento inactivo');

  const handleStart = () => {
    setTrackingStatus('calibrating');
    startTracking(
      // Callback para cuando el seguimiento está activo
      (message) => {
        setTrackingStatus('tracking');
        setStatusMessage(message);
      },
      // Callback para mensajes de calibración
      (message) => {
        setStatusMessage(message);
      }
    );
  };

  const handleStop = () => {
    const message = stopTrackingAndShowHeatmap();
    setTrackingStatus('stopped');
    setStatusMessage(message);
  };
    //ocultar mapa
    const handleHide = () => {
    const message = hideHeatmap();
    setTrackingStatus('inactive'); // Volvemos al estado inicial
    setStatusMessage(message);
  };

  return (
    <div id="tracking-controls">
      {/* Indicador de estado */}
      <span id="status-indicator">{statusMessage}</span>

      {/* Botón de Iniciar: se muestra si está inactivo o detenido */}
      {(trackingStatus === 'inactive' || trackingStatus === 'stopped') && (
        <button onClick={handleStart}>
          Iniciar Seguimiento
        </button>
      )}

      {/* Botón de Detener: se muestra durante la calibración y el seguimiento */}
      {(trackingStatus === 'calibrating' || trackingStatus === 'tracking') && (
        <button onClick={handleStop}>
          Detener y Mostrar Mapa
        </button>
      )}

      {/* Botón de Ocultar: se muestra cuando el mapa está visible */}
      {trackingStatus === 'stopped' && (
        <button onClick={handleHide}>
          Ocultar Mapa y Reiniciar
        </button>
      )}


    </div>
  );
}