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
        Actualmente me desarrollo como software engineer en
        {' '}
        <a href="https://www.boosmap.com" target="_blank" rel="noopener noreferrer">Boosmap</a>
        {' '}
        , desarrollando las herramientas que permiten la logística de última milla permitiendo
        {' '}
        coordinar miles de envíos diarios.
      </p>
    </>
  ),
  photo: `${process.env.PUBLIC_URL}/photo.jpg`,
  photoAlt: 'Patricio Gonzalez photo',
};

export default data;
