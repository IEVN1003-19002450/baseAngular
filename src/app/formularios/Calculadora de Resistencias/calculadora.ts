import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.html',
  styleUrls: ['./calcuradora.css']
})
export class IsresComponent implements OnInit {
  colors: string[] = ['Negro', 'Café', 'Rojo', 'Naranja', 'Amarillo', 'Verde', 'Azul', 'Violeta', 'Gris', 'Blanco'];
  tolerancias: string[] = ['oro', 'plata'];

  formulario!: FormGroup;
  valor: number = 0;
  valorMaximo: number = 0;
  valorMinimo: number = 0;
  resultado: boolean = false;

  colorSeleccionado1: string = '';
  colorSeleccionado2: string = '';
  colorSeleccionado3: string = '';
  toleranciaSeleccionada: string = '';

  ngOnInit(): void {
    this.formulario = new FormGroup({
      color1: new FormControl('', Validators.required),
      color2: new FormControl('', Validators.required),
      color3: new FormControl('', Validators.required),
      tolerancia: new FormControl('', Validators.required),
    });
  }

  calcular(): void {
    const valorColor1 = this.colors.indexOf(this.formulario.get('color1')?.value);
    const valorColor2 = this.colors.indexOf(this.formulario.get('color2')?.value);
    const multiplicador = Math.pow(10, this.colors.indexOf(this.formulario.get('color3')?.value));

    this.valor = (valorColor1 * 10 + valorColor2) * multiplicador;
    const toleranceFactor = this.formulario.get('tolerancia')?.value === 'oro' ? 0.05 : 0.10;
    this.valorMaximo = this.valor * (1 + toleranceFactor);
    this.valorMinimo = this.valor * (1 - toleranceFactor);
    this.resultado = true;

    this.colorSeleccionado1 = this.formulario.get('color1')?.value;
    this.colorSeleccionado2 = this.formulario.get('color2')?.value;
    this.colorSeleccionado3 = this.formulario.get('color3')?.value;
    this.toleranciaSeleccionada = this.formulario.get('tolerancia')?.value;
  }

  // Devuelve el color de fondo para la tolerancia
  getToleranceColor(): string {
    if (this.toleranciaSeleccionada === 'oro') {
      return 'gold';
    } else if (this.toleranciaSeleccionada === 'plata') {
      return 'silver';
    }
    return 'transparent';
  }

  // Devuelve el código de color basado en el nombre del color seleccionado
  getColorCode(color: string): string {
    switch (color) {
      case 'Negro':
        return 'black';
      case 'Café':
        return '#8B4513';
      case 'Rojo':
        return 'red';
      case 'Naranja':
        return 'orange';
      case 'Amarillo':
        return 'yellow';
      case 'Verde':
        return 'green';
      case 'Azul':
        return 'blue';
      case 'Violeta':
        return 'violet';
      case 'Gris':
        return 'gray';
      case 'Blanco':
        return 'white';
      default:
        return 'transparent';
    }
  }
}