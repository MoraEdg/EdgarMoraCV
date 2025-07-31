// Variables privadas del módulo para mantener el estado
let heatmapInstance = null;
let gazeData =[];
let isTracking = false;

/**
 * Inicializa la instancia de heatmap.js.
 * Se asegura de que solo se cree una vez.
 */
function initializeHeatmap() {
  if (heatmapInstance) return;

  const heatmapContainer = document.getElementById('heatmap-container');
  if (!heatmapContainer) {
    console.error('El contenedor del mapa de calor #heatmap-container no fue encontrado.');
    return;
  }

  heatmapInstance = window.h337.create({
    container: heatmapContainer,
    radius: 50,
    maxOpacity: 0.6,
    minOpacity: 0.1,
    blur: 0.75,
  });
}

/**
 * Inicia el seguimiento ocular con WebGazer.
 * @param {function} onTrackingStarted - Callback que se ejecuta cuando el seguimiento está activo.
 * @param {function} onCalibrationUpdate - Callback para actualizar el estado de la calibración.
 */
export function startTracking(onTrackingStarted, onCalibrationUpdate) {
  if (isTracking) return;

  // Asegurarse de que el heatmap esté inicializado
  initializeHeatmap();

  // Limpiar datos anteriores
  gazeData = [];
  isTracking = true;

  // Inicia WebGazer y solicita permiso para la cámara [1]
  window.webgazer.begin();

  // Muestra los elementos visuales para la calibración
  window.webgazer.showPredictionPoints(true);
  window.webgazer.showVideo(true);

  onCalibrationUpdate('Calibrando... Mueve el mouse y haz clic en la pantalla.');

  // Configura el listener para recolectar datos
  window.webgazer.setGazeListener((data, elapsedTime) => {
    if (data && isTracking) {
      gazeData.push({
        x: Math.round(data.x),
        y: Math.round(data.y),
        value: 1,
      });
    }
  });

  // Damos un tiempo para la calibración inicial antes de cambiar el estado
  setTimeout(() => {
    if (isTracking) {
      onTrackingStarted('Seguimiento activo...');
    }
  }, 4000);
}

/**
 * Detiene el seguimiento y muestra el mapa de calor.
 */
export function stopTrackingAndShowHeatmap() {
  if (!isTracking) return;

  isTracking = false;

  // Pausa WebGazer para detener la recolección de datos pero mantener la calibración [1, 2]
  window.webgazer.pause();

  // Oculta los elementos visuales de WebGazer
  window.webgazer.showPredictionPoints(false);
  window.webgazer.showVideo(false);

  if (heatmapInstance && gazeData.length > 0) {
    const dataForHeatmap = {
      max: 10, // Puedes ajustar este valor según la densidad de puntos que esperas
      data: gazeData,
    };
    heatmapInstance.setData(dataForHeatmap); // [3, 4]

    // Hacemos visible el contenedor del heatmap
     const heatmapSection = document.getElementById('heatmap-section');
    if (heatmapSection) {
      heatmapSection.style.display = 'block'; // O 'flex' si prefieres
    }
    return 'Mapa de calor generado.';
  } else {
    return 'No se recolectaron suficientes datos.';
  }
}


// --- FUNCIÓN PARA OCULTAR Y LIMPIAR EL MAPA ---
/**
 * Oculta el mapa de calor y limpia sus datos para un nuevo uso.
 */
export function hideHeatmap() {
  if (!heatmapInstance) return;

  // Limpia los datos del mapa para que no reaparezca
  heatmapInstance.setData({ max: 0, data:[] });

  const heatmapSection = document.getElementById('heatmap-section');
  
  if (heatmapSection) {
    heatmapSection.style.display = 'none';
  }
  return 'Listo para iniciar un nuevo seguimiento.';
}

