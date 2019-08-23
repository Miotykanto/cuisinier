
import React, { Component } from 'react';
import axios from 'axios';
//import ReactImageMagnify from 'react-image-magnify';

import {Link } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { profil: [] };

    }
    componentDidMount() {
        axios.get('http://localhost:8080/affichertous')
            .then(response => {
                console.log(response.data);
                this.setState({ profil: response.data });
                localStorage.setItem('atelier',response.data._id)
            })
            .catch(function (error) {
                console.log(error);
            })

        

    }

    liste() {
        return <div>
            <div class="row">
                
                        {
                            (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
                                return (
<div class="col-md-4 carde">
<div class="card">




<div class="card-body">

  
  <h4 class="card-title" id="titrebe"><center>{obj.titre}</center> </h4>
  <div className="container"><img width="90%" height="300px" src={'http://localhost:8080/user/'+obj.image} alt="pdp" /></div>
  <p class="card-text">Description: {obj.description}</p>
  <p class="card-text">Date:{obj.date}</p>
  <p class="card-text">Horaire de debut:{obj.debut}</p>
  <p class="card-text">Durée: {obj.dure}</p>
  <p class="card-text">Nombre de place disponible:{obj.place_dispo}</p>
  <p class="card-text">Nombre de place reserve: {obj.place_reserve}</p>
  <p class="card-text">Prix: {obj.prix}</p>
  <Link className="btn btn-primary" to={"/particulier/"+obj._id} onClick={()=>{
      console.log(obj.id2);
      localStorage.setItem('ti',obj._id)
      
  }}>  S'inscrire </Link>

</div>
</div>
</div>)



                            })) : ('')
                        }
                
        </div>
        </div>
    }
    render() {
        return (
            <div> 
                
            <form id="popup">


                   <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalQuickView">Launch
                             modal</button>
                             
                             <div class="modal fade" id="modalQuickView" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                             aria-hidden="true" >
                             <div class="modal-dialog modal-lg" role="document">
                                 <div class="modal-content">
                                 <div class="modal-body">
                                     <div class="row">
                                     <div class="col-lg-5">
                                        
                                         <div id="carousel-thumb" class="carousel slide carousel-fade carousel-thumbnails"
                                         data-ride="carousel">
                                         
                                         <div class="carousel-inner" role="listbox">
                                             <div class="carousel-item active">
                                             <img class="d-block w-100"
                                                 src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(23).jpg"
                                                 alt="First slide"/>
                                             </div>
                                             <div class="carousel-item">
                                             <img class="d-block w-100"
                                                 src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(24).jpg"
                                                 alt="Second slide"/>
                                             </div>
                                             <div class="carousel-item">
                                             <img class="d-block w-100"
                                                 src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(25).jpg"
                                                 alt="Third slide"/>
                                             </div>
                                         </div>
                                        
                                         <a class="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
                                             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                             <span class="sr-only">Previous</span>
                                         </a>
                                         <a class="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
                                             <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                             <span class="sr-only">Next</span>
                                         </a>
                                       
                                         <ol class="carousel-indicators">
                                             <li data-target="#carousel-thumb" data-slide-to="0" class="active">
                                             <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(23).jpg" width="60"/>
                                             </li>
                                             <li data-target="#carousel-thumb" data-slide-to="1">
                                             <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(24).jpg" width="60"/>
                                             </li>
                                             <li data-target="#carousel-thumb" data-slide-to="2">
                                             <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(25).jpg" width="60"/>
                                             </li>
                                         </ol>
                                         </div>
                                
                                     </div>
                                     <div class="col-lg-7">
                                         <h2 class="h2-responsive product-name">
                                         <strong>Product Name</strong>
                                         </h2>
                                         <h4 class="h4-responsive">
                                         <span class="green-text">
                                             <strong>$49</strong>
                                         </span>
                                         <span class="grey-text">
                                             <small>
                                             <s>$89</s>
                                             </small>
                                         </span>
                                         </h4>

                                         <div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">

                                         <div class="card">

  
                                             <div class="card-header" role="tab" id="headingOne1">
                                             <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                                                 aria-controls="collapseOne1">
                                                 <h5 class="mb-0">
                                                 Collapsible Group Item #1 <i class="fas fa-angle-down rotate-icon"></i>
                                                 </h5>
                                             </a>
                                             </div>

                                             <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1"
                                             data-parent="#accordionEx">
                                             <div class="card-body">
                                                 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                                 squid. 3
                                                 wolf moon officia aute,
                                                 non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                             </div>
                                             </div>

                                         </div>
                               
                                         <div class="card">

                                         
                                             <div class="card-header" role="tab" id="headingTwo2">
                                             <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
                                                 aria-expanded="false" aria-controls="collapseTwo2">
                                                 <h5 class="mb-0">
                                                 Collapsible Group Item #2 <i class="fas fa-angle-down rotate-icon"></i>
                                                 </h5>
                                             </a>
                                             </div>

                                             <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2"
                                             data-parent="#accordionEx">
                                             <div class="card-body">
                                                 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                                 squid. 3
                                                 wolf moon officia aute,
                                                 non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                             </div>
                                             </div>

                                         </div>
                      
                                         <div class="card">

                                             <div class="card-header" role="tab" id="headingThree3">
                                             <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3"
                                                 aria-expanded="false" aria-controls="collapseThree3">
                                                 <h5 class="mb-0">
                                                 Collapsible Group Item #3 <i class="fas fa-angle-down rotate-icon"></i>
                                                 </h5>
                                             </a>
                                             </div>

                                             <div id="collapseThree3" class="collapse" role="tabpanel" aria-labelledby="headingThree3"
                                             data-parent="#accordionEx">
                                             <div class="card-body">
                                                 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
                                                 squid. 3
                                                 wolf moon officia aute,
                                                 non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                                             </div>
                                             </div>

                                         </div>

                                         </div>


                                         <div class="card-body">
                                         <div class="row">
                                             <div class="col-md-6">

                                             <select class="md-form mdb-select colorful-select dropdown-primary">
                                                 <option value="" disabled selected>Choose your option</option>
                                                 <option value="1">White</option>
                                                 <option value="2">Black</option>
                                                 <option value="3">Pink</option>
                                             </select>
                                             <label>Select color</label>

                                             </div>
                                             <div class="col-md-6">

                                             <select class="md-form mdb-select colorful-select dropdown-primary">
                                                 <option value="" disabled selected>Choose your option</option>
                                                 <option value="1">XS</option>
                                                 <option value="2">S</option>
                                                 <option value="3">L</option>
                                             </select>
                                             <label>Select size</label>

                                             </div>
                                         </div>
                                         <div class="text-center">

                                             <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                             <button class="btn btn-primary">Add to cart
                                             <i class="fas fa-cart-plus ml-2" aria-hidden="true"></i>
                                             </button>
                                         </div>
                                         </div>

                                     </div>
                                     </div>
                                 </div>
                                 </div>
                             </div>
                             </div>
            </form>












             {this.liste()}
         </div>
        );
    }
}