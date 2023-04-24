<template>
    <div>
        <h1>
        Inmueble List
        </h1>
        <div v-for="inmueble in inmuebles" :key="inmueble.id" class="inmueble" >
          <router-link :to="{ title: 'title', params: { id: inmueble.id }}">
            <h4>
                Nombre: {{ inmueble.title }}
                Precio: {{ inmueble.price_DOP }}
            </h4>
        </router-link>
        </div>
        
    </div>
</template>

<script>
   export default{
    data(){
        return{
            inmuebles:[]
        }
    },
    mounted(){
        fetch('http://127.0.0.1:8000/api/rcAPI/?format=json')
        .then( res => res.json() )
        .then(data => this.inmuebles = data)
        .catch(err => console.log(err.message))
    }
   }
</script>