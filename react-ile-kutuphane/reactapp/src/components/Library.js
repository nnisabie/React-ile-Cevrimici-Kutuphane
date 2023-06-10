import React from 'react';
import Book from './Book';

const Library = () => {
  return (
    <div>
      <h1 style={{color:"maroon", fontFamily:"sans-serif", alignContent:"center"}}>React ile Çevrimiçi Hasan Ali Yücel Kütüphanesi</h1>
      <ul>
    <table border={3} cellPadding={10}>
         <tr> <td><Book title="Gurur ve Önyargı" author="Jane Austen" /> 
          <img src="img/gururveonyargi.jpeg" alt="" className='resim'></img></td>
    
         <td><Book title="Geceye Övgüler" author="Novalis" /> 
        <img src="img/geceyeovguler.jpeg" alt="" className='resim'></img></td>
   
           <td><Book title="Yürek Burgusu" author="Henry James" /> 
        <img src="img/gururveonyargi.jpeg" alt="" className='resim'></img></td>
     
         <td> <Book title="Kamelyalı Kadın " author="Alexandre Dumas Fils" />
        <img src="img/kamelyalikadin.jpeg" alt="" className='resim'></img> </td>
  
         <td>  <Book title="Oblomov " author="İvan Gonçarov" />
        <img src="img/oblomovv.jpeg" alt="" className='resim'></img></td></tr>
   
         <tr><td> <Book title="Madame Bovary" author="Gustave Flaubert" /> 
        <img src="img/madomebovary.jpeg" alt="" className='resim'></img> </td>

         <td> <Book title="Babalar ve Oğullar " author="İvan Sergenyeviç Turgenyev" />
        <img src="img/babalarveogullar.jpeg" alt="" className='resim'></img></td>
   
         <td><Book title="Suç ve Ceza" author="Fyodor Mihayloviç Dostoyevski" />
        <img src="img/sucveceza.jpeg" alt="" className='resim'></img></td>

         <td> <Book title="Karamazov Kardeşler" author="Fyodor Dostoyevski" />
       <img src="img/karamazovkardesler.jpeg" alt="" className='resim'></img></td>
    
         <td> <Book title="Ölü Canlar " author="Nikolay Vasilyeviç Gogol" />
       <img src="img/olucanlar.jpeg" alt="" className='resim'></img></td></tr> </table> 
      
      </ul>
    </div>
  );
}

export default Library;
