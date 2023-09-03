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
                    title: 'Cani e Gatti',
                    text: 'I cani e i gatti sono animali domestici molto amati. Sono fedeli, affettuosi e divertenti. Ognuno ha il suo carattere unico e speciale. ',
                }, 
                {
                    image: 'https://t1.ea.ltmcdn.com/it/posts/1/5/0/canarino_3051_4_600.jpg',
                    title: 'Uccelli',
                    text: ' Gli uccelli sono creature meravigliose. Sono colorati, eleganti e melodiosi. Ognuno ha il suo canto unico e il suo modo di volare.',
                }, 
                {
                    image: 'https://www.settemuse.it/sfondi_animali/mammiferi/conigli_lepri/foto_conigli_005.jpg',
                    title: 'Roditori',
                    text: " I roditori sono animali piccoli e veloci. Sono intelligenti, curiosi e adorabili. Ognuno ha il suo modo unico di mangiare e di nascondersi.",
                }, 
                {
                    image: 'https://images5.fanpop.com/image/photos/31400000/Animals-Wallpaper-animals-31476753-1366-768.jpg',
                    title: 'Cavalli',
                    text: 'I cavalli sono animali nobili e maestosi. Sono forti, veloci e leali. Ognuno ha il suo modo unico di galoppare e di comunicare.',
                }, 
                {
                    image: 'https://magazine.arcaplanet.it/wp-content/uploads/2023/05/tartarughe-cosa-mangiano.jpg',
                    title: "Rettili",
                    text: 'I rettili sono animali affascinanti. Sono silenziosi, misteriosi e sorprendenti. Ognuno ha il suo modo unico di muoversi e di cacciare',
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
            }, 5000);
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
                    <h3 class="text-black text_shadow">{{ slider[activeSlide].title }}</h3>
                    <p class="text-black text_shadow2">{{ slider[activeSlide].text }}</p>
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