import logo from './favicon-32x32.png';


function App() {
  return (
    <div className="container">
      
      <div className='left--side'>
      <picture>
      {/* Source for large screens */}
      <source srcSet= {`${process.env.PUBLIC_URL}/images/image-product-desktop.jpg`} media="(min-width: 1024px)" />
      {/* Source for medium screens */}
      <source srcSet= {`${process.env.PUBLIC_URL}/images/image-product-desktop.jpg`} media="(min-width: 768px)" />
      {/* Source for small screens */}
      <source srcSet= {`${process.env.PUBLIC_URL}/images/image-product-mobile.jpg`} media="(max-width: 767px)" />
      {/* Fallback image */}
     
      <img src= {`${process.env.PUBLIC_URL}/images/image-product-desktop.jpg`} alt="parfum" className='banner' />
    </picture>
      </div>

      <div className='right--side'>
 
      <p>PERFUME</p>
      <h1>Gabrielle Essense Eau De Perfume</h1>
      <p>
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Performer-Creator for the House of CHANEL. 

      </p>
 <h1 className='price__now'> $149.99   <span className='price__before'> <small>$169.99</small></span>  </h1> 
 <button className='btn'> <span> <img src={`${process.env.PUBLIC_URL}/images/icon-cart.svg`}  /> </span>  Add to Cart </button>
      </div>

    </div>
  );
}

export default App;
