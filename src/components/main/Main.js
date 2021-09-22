import './Main.css';
import React from 'react';
import item1 from '../../assets/item1.jpg';
import item2 from '../../assets/item2.jpg';
import item3 from '../../assets/item3.jpg';
import item4 from '../../assets/item4.jpg';

const Main = () => {
    return (
        <main>
            <div className="main__container">
                <div className="main__title">
                    <div className="main__greeting">
                        <p id="card-actions">Card Actions</p>

                        <i className="fa fa-home" id="homeIcon"></i>
                        <i className="fa fa-angle-double-right" id="double-right"></i>

                        <p className="page">eCommerce</p>
                        <i className="fa fa-angle-double-right" id="double-right"></i>

                        <p className="page">Eletronics</p>
                    </div>

                    <div className="main__right">
                        <a href="#">
                            <i className="fa fa-cog" id="configIcon"></i>
                        </a>
                    </div>
                </div>

                <div className="main__info">

                    <p>Filters</p>
                    <p>7,618 results found in 5ms</p>
                    <a href="#">Default</a>
                    <i className="fa fa-th-large"></i>
                    <i className="fa fa-bars"></i>
                </div>

                <div className="main__primary">
                    <div className="main__primary__left">
                        <div className="main__primary__left__title">
                            
                            <div id="categoryFilters">
                            
                                <a>Multi Range</a>
                                <label className="radio"><input type="radio"/>&nbsp;&nbsp;$10</label>
                                <label className="radio"><input type="radio"/>&nbsp;&nbsp;$10-$100</label>
                                <label className="radio"><input type="radio"/>&nbsp;&nbsp;$100-$500</label>
                                <label className="radio"><input type="radio"/>&nbsp;&nbsp;$500</label>
                                <label className="radio"><input type="radio"/>&nbsp;&nbsp;All</label>

                                <div className="separator"></div>
                                
                                <a>Slider⠀⠀⠀⠀⠀⠀⠀⠀⠀1.99 - 4098</a>
                                <input type="range" id="a" name="a" value="80" />

                                <div className="separator"></div>

                                <a>Category</a>
                                <div className="check"><Checkbox /><p>Cell Phones</p><p className="qnt">1920</p></div>
                                <div className="check"><Checkbox /><p>Computers &amp; Tablets</p><p className="qnt">1820</p></div>  
                                <div className="check"><Checkbox /><p>Cell Phone Accessories</p><p className="qnt">462</p></div>  
                                <div className="check"><Checkbox /><p>Appliances</p><p className="qnt">6556</p></div>  
                                <div className="check"><Checkbox /><p>Audio</p><p className="qnt">120</p></div>  
                                <div className="check"><Checkbox /><p>iPhone Accessories</p><p className="qnt">353</p></div>  
                                <div className="check"><Checkbox /><p>Cameras &amp; Camcorders</p><p className="qnt">45</p></div>  
                                <div className="check"><Checkbox /><p>iPhone Cases &amp; Clips</p><p className="qnt">456</p></div>  
                                <div className="check"><Checkbox /><p>TV &amp; Home Theater</p><p className="qnt">56</p></div>  
                                <div className="check"><Checkbox /><p>Small Kitchen Appliances</p><p className="qnt">10</p></div>  

                                <div className="separator"></div>

                                <a>Brand</a>
                                <div className="check"><Checkbox /><p>Insigni</p><p className="qnt">220</p></div>
                                <div className="check"><Checkbox /><p>Samsung</p><p className="qnt">120</p></div>  
                                <div className="check"><Checkbox /><p>Apple</p><p className="qnt">320</p></div>  
                                <div className="check"><Checkbox /><p>HP</p><p className="qnt">32</p></div>  
                                <div className="check"><Checkbox /><p>Sony</p><p className="qnt">520</p></div>  
                                <div className="check"><Checkbox /><p>Metra</p><p className="qnt">55</p></div>  
                                <div className="check"><Checkbox /><p>Dyne</p><p className="qnt">120</p></div>  
                                <div className="check"><Checkbox /><p>LG</p><p className="qnt">98</p></div>  
                                <div className="check"><Checkbox /><p>Canon</p><p className="qnt">99</p></div>  
                                <div className="check"><Checkbox /><p>Speck</p><p className="qnt">575</p></div>

                                <div className="separator"></div>

                                <a>Rating</a>
                                <div className="stars">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <p>&nbsp; &amp; Up⠀⠀⠀⠀⠀⠀⠀⠀⠀8500</p>
                                </div>

                                <div className="stars">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-o"></i>
                                    <p>&nbsp; &amp; Up⠀⠀⠀⠀⠀⠀⠀⠀⠀3250</p>
                                </div>

                                <div className="stars">
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                    <p>&nbsp; &amp; Up⠀⠀⠀⠀⠀⠀⠀⠀⠀1120</p>
                                </div>
                                 



                            </div>                      
                                                        
                            
                    </div>
                </div>

                <div className="main__primary__right">
                    <div className="main__primary__right__title">
                        <div className="searchHear">
                            <input type="text" id="inputText" placeholder="Search hear"/>
                            <a href="#"><i className="fa fa-search"></i></a>
                            
                        </div>
                        
                    </div>

                    <div className="main__primary__right__cards">
                        <div className="card1">
                            <img width="100" src={item1} alt="apple-watch" />
                            <div className="infoCard">
                                <p>Apple Watch Series 4 GPS</p>
                                <p>By Apple</p>
                                <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type 
                                    specimen book.</p>
                            </div>
                            <div className="infoCard2">
                                <a href="#" className="starNote">
                                    3.4&nbsp;
                                    <i className="fa fa-star-o"></i>
                                </a>
                                <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                <p align="center">$399</p>
                                <div className="shopCart">
                                    <i className="fa fa-shopping-cart" ></i><p>Free Shipping</p>
                                </div>
                                <p>&nbsp;</p>
                                <a href="#" className="bottonItem">
                                    <i className="fa fa-heart-o" id="heart"></i>
                                    &nbsp; WISHLIST &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                                </a>
                                <a href="#" className="bottonItem2">
                                    <i className="fa fa-shopping-basket" id="heart"></i>
                                    &nbsp; ADD TO CART
                                </a>
                                
                            </div>
                            
                        </div>

                        <div className="card2">
                            <img width="100" src={item2} alt="jbl-speaker" />
                            <div className="infoCard">
                                <p>JBL Speaker</p>
                                <p>By JBL</p>
                                <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type 
                                    specimen book.</p>
                            </div>
                            <div className="infoCard2">
                                <a href="#" className="starNote">
                                    3.4&nbsp;
                                    <i className="fa fa-star-o"></i>
                                </a>
                                <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                <p align="center">$199</p>
                                <div className="shopCart">
                                    <i className="fa fa-shopping-cart" ></i><p>Free Shipping</p>
                                </div>
                                <p>&nbsp;</p>
                                <a href="#" className="bottonItem">
                                    <i className="fa fa-heart-o" id="heart"></i>
                                    &nbsp; WISHLIST &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                                </a>
                                <a href="#" className="bottonItem2">
                                    <i className="fa fa-shopping-basket" id="heart"></i>
                                    &nbsp; ADD TO CART
                                </a>
                                
                            </div>
                        </div>

                        <div className="card3">
                            <img width="100" src={item3} alt="iphone-X" />
                            <div className="infoCard">
                                <p>Apple iPhone X 128Gb</p>
                                <p>By Apple</p>
                                <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type 
                                    specimen book.</p>
                            </div>
                            <div className="infoCard2">
                                <a href="#" className="starNote">
                                    3.4&nbsp;
                                    <i className="fa fa-star-o"></i>
                                </a>
                                <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                <p align="center">$899</p>
                                <div className="shopCart">
                                    <i className="fa fa-shopping-cart" ></i><p>Free Shipping</p>
                                </div>
                                <p>&nbsp;</p>
                                <a href="#" className="bottonItem">
                                    <i className="fa fa-heart-o" id="heart"></i>
                                    &nbsp; WISHLIST &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                                </a>
                                <a href="#" className="bottonItem2">
                                    <i className="fa fa-shopping-basket" id="heart"></i>
                                    &nbsp; ADD TO CART
                                </a>
                                
                            </div>
                        </div>

                        <div className="card4">
                            <img width="100" src={item4} alt="apple-watch" />
                            <div className="infoCard">
                                <p>Apple Watch Series 4 GPS</p>
                                <p>By Apple</p>
                                <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                <p className="description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type 
                                    specimen book.</p>
                            </div>
                            <div className="infoCard2">
                                <a href="#" className="starNote">
                                    3.4&nbsp;
                                    <i className="fa fa-star-o"></i>
                                </a>
                                <p>⠀⠀⠀⠀⠀⠀⠀⠀⠀</p>
                                <p align="center">$2499</p>
                                <div className="shopCart">
                                    <i className="fa fa-shopping-cart" ></i><p>Free Shipping</p>
                                </div>
                                <p>&nbsp;</p>
                                <a href="#" className="bottonItem">
                                    <i className="fa fa-heart-o" id="heart"></i>
                                    &nbsp; WISHLIST &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                                </a>
                                <a href="#" className="bottonItem2">
                                    <i className="fa fa-shopping-basket" id="heart"></i>
                                    &nbsp; ADD TO CART
                                </a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            </div>
        </main >
    );
};

export default Main;

function Checkbox() {
    const [checked, setChecked] = React.useState(true);
  
    return (
      <label><input type="checkbox" checked={undefined} onChange={() => setChecked(!checked)}/></label>
    );
  }
  
 
  
  
 
  
