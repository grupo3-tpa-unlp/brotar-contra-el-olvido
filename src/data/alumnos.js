const alumnos = [
    { apellido: 'Artabe Bajamon', nombre: 'Rita Liliana Remedios', postal: '', dni: '2.482.265', legajo: '20.270' },
    { apellido: 'Artigas Barrientos', nombre: 'José Clemente', postal: '', dni: '5.667.030' },
    { apellido: 'Bacchini Gomila', nombre: 'Héctor Federico', postal: '' },
    { apellido: 'Artabe Bajamon', nombre: 'Rita Liliana Remedios', postal: '', dni: '2.482.265', legajo: '20.270' },
    { apellido: 'Artigas Barrientos', nombre: 'José Clemente', postal: '', dni: '5.667.030' },
    { apellido: 'Bacchini Gomila', nombre: 'Héctor Federico', postal: '' },
    { apellido: 'Artabe Bajamon', nombre: 'Rita Liliana Remedios', postal: '', dni: '2.482.265', legajo: '20.270' },
    { apellido: 'Artigas Barrientos', nombre: 'José Clemente', postal: '', dni: '5.667.030' },
    { apellido: 'Bacchini Gomila', nombre: 'Héctor Federico', postal: '' },
    { apellido: 'Artabe Bajamon', nombre: 'Rita Liliana Remedios', postal: '', dni: '2.482.265', legajo: '20.270' },
    { apellido: 'Artigas Barrientos', nombre: 'José Clemente', postal: '', dni: '5.667.030' },
    { apellido: 'Bacchini Gomila', nombre: 'Héctor Federico', postal: '' },
    { apellido: 'Artabe Bajamon', nombre: 'Rita Liliana Remedios', postal: '', dni: '2.482.265', legajo: '20.270' },
    { apellido: 'Artigas Barrientos', nombre: 'José Clemente', postal: '', dni: '5.667.030' },
    { apellido: 'Bacchini Gomila', nombre: 'Héctor Federico', postal: '' },
]

let id=1;
for (let alumno of alumnos) {
    alumno.id = id++;
}

export default alumnos;
