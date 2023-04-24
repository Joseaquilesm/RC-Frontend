<script setup>
    import { RouterLink } from 'vue-router';
</script>


<template>
        <header>
            <RouterLink active-class="active" to="/" class="logo"> 
                <img  src="src\assets\images\rentalcrawler_logo.svg"  />
            </RouterLink>
            <nav>
                <ul class="nav_links">
                    <li>
                        <RouterLink to="/estimar">
                            <a>
                            Estimar
                            </a>
                        </RouterLink>

                    </li>
                    <li>
                        <a href="/propiedades">
                            Propiedades
                        </a>
                    </li>
                    <li>
                        <RouterLink to="/about">
                            <a>
                            Sobre Nosotros
                            </a>
                        </RouterLink>
                    </li>
                </ul>
            </nav>
        </header>
</template>


<style>



header .logo{
    cursor: pointer;
    display:flex;
    margin-right:auto;
   
  
  }

header{
    display:flex;
    flex-direction:row;
    align-items: center;
    padding:15px 10%;
    align-self: center;
    position:sticky;
    background-color: white;
}

li, a {
    font-family:Nunito;
    font-weight: 700;
    font-size:20px;
    color: #E63946;
    text-decoration: none;
}

.nav_links{
    list-style: none;
}

.nav_links li {
    display: inline-block;
    padding: 0px 20px;
}

.nav_links li a{
    transition: all 0.3s ease 0s;

}
.nav_links li a:hover {
    color: #9E1B35;
    
}

</style>