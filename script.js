function calculatePrice(type) {
    // Obtenemos los valores ingresados por el cliente
    const preciosemana = parseFloat(document.getElementById("preciosemana").value);
    const largo = parseFloat(document.getElementById("largo").value);
    const ancho = parseFloat(document.getElementById("ancho").value);
    const alto = parseFloat(document.getElementById("alto").value);
    const pesoneto = parseFloat(document.getElementById("pesoneto").value);
  
    // Calculamos el pesovol y m3
    const pesovol = (largo * ancho * alto) / 6000;
    const m3 = (largo * ancho * alto) / 1000000;
  
    // Calculamos el detmaritimo
    let detmaritimo = Math.max(m3, pesoneto * 0.001);
    if (detmaritimo <= 1) {
      detmaritimo = 1;
    }
  
    // Calculamos el pesodeterminado
    const pesodeterminado = Math.max(pesovol, pesoneto);
  
    // Calculamos el precioa
    let precioa;
    if (pesodeterminado >= 0 && pesodeterminado <= 5) {
      precioa = 150;
    } else if (pesodeterminado > 5 && pesodeterminado <= 10) {
      precioa = 250;
    } else if (pesodeterminado > 10 && pesodeterminado <= 15) {
      precioa = 350;
    } else if (pesodeterminado > 15) {
      precioa = pesodeterminado * preciosemana;
    }
  
    // Calculamos el preciom
    let preciom;
    if (detmaritimo >= 0 && detmaritimo <= 3) {
      preciom = 750;
    } else if (detmaritimo > 3 && detmaritimo <= 6) {
      preciom = 700;
    } else if (detmaritimo > 6 && detmaritimo <= 10) {
      preciom = 650;
    } else if (detmaritimo > 10 && detmaritimo <= 15) {
      preciom = 600;
    } else if (detmaritimo > 15 && detmaritimo < 20) {
      preciom = 550;
    }
  
    // Calculamos el preciomfinal
    const detmaritimo2 = Math.round(detmaritimo);
    const preciomfinal = detmaritimo2 * preciom;
  
    // Actualizamos los campos de texto correspondientes
    if (type === "aereo") {
      document.getElementById("precioa").value = precioa;
    } else if (type === "maritimo") {
      document.getElementById("preciom").value = preciomfinal;
    }
  }
  