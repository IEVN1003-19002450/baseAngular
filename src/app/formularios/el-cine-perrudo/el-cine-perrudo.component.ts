import { Component } from '@angular/core';

@Component({
  selector: 'app-el-cine-perrudo',
  templateUrl: './el-cine-perrudo.component.html',
  styleUrls: ['./el-cine-perrudo.component.css'] 
})
export class ElCinePerrudoComponent {
  nombre: string = '';
  cantidadCompradores: number = 0;
  cantidadBoletos: number = 0;
  tarjetaCineco: string = 'No';
  valorPagar: string = '';

  procesar() {
    let precioBoleto = 12.0;
    let total = 0;
  
    // Limitar la cantidad
    const maxBoletosPorComprador = 7; // Máximo de boletos por comprador
    const boletosPermitidos = this.cantidadCompradores * maxBoletosPorComprador; // Límite de boletos en base a la cantidad de compradores
  
    // Validación
    if (this.cantidadBoletos > boletosPermitidos) {
      alert (`vivillo desde chiquillo, si ya sabes que puede adquirir un máximo de ${maxBoletosPorComprador} boletos. Como son ${this.cantidadCompradores} compradores, entonces el máximo es ${boletosPermitidos} boletos, que dijo me quiere hacer mensillooo, no vuelvas a intentarlo.`);
      return; // ew
    }
  
    total = this.cantidadBoletos * precioBoleto;
  
    // Descuentos por cantidad de boletos
    if (this.cantidadBoletos >= 5) {
      total *= 0.85; // 15% de descuento si compra 5 
    } else if (this.cantidadBoletos >= 3) {
      total *= 0.9; // 10% de descuento si compra entre 3 y 4 boletos
    }
  
    // Descuento adicional por tarjeta Cineco
    if (this.tarjetaCineco === 'Si') {
      total *= 0.9; // 10% de descuento adicional si tiene tarjeta Cineco
    }
  
    // Asegúrate de que el total se maneje como número
    this.valorPagar = `$${total.toFixed(2)}`; // Asigna el total a pagar en moneeeeeey
  }

  salir(): void {
    window.location.href = 'edge://surf/'; // link del juego perron
  }
}
