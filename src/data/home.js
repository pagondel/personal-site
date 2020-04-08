import React from 'react';

const data = {
  title: (
    <>
      <span>Hola!</span>
      {' '}
      <span>Soy Pato.</span>
    </>
  ),
  text: (
    <>
      <p>
        Desarrollador con
        {' '}
        {new Date().getFullYear() - 2012}
        {' '}
        años de experiencia en multiples lenguajes de programación, durante este tiempo he
        {' '}
        trabajando tanto en grandes empresas como pequeñas startups.
      </p>
      <p>
        Si bien soy un desarrollador full-stack capaz, mi fuerte se encuentra en el desarrollo de
        {' '}
        servicios back-end.
      </p>
      <p>
        Actualmente me desarrollo como software developer engineer en
        {' '}
        <a href="https://www.peixe.cl" target="_blank" rel="noopener noreferrer">Groupon/Peixe</a>
        {' '}
        , miembro del equipo encargado de disponibilizar herramientas requeridas para el envío de
        {' '}
        correos masivos, logrando envíar millones correos diarios.
      </p>
    </>
  ),
  photo: `${process.env.PUBLIC_URL}/photo.jpg`,
  photoAlt: 'Patricio Gonzalez photo',
};

export default data;
