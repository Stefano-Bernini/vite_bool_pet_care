<script>

export default {
    name: 'AppJumbotron', 
    data() {
        return {
            //VARIABILE DELLA SLIDE ATTIVA
            activeSlide: 0,
            //VARIABILE AUTOPLAY
            autoplaySlide: null,

            //ARRAY DI OGGETTI CON IMMAGINI TITOLI E TESTI
            slider: [ 
                {
                    image: 'https://www.batupetshop.it/wp-content/uploads/2019/02/slide1-1.jpg',
                    title: 'Cani',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, 
                {
                    image: 'https://www.proecontro.com/wp-content/uploads/2019/12/animali-domestici.jpg',
                    title: 'Gatti',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, 
                {
                    image: 'https://images.hdqwalls.com/download/super-cute-animals-1336x768.jpg',
                    title: 'Uccelli',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, 
                {
                    image: 'https://images5.fanpop.com/image/photos/31400000/Animals-Wallpaper-animals-31476753-1366-768.jpg',
                    title: 'Cavalli',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, 
                {
                    image: 'https://images.hdqwalls.com/download/super-cute-animals-1336x768.jpg',
                    title: "Roditori",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
        }      
    },

    // FUNZIONE CREATED MEDOTO VUE
    created() {
        this.autoplaySlider();
    }, 

    // SEZIONE METHODS PER LE FUNZIONI (PULSANTI NEXT E PREV)   
    methods: {

        // FUNZIONE NEXT SLIDE
        nextSlide(){
            this.activeSlide++;

            if(this.activeSlide > this.slider.length - 1){
                this.activeSlide = 0;
            }
        },

        // FUNZIONE PREV SLIDE
        prevSlide(){
            this.activeSlide--;

            if(this.activeSlide < 0){
                this.activeSlide = this.slider.length - 1;
            }
        },

        // FUNZIONE CLICK SULLA SINGOLA SLIDE
        clickedActiveSlide(index){
            this.activeSlide = index;
        },

        // FUNZIONE AUTOPLAY CON INTERVALLO TEMPORALE A 3 SECONDI
        autoplaySlider(){
            this.autoplaySlide = setInterval(() => {
                this.nextSlide();
            }, 3000);
        }
        
    }
}

</script>

<template lang="">
    <div class="container">
        <h1>Benvenuto nella nostra Clinica Veterinaria</h1>
    </div>
    <div class="container">
        <div class="slider-wrapper" tabindex="0">
            <div class="item">
                <img v-bind:src="slider[activeSlide].image" v-bind:alt="slider[activeSlide].title" />
                <div class="text">
                    <h3 class="text-black">{{ slider[activeSlide].title }}</h3>
                    <p class="text-black">{{ slider[activeSlide].text }}</p>
                </div>
            </div> 
        </div>
        <div class="thumbs">
            <div class="text-center prev" @click="prevSlide"><i class="fa-solid fa-circle-arrow-up fa-xl" style="color: #0dcaf0;"></i></div> 
            <div class="text-center next" @click="nextSlide"><i class="fa-solid fa-circle-arrow-down fa-xl" style="color: #0dcaf0;"></i></div>
            <div class="thumb" v-for="(slide, index) in slider" v-bind:class="activeSlide === index ? 'active' : ''" @click="clickedActiveSlide(index)">
                <img v-bind:src="slide.image" alt="image" />
            </div>
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
 
</style>