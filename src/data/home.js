import React from 'react';

const data = {
  title: (
    <>
      <span>Hola!</span>
      {' '}
      <span>Soy Pato,</span>
    </>
  ),
  text: `desarrollor web con ${new Date().getFullYear() - 2012} años de experiencia en multiples lenguajes de `
        + 'programación y plataformas. Actualmente'
        + ' me desarrollo como software developer engineer en Groupon/Peixe, miembro del equipo encargado de '
        + ' disponibilizar herramientas requeridas para el envío de correos masivos, logrando envíar millones correos '
        + 'diarios.',
  photo: `${process.env.PUBLIC_URL}/photo.jpg`,
  photoAlt: 'Patricio Gonzalez photo',
};

export default data;
