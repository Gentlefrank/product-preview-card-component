import logo from './favicon-32x32.png';


function App() {
  return (
    <div className="container">
      
      <div className='left--side'>

      </div>

      <div className='right--side'>
      <div></div>
      <p>PERFUME</p>
      <h1>Gabrielle Essense Eau De Perfume</h1>
      <p>
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Performer-Creator for the House of CHANEL. 

      </p>
 <h1 className='price__now'> $149.99   <span className='price__before'> <small>$169.99</small></span>  </h1> 
 <a href='#' className='btn'> <span> <img src='./icon-cart.svg'  /> </span> Add to Cart </a>
      </div>

    </div>
  );
}

export default App;
