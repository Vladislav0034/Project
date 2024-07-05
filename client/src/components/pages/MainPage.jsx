import React from 'react'



export default function MainPage() {
  return (
    <>
    <div>
      <h1>Выберите тему:</h1>
      <Button id="literature" style={{ marginRight: '10px' }} variant="success">
        Литература
      </Button>
      <Button id="history" style={{ marginRight: '10px' }} variant="success">
        История
      </Button>
      <Button id="science" variant="success">
        Наука
      </Button>
    </div>
  </>
    
  )
}
