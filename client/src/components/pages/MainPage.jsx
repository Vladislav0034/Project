import React from 'react';
import Button from 'react-bootstrap/Button';



export default function MainPage() {

  const links = [
    {id: 1, name: 'История', href: '/game/1' },
    {id: 2, name: 'литература', href: '/game/2' },
    {id: 3, name: 'наука', href: '/game/3' }];

  return (
    <>
      <div>
        <h1>Выберите тему:</h1>
        {links.map((el) => (<Button style={{ marginRight: '10px' }} key={el.id} href={el.href} color="inherit">{el.name}</Button>))}
      </div>
    </>
  );
}
