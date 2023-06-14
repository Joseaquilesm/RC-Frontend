<script>
import axios from 'axios'

export default {

  data() {
    return {
      estimado: "",
      hideModal: true,
      rooms: "",
      bathrooms: 1,
      squarefootage: "",
      provincia: 2,
      mediobano: false,
      aguapotable: false,
      ac: false,
      areajuegos: false,
      areaservicio: false,
      ascensor: false,
      balcon: false,
      cisterna: false,
      controlacceso: false,
      cuartoservicio: false,
      estar: false,
      estudio: false,
      familyroom: false,
      gazebo: false,
      gimnasio: false,
      inversor: false,
      jacuzzi: false,
      lobby: false,
      patio: false,
      picuzzi: false,
      piscina: false,
      planta: false,
      pozo: false,
      satelite: false,
      sauna: false,
      seguridad: false,
      shutters: false,
      terraza: false,
      vestidores: false,
      closet: false,
    };
  },


  methods: {
    exitmodal() {
      this.hideModal = true;
    },
    async consultar() {

      let result = await axios.post("http://127.0.0.1:8000/predict/", {
        rooms: this.rooms,
        bathrooms: Number.parseFloat(this.bathrooms),
        squarefootage: this.squarefootage,
        provincia: Number.parseFloat(this.provincia),
        mediobano: this.mediobano,
        aguapotable: this.aguapotable,
        ac: this.ac,
        areajuegos: this.areajuegos,
        areaservicio: this.areaservicio,
        ascensor: this.ascensor,
        balcon: this.balcon,
        cisterna: this.cisterna,
        controlacceso: this.controlacceso,
        cuartoservicio: this.cuartoservicio,
        estar: this.estar,
        estudio: this.estudio,
        familyroom: this.familyroom,
        gazebo: this.gazebo,
        gimnasio: this.gimnasio,
        inversor: this.inversor,
        jacuzzi: this.jacuzzi,
        lobby: this.lobby,
        patio: this.patio,
        picuzzi: this.picuzzi,
        piscina: this.piscina,
        planta: this.planta,
        pozo: this.pozo,
        satelite: this.satelite,
        sauna: this.sauna,
        seguridad: this.seguridad,
        shutters: this.shutters,
        terraza: this.terraza,
        vestidores: this.vestidores,
      });
      console.log(result.data);
      this.estimado = Intl.NumberFormat('en-US').format(Math.floor(result.data));
      this.hideModal = false;
    },
  },
};

</script>


<template>
  <div class="flex-container">
    <form>
      <h2>Ingresa la información de tu inmueble</h2>
      <div class="form-item">
        <label for="provincias">Provincia</label>
        <select name="provincias" id="provincias" size="1" v-model="provincia">
          <option value="1">Azua</option>
          <option value="1">Bahoruco</option>
          <option value="1">Barahona</option>
          <option value="1">Dajabon</option>
          <option value="1">Distrito Nacional</option>
          <option value="1">Duarte</option>
          <option value="1">El Seybo</option>
          <option value="1">Elias Piña</option>
          <option value="1">Espaillat</option>
          <option value="1">Hato Mayor</option>
          <option value="1">Hermanas Mirabal</option>
          <option value="1">Independencia</option>
          <option value="1">La Altagracia</option>
          <option value="1">La Romana</option>
          <option value="1">La Vega</option>
          <option value="1">Maria Trinidad Sánchez </option>
          <option value="1">Monseñor Nouel</option>
          <option value="1">Monte Plata</option>
          <option value="1">Montecristi</option>
          <option value="1">Pedernales</option>
          <option value="1">Peravia</option>
          <option value="1">Puerto Plata</option>
          <option value="1">Samaná</option>
          <option value="1">San Cristobal</option>
          <option value="1">San José de Ocoa</option>
          <option value="1">San Juan</option>
          <option value="1">San Pedro de Macorís</option>
          <option value="1">Sánchez Ramírez</option>
          <option value="1">Santiago</option>
          <option value="1">Santiago Rodríguez</option>
          <option value="1">Santo Domingo </option>
          <option value="1">Valverde</option>
        </select>
      </div>

      <div class="form-item">
        <label for="tamaño">Tamaño</label>
        <input type="number" name="square_footage" min="1" step="1" placeholder="0 m²" v-model="squarefootage">
      </div>

      <div class="form-item">
        <label for="habitaciones">Habitaciones</label>
        <input type="number" name="rooms" min="1" max="25" step="1" placeholder="1" v-model="rooms">
      </div>

      <div class="form-item">
        <label for="baños">Baños</label>
        <select name="baños" id="baños" v-model="bathrooms">
          <option value=1>1</option>
          <option value=1.5>1.5</option>
          <option value=2>2</option>
          <option value=2.5>2.5</option>
          <option value=3>3</option>
          <option value=3.5>3.5</option>
          <option value=4>4</option>
          <option value=4.5>4.5</option>
          <option value=5>5</option>
          <option value=5.5>5.5</option>
          <option value=6>6+</option>
        </select>
      </div>

      <div class="form=item" :class="{ 'slide-out-top': hideComodidades }">
        <label class="comodidades">Comodidades</label>
        <div>
          <ul class="list">

 
            <label class="toggle">
              <input class="toggle-checkbox" type="checkbox" name="aguapotable" value="Item 1" v-model="aguapotable">
              <div class="toggle-switch"></div>
              <span class="toggle-label">Agua Potable</span>
            </label>

            
            <label class="toggle">
              <input class="toggle-checkbox" type="checkbox" name="ac" value="Item 1" v-model="ac">
              <div class="toggle-switch"></div>
              <span class="toggle-label">Aire Acondicionado</span>
            </label>

            
            <label class="toggle">
              <input class="toggle-checkbox" type="checkbox" name="areajuegos" value="Item 1" v-model="areajuegos">
              <div class="toggle-switch"></div>
              <span class="toggle-label">Area de Juegos Infantiles</span>
            </label>
          
           
            <label class="toggle">
              <input class="toggle-checkbox" type="checkbox" name="areaservicio" value="Item 1" v-model="areaservicio">
              <div class="toggle-switch"></div>
              <span class="toggle-label">Area Servicio</span>
            </label>
         
            <label class="toggle">
              <input class="toggle-checkbox" type="checkbox" name="ascensor" value="Item 1" v-model="ascensor">
              <div class="toggle-switch"></div>
              <span class="toggle-label">Ascensor</span>
            </label>
          
            <label class="toggle">
              <input class="toggle-checkbox" type="checkbox" name="balcón" value="Item 1" v-model="balcon">
              <div class="toggle-switch"></div>
              <span class="toggle-label">Balcón</span>
            </label>

            <label class="toggle">
              <input class="toggle-checkbox" type="checkbox" name="cisterna" value="Item 1" v-model="cisterna">
              <div class="toggle-switch"></div>
              <span class="toggle-label">Cisterna</span>
            </label>

        
            <label class="toggle">
              <input class="toggle-checkbox" type="checkbox" name="controlacceso" value="Item 1" v-model="controlacceso">
              <div class="toggle-switch"></div>
              <span class="toggle-label">Control de Acceso</span>
            </label>

            <label class="toggle">
              <input class="toggle-checkbox" type="checkbox" name="cuartoservicio" value="Item 1" v-model="cuartoservicio">
              <div class="toggle-switch"></div>
              <span class="toggle-label">Cuarto de Servicio</span>
            </label>
            
            <label class="toggle">
              <input class="toggle-checkbox" type="checkbox" name="estar" value="Item 1" v-model="estar">
              <div class="toggle-switch"></div>
              <span class="toggle-label">Estar Familiar</span>
            </label>

            <label class="toggle">
              <input class="toggle-checkbox" type="checkbox" name="estudio" value="Item 1" v-model="estudio">
              <div class="toggle-switch"></div>
              <span class="toggle-label">Estudio</span>
            </label>
        

            <label class="toggle">
              <input class="toggle-checkbox" type="checkbox" name="familyroom" value="Item 1" v-model="familyroom">
              <div class="toggle-switch"></div>
              <span class="toggle-label">Family Room</span>
            </label>

            
            <label class="toggle">
              <input class="toggle-checkbox" type="checkbox" name="gazebo" value="Item 1" v-model="gazebo">
              <div class="toggle-switch"></div>
              <span class="toggle-label">Gazebo</span>
            </label>

          
            
            <label class="toggle">
              <input class="toggle-checkbox" type="checkbox" name="gimnasio" value="Item 1" v-model="gimnasio">
              <div class="toggle-switch"></div>
              <span class="toggle-label">Gimnasio</span>
            </label>

        
            
            <label class="toggle">
              <input class="toggle-checkbox" type="checkbox" name="inversor" value="Item 1" v-model="inversor">
              <div class="toggle-switch"></div>
              <span class="toggle-label">Inversor</span>
            </label>

         
            
            <label class="toggle">
              <input class="toggle-checkbox" type="checkbox" name="jacuzzi" value="Item 1" v-model="jacuzzi">
              <div class="toggle-switch"></div>
              <span class="toggle-label">Jacuzzi</span>
            </label>

         
            
            <label class="toggle">
              <input class="toggle-checkbox" type="checkbox" name="lobby" value="Item 1" v-model="lobby">
              <div class="toggle-switch"></div>
              <span class="toggle-label">Lobby</span>
            </label>

        
            
            <label class="toggle">
              <input class="toggle-checkbox" type="checkbox" name="patio" value="Item 1" v-model="patio">
              <div class="toggle-switch"></div>
              <span class="toggle-label">Patio</span>
            </label>

         
            
            <label class="toggle">
              <input class="toggle-checkbox" type="checkbox" name="picuzzi" value="Item 1" v-model="picuzzi">
              <div class="toggle-switch"></div>
              <span class="toggle-label">Picuzzi</span>
            </label>

            
            <label class="toggle">
              <input class="toggle-checkbox" type="checkbox" name="piscina" value="Item 1" v-model="piscina">
              <div class="toggle-switch"></div>
              <span class="toggle-label">Piscina</span>
            </label>

            
            <label class="toggle">
              <input class="toggle-checkbox" type="checkbox" name="planta" value="Item 1" v-model="planta">
              <div class="toggle-switch"></div>
              <span class="toggle-label">Planta Eléctrica</span>
            </label>

          
            
            <label class="toggle">
              <input class="toggle-checkbox" type="checkbox" name="pozo" value="Item 1" v-model="pozo">
              <div class="toggle-switch"></div>
              <span class="toggle-label">Pozo</span>
            </label>

            
            
            <label class="toggle">
              <input class="toggle-checkbox" type="checkbox" name="satelite" value="Item 1" v-model="satelite">
              <div class="toggle-switch"></div>
              <span class="toggle-label">Satélite</span>
            </label>

            
            <label class="toggle">
              <input class="toggle-checkbox" type="checkbox" name="sauna" value="Item 1" v-model="sauna">
              <div class="toggle-switch"></div>
              <span class="toggle-label">Sauna</span>
            </label>

        
            
            <label class="toggle">
              <input class="toggle-checkbox" type="checkbox" name="seguridad" value="Item 1" v-model="seguridad">
              <div class="toggle-switch"></div>
              <span class="toggle-label">Seguridad 24 Horas</span>
            </label>

            
            <label class="toggle">
              <input class="toggle-checkbox" type="checkbox" name="shutters" value="Item 1" v-model="shutters">
              <div class="toggle-switch"></div>
              <span class="toggle-label">Shutters</span>
            </label>

         
            
            <label class="toggle">
              <input class="toggle-checkbox" type="checkbox" name="terraza" value="Item 1" v-model="terraza">
              <div class="toggle-switch"></div>
              <span class="toggle-label">Terraza</span>
            </label>

            
            
            <label class="toggle">
              <input class="toggle-checkbox" type="checkbox" name="vestidores" value="Item 1" v-model="vestidores">
              <div class="toggle-switch"></div>
              <span class="toggle-label">Vestidores</span>
            </label>

        
            
            <label class="toggle">
              <input class="toggle-checkbox" type="checkbox" name="closet" value="Item 1" v-model="closet">
              <div class="toggle-switch"></div>
              <span class="toggle-label">Walk In Closet</span>
            </label>

     


          </ul>

        </div>


      </div>



    </form>
  </div>
  <div class="button">
    <button v-on:click="consultar()" type="submit">Estimar</button>
  </div>


  <div class="modal" :class="{ hide: hideModal }">
    <div class="modal-title">
      Resultado
    </div>
    <div class="modalparent">

      <div class="modal-body">
        RD$ {{ estimado }} /mes
      </div>
      <div class="modal-details">
        Habitaciones: {{ rooms }}
        <br>
        Baños: {{ bathrooms }}
        <br>
        Tamaño: {{ squarefootage }} m²

      </div>
    </div>

  </div>

  <div class="modal-background" :class="{ hide: hideModal }" v-on:click="exitmodal()">

  </div>
</template>

<style>
.list {
  list-style: none;
  max-width: 700px;
  height: 350px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 30px;


}

h3 {
  font-family: Nunito;
  font-weight: 400;
  font-size: 15px;

}

input[type="checkbox"] {
  margin-right: 5px;
  margin-left: 20px;

}

.flex-container {
  margin: 0 auto;
  margin-top: 5px;
  border-radius: 10px;
  max-width: 800px;
  

}

.comodidades {
  text-align: left;
  width: auto;
  margin-left: 20px;


}

.form-item {
  margin: 0 auto;
  text-align: start;
  width: auto;


}

.button {
  margin-top: 30px;
  text-align: center;
  width: auto;

}

form {
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;


}

h2 {
  font-size: 30px;
  font-family: Nunito;
  font-weight: 700;
  margin: 0 auto;
  text-align: center;

}


label {
  display: block;
  font-family: Nunito;
  font-weight: 600;
  margin-bottom: 5px;
  font-size: 16px;

}

input[type="number"],
input[type="email"],
input[type="password"],
select {
  width: 80%;
  padding: 10px;
  margin-bottom: 15%;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  
}

button[type="submit"] {
  margin: 2%;
  background-color: #E63946;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-family: nunito;
  font-weight: bold;
  cursor: pointer;
  font-size: 18px;
  border-radius: 50px;
  transition: background-color 0.3s ease-in-out;
  margin: 0 auto;
  text-align: center;
}

button[type="submit"]:hover {
  background-color: #b3313b;
}

.modal {
  background: #ffffff;
  position: absolute;
  max-width: 50%;
  min-width: 40%;
  height: 250px;
  left: 50%;
  top: 50%;
  padding: 12px 25px;
  transform: translate(-50%, -50%);
  z-index: 1;
  border-radius: 10px;
  box-shadow: 0px 9px 6px 0px rgba(0, 0, 0, 0.11);
  

}

.modal-background {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background: #00000073
}

.modal-title {
  font-size: 30px;
  font-family: Nunito;
  font-weight: 700;
  margin: 0 auto;

}

.modalparent {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.modal-body {
  font-size: 20px;
  font-family: Nunito;

}

.hide {
  display: none;
}









.toggle {
  cursor: pointer;
  display: inline-block;
}

.toggle-switch {
  display: inline-block;
  background: #ccc;
  border-radius: 16px;
  width: 54px;
  height: 28px;
  position: relative;
  vertical-align: middle;
  transition: background 0.25s;
}

.toggle-switch:before,
.toggle-switch:after {
  content: "";
}

.toggle-switch:before {
  display: block;
  background: linear-gradient(to bottom, #fff 0%, #eee 100%);
  border-radius: 50%;

  width: 20px;
  height: 20px;
  position: absolute;
  top: 4px;
  left: 4px;
  transition: left 0.25s;
}

.toggle-checkbox:checked+.toggle-switch {
  background: #E63946;
  
}

.toggle-checkbox:checked+.toggle-switch:before {
  left: 30px;
}

.toggle-checkbox {
  position: absolute;

}

.toggle-label {
  margin-left: 5px;
  position: relative;
  top: 2px;
}</style>