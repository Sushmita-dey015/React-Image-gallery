import React,{useState} from 'react';
import './DemoApp.css';
import IMAGES from '../images/index.js';

function DemoApp(){
        const[selectImages, SetselectImages]=useState([]);
        const onselectFile = (event) =>{
        const selectedFiles = event.target.files;
        const selectedFilesarray = Array.from(selectedFiles);
        const imagearray = selectedFilesarray.map((file) => {
            return URL.createObjectURL(file);
        });

        SetselectImages((prevImages) => prevImages.concat(imagearray));
    };        
    return(
  
        <div className='demo-app'>
            <h5> Welcome To Image Gallery Layout!!!!!</h5> 
        <div className='outfit'>
          <p>
            <span> File Selected :</span>
            <span id ='selected'>0</span>
            </p>
           
        </div>

                   {/* Grid Layout design........  */}
        <div className='grap-container'>
          <div className='image1'>
            <img src={IMAGES.imgEleven} alt='' draggable='true'></img>
            <input type='checkbox' value='imgEleven' className='button' id='select-all'></input>
         </div>
          <div>
          <img src={IMAGES.imgOne} alt='' draggable='true'></img>
          <input type='checkbox' value='imgOne' className='button' id='select-all'></input>
          </div>
          <div>
          <img src={IMAGES.imgTwo} alt='' draggable='true'></img>
          <input type='checkbox' value='imgTwo' className='button' id='select-all'></input>
          </div>
          <div>
          <img src={IMAGES.imgThree} alt='' draggable='true'></img>
          <input type='checkbox' value='imgThree' className='button' id='select-all'></input>
          </div>
          <div>
          <img src={IMAGES.imgFour} alt='' draggable='true'></img>
          <input type='checkbox' value='imgFour' className='button' id='select-all'></input>
          </div>
          <div>
           <img src={IMAGES.imgFive} alt='' draggable='true'></img>
           <input type='checkbox' value='imgFive' className='button' id='select-all'></input>
          </div>
          <div>
            <img src={IMAGES.imgSix} alt='' draggable='true'></img>
            <input type='checkbox' value='imgSix' className='button' id='select-all'></input>
          </div>
          <div>
          <img src={IMAGES.imgSeven} alt='' draggable='true'></img>
          <input type='checkbox' value='imgSeven' className='button' id='select-all'></input>
          </div>
          <div>
          <img src={IMAGES.imgEight} alt='' draggable='true'></img>
          <input type='checkbox' value='imgEight' className='button' id='select-all'></input>
          </div>
          <div >
          <img src={IMAGES.imgNine} alt='' draggable='true'></img>
          <input type='checkbox' value='imgNine' className='button' id='select-all'></input>
          </div>
          <div>
          <img src={IMAGES.imgTen} alt='' draggable='true'></img>  
          <input type='checkbox' value='imgTen' className='button' id='select-all'></input>
          </div>

              {/* Preview and Delete Selected Images... */}
          
          <div className='drap-area'>
           <label> Add Images
           <input name='images' type='file' onChange={onselectFile} multiple accept='image/png , image/jpg, image/jpeg , image/webp'></input>
           </label>
           <div className='area'>
            {selectImages &&
              selectImages.map((image) => {
                return(
                    <div key ={image} className='image'>
                    <img src={image} height="250" width="190" alt=''/>
                    <button 
                    onClick={() => 
                      SetselectImages(selectImages.filter((e) => e!== image)
                )}
                >
                  Delete Image
                </button>
                  </div>
                );
              })
            }
           </div>
        </div> 
   

</div>
</div>

          
)}
export default DemoApp;



