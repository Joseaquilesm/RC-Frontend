<script>
import axios from 'axios'




export default {

    
    data() {
        return {
            inmuebles: []
        }
    },
    mounted() {
        fetch('http://127.0.0.1:8000/api/rcAPI/?format=json')
            .then(res => res.json())
            .then(data => this.inmuebles = data)
            .catch(err => console.log(err.message))
        },
    methods: {
        
    }

        
}


</script>
<template>
    <body>
        <div class="banner">
            <div class="glass_box">
                <h1>
                    ¡Descubre lo que
                </h1>
                <h1>
                    vale tu alquiler!
                </h1>
                <div class="container">
                    <RouterLink to="/estimar">
                        <button class="btnComenzar">
                            Valorar
                        </button>
                    </RouterLink>
                    <RouterLink to="/propiedades">
                        <button class="btnPropiedades">
                            Ver Propiedades
                        </button>
                    </RouterLink>
                </div>
            </div>
        </div>
<div class="propiedades">
    <h2>
            Inmuebles
        </h2>
        <div>
            <div class="collection">
                <div v-for="inmueble in inmuebles" :key="inmueble.id" class="inmueble">
                <router-link :to="{ title: 'title', params: { id: inmueble.id } }">
                    <div class="card">
                        <a class="inmueble_foto" href="#">
                            <img v-bind:src="inmueble.image_link">
                            </a>
                     
                            <div class="inmueble_nombre">
                            <div>
                                <div >{{ inmueble.title }}</div>
                            </div>
                        </div>
                        <div class="inmueble_precio">
                            <p>{{ filters.formatCurrency(inmueble.price_DOP) }}</p>
                        </div>
                    </div>

                     
                        
                </router-link>
            </div>
            </div>
            

        </div>

</div>
       
    </body>
</template>

<style>
.banner {

    width: 100%;
    height: 450px;
    background-image: linear-gradient(rgba(26, 26, 26, 0.452), rgba(26, 26, 26, 0.452)), url(src/assets/images/kai-pilger-dpN2jHAEiYY-unsplash.jpg);
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

.glass_box {
    width: 650px;
    height: 325px;
    background: rgba(255, 255, 255, 0.164);
    backdrop-filter: blur(7px);
    padding: 30px;
    border-radius: 30px;
    box-shadow: 0px 10px 16px 0px rgba(0, 0, 0, 0.5);
    padding-bottom: 50px;


}

.glass_box h1 {
    color: white;
    font-family: poppins;
    font-size: 48px;
    font-weight: 550;
    letter-spacing: 0.5px;
    display: flex;
    justify-content: center;
    align-items: center;

}

.btnComenzar,
.btnPropiedades {
    border-radius: 50px;
    border-width: 0;
    color: #ffffff;
    font-family: nunito;
    font-weight: bold;
    font-size: 24px;
    padding: 10px 20px 10px 20px;
    text-decoration: none;
    box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.3);
    letter-spacing: 2px;

}



.btnComenzar:hover {
    cursor: pointer;
    background: #c52e3b;
    text-decoration: none;

}

.container {
    padding: 30px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.btnComenzar {
    background: #E63946;

}

.btnPropiedades {
    background: transparent;
    border-color: #ffffff;
    border-width: 2px;
}

.btnPropiedades:hover {
    cursor: pointer;
    background: #0000007c;
    border-color: #ffffff7c;
    text-decoration: none;

}

.collection{
    display:grid;
    grid-auto-columns: max-content;
    grid-auto-flow: dense;
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 25px;
    grid-template-columns: repeat(4, 1fr);
    margin: 60px auto;
    max-width: 60%;
    
    
}


.inmueble_nombre{
    font-family: nunito;
    font-size: 20px;
  
}
.inmueble_precio{
 
 font-family: nunito;
 font-size: 20px;

}
.collection img{
    background-color: #e5e5e5;
    width: 100%;
    height: calc(100vh / 4);
    border-radius: 5%;
    
}

.propiedades{
    margin-top:3%;
}

</style>