// Practica de promesas
const promesaCumplida = false;


// resolver y reject son funciones que tienen valor dependiendo de como salio la promesa
const miPromesa = new Promise((resolve, reject) => {
	setTimeout(()=> {
		
		if (promesaCumplida){
			resolve('Promesa cumplida');
		} else {
			reject('promesa rechazada...');
		}

	}, 3000);
});


const manejarPromesaCumplida = (valor) => {
  console.log(valor);
};

const manejarPromesaRechazada = (razonRechazo) => {
  console.log(razonRechazo);
};

miPromesa.then(manejarPromesaCumplida,manejarPromesaRechazada);

