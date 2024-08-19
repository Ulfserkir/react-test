import Footer from './component/Footer';
import Header from './component/Header';
import City from './component/City'
import { Fragment } from 'react';

function App(){
  return (
  <>
    <Header />
    <City 
    nombre="Lima"
    descripcion="La capital del Perú"
    imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWtvF1qhmrNPU6oFO7_CowidpLZSrJV7iQJK-tIZUUhUk8DYp0SYozxl1VxR47vhIE0_Y&usqp=CAU"/>
    <Footer />
  </>
  ); 
}

export default App;