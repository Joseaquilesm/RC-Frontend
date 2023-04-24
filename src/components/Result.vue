<template>
    <div class="cont">
        <div class="column1">
            <div class="texto">
                La renta estimada es de
            </div>
            <div class="texto_renta">
                ~$1,200/mes
            </div>
        </div>
        <div class="column2">
            <div class="texto">
                Tu inmueble
            </div>
            <div class="elements">
                <p>
                    Apartamento&nbsp;
                </p>
                <p>
                    ·&nbsp;
                </p>
                <p>
                    2 Habitaciones&nbsp;
                </p>
                <p>
                    ·&nbsp;
                </p>
                <p>
                    1 baño
                </p>
            </div>
            <div class="textosmall">
                Santiago, Santiago de los Caballeros,<br> República Dominicana
            </div>
        </div>
    </div>
    <div class="cont">
        <div class="column1">
            <div class="texto">
                Alquileres cercanos
            </div>
         

        </div>
    </div>
</template>

<style>
.cont {
    width: 80%;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-content: stretch;

}

.elements {
    display: flex;
    flex-direction: row;
    color: #515151;
    font-family: nunito;
    font-size: 16px;
    font-weight: 700;
}

.cont2 {
    width: 80%;
    margin: 0 auto;
    margin-top: -30px;
    border: 1px solid;
    justify-content: space-between;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.vl {
    border-left: 3px solid rgba(0, 0, 0, 0.404);
    border-radius: 80px;
    height: 100px;

}

.column1 {
    display: flex;
    flex-direction: column;
}

.column2 {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
}

.texto {
    color: black;
    font-family: nunito;
    font-size: 32px;
    font-weight: 700;
}

.textosmall {
    color: black;
    font-family: nunito;
    font-size: 24px;
    font-weight: 700;
}

.texto_renta {
    color: black;
    font-family: nunito;
    font-size: 28px;
    font-weight: 700;
    color: #E63946;
}

.pill {
    max-width: fit-content;
    border-radius: 50px;
    background-color: #E63946;
    color: #ffffff;
    font-family: nunito;
    font-weight: bold;
    font-size: 24px;
    padding: 10px 20px 10px 20px;
    letter-spacing: 2px;
}</style>