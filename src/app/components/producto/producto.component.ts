import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductoModel } from 'src/app/model/producto-model';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.sass']
})
export class ProductoComponent implements OnInit {

  listProductos: ProductoModel [] = [];
  formProducto: FormGroup = new FormGroup({});
  isUpdate: boolean = false;
  constructor(
    private productoService: ProductoService) { }

  ngOnInit(): void {
    this.list();
    this.formProducto = new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl(''),
      material: new FormControl(''),
      tipo: new FormControl(''),
      precio: new FormControl(''),
      peso: new FormControl(''),
      largo: new FormControl(''),
      ancho: new FormControl(''),
      stock: new FormControl(''),
      descripcion: new FormControl(''),
      marca: new FormControl(''),
      talla: new FormControl('')
    });
    
  }

  list(){
    this.productoService.getProductos().subscribe(resp => {
      if(resp){
        console.log(resp);
        
        this.listProductos = resp;
      }
    });
  }

  save(){
    this.productoService.saveProducto(this.formProducto.value).subscribe(resp => {
      if(resp){
        this.list();
        this.formProducto.reset();
      }
    })
  }

  newProducto(){
    this.formProducto.reset();
    this.enableForm();
  }

  update(){
    this.productoService.updateProducto(this.formProducto.value).subscribe(resp=>{
      if(resp){
        this.list();
        this.formProducto.reset();
      }
    });
  }

  delete(id: any){
    if(confirm('¿Seguro que desea eliminar el producto?')){
      this.productoService.deleteProducto(id).subscribe(resp=>{
        if(resp){
          this.list();
        }
      });
    }
  }

  selectProduct(item: any){
    this.isUpdate = false;
    this.formProducto.controls['id'].setValue(item.id);
    this.formProducto.controls['nombre'].setValue(item.nombre);
    this.formProducto.controls['material'].setValue(item.material);
    this.formProducto.controls['tipo'].setValue(item.tipo);
    this.formProducto.controls['precio'].setValue(item.precio);
    this.formProducto.controls['largo'].setValue(item.largo);
    this.formProducto.controls['ancho'].setValue(item.ancho);
    this.formProducto.controls['stock'].setValue(item.stock);
    this.formProducto.controls['descripcion'].setValue(item.descripcion);
    this.formProducto.controls['marca'].setValue(item.marca);
    this.formProducto.controls['talla'].setValue(item.talla);
    this.disableForm();
  }

  updateItem(item: any){
    this.isUpdate = true;
    this.formProducto.controls['id'].setValue(item.id);
    this.formProducto.controls['nombre'].setValue(item.nombre);
    this.formProducto.controls['material'].setValue(item.material);
    this.formProducto.controls['tipo'].setValue(item.tipo);
    this.formProducto.controls['precio'].setValue(item.precio);
    this.formProducto.controls['largo'].setValue(item.largo);
    this.formProducto.controls['ancho'].setValue(item.ancho);
    this.formProducto.controls['stock'].setValue(item.stock);
    this.formProducto.controls['descripcion'].setValue(item.descripcion);
    this.formProducto.controls['marca'].setValue(item.marca);
    this.formProducto.controls['talla'].setValue(item.talla);
    this.disableForm2();
  }

  // Método para inhabilitar todos los campos del formulario
  disableForm() {
    this.formProducto.disable();
  }

  // Método para habilitar todos los campos del formulario
  enableForm() {
    this.formProducto.enable();
  }

  // Método para inhabilitar campos específicos del formulario
  disableForm2() {
    const nombreControl = this.formProducto.get('nombre');
    const materialControl = this.formProducto.get('material');
    const pesoControl = this.formProducto.get('peso');
    const largoControl = this.formProducto.get('largo');
    const anchoControl = this.formProducto.get('ancho');
    const stockControl = this.formProducto.get('stock');
    const descripcionControl = this.formProducto.get('descripcion');
    const marcaControl = this.formProducto.get('marca');
    const tallaControl = this.formProducto.get('talla');

    if (nombreControl) {
      nombreControl.disable();
    }

    if (materialControl) {
      materialControl.disable();
    }

    if (pesoControl) {
      pesoControl.disable();
    }

    if (largoControl) {
      largoControl.disable();
    }

    if (anchoControl) {
      anchoControl.disable();
    }

    if (stockControl) {
      stockControl.disable();
    }

    if (descripcionControl) {
      descripcionControl.disable();
    }

    if (marcaControl) {
      marcaControl.disable();
    }

    if (tallaControl) {
      tallaControl.disable();
    }
  }
}
