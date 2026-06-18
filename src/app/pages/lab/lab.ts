import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-lab',
  imports: [CommonModule],
  templateUrl: './lab.html',
  styleUrl: './lab.css',
})
export class Lab {

  welcome = 'Bienvenido al laboratorio';
  name = signal('Camilo Prieto');
  age = 21;
  person = {
    name: 'Camilo Prieto',
    age: 21,
    ciudad: 'Bogotá',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS248mX0v4FNTFBlt4sDNxpLFGsEACtTy7VsQ&s'
  };

  tasks = signal(['Instalar Angular', 'Crear Proyecto', 'Crear Componente', 'Crear Servicio']);

  disabeled= true;

  clickHandler(){
    alert('Hola mundo');
  }

  changeHandler(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }
}
