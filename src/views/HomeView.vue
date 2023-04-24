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

.btnComenzar ,.btnPropiedades {
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


</style>