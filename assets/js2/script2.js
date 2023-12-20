const propiedades_venta = [
  {
    nombre: 'Apartamento de lujo en zona exclusiva',
    descripcion: ' Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    src: '"https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg"',
    habitaciones: '4 habitaciones',
    baños: '5 baños',
    ubicacion: '123 Luxury Lane,Prestige Suburb, CA 45678',
    costo: 5000,
    smoke: false,
    pets: false
  },
  {
    nombre: 'Apartamento acogedor en la montaña',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    src: '"https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg"',
    habitaciones: '2 habitaciones',
    baños: '1 baños',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    costo: 2500,
    smoke: true,
    pets: true
  },
  {
    nombre: 'Penthouse de lujo con terraza panorámica',
    descripcion: ' Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    src: '"https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg"',
    habitaciones: '3 habitaciones',
    baños: ' 3 baños',
    ubicacion: '567 Skyline Avenue,Skyview City, CA 56789',
    costo: 4200,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Penthouse de lujo',
    descripcion: ' Este penthouse de lujo ofrece una terraza panorámica ',
    src: '"https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg"',
    habitaciones: '3 habitaciones',
    baños: ' 3 baños',
    ubicacion: '567 Skyline Avenue,Skyview City, CA 56789',
    costo: 4200,
    smoke: false,
    pets: true
  },
]
const elrow = document.getElementById("elrow2")
let todaslascards = ""

for (const juanito of propiedades_venta) {

  const card = `<div class="col-md-4 mb-4">
    <div class="card">
      <img
        src= ${juanito.src}
        class="card-img-top"
        alt="Imagen del departamento"
      />
      <div class="card-body">
        <h5 class="card-title">
        ${juanito.nombre}
        </h5>
        <p class="card-text">
          ${juanito.descripcion}
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${juanito.ubicacion}
        
        </p>
        <p>
          <i class="fas fa-bed"></i> ${juanito.habitaciones} |
          <i class="fas fa-bath"></i> ${juanito.baños}
        </p>
        <p><i class="fas fa-dollar-sign"></i>${juanito.costo}</p>
        ${juanito.smoke == true ?
      `<p class="text-success">
             <i class="fas fa-smoking"></i> Permitido fumar
             </p>`
      :
      `<p class="text-danger">
           <i class="fas fa-smoking-ban"></i> No se permite fumar
         </p>`
    }
     
   ${juanito.pets == true ?
      `<p class="text-success">
             <i class="fas fa-paw"></i> Mascotas permitidas
           </p>`
      :
      `<p class="text-danger">
         <i class="fa-solid fa-ban"></i> No se permiten mascotas
       </p>`
    }
      </div>
    </div>
  </div>`

  todaslascards =  todaslascards + card

}
elrow.innerHTML = todaslascards


console.log("hola")
