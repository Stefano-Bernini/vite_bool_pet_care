<script>
import axios from 'axios';

export default {
    name: 'AppMain',
    data(){
        return{
            baseUrl: 'http://localhost:8000',
            vaccines: [],
            loading: true
        }
    },
    created(){
        this.getVaccines();
    },
    methods:{
        getVaccines(){
            this.loading = true
            axios.get(`${this.baseUrl}/api/vaccines`).then((response) => {
                console.log(response);
                if(response.data.success){
                    this.vaccines = response.data.results;
                    this.loading = false;
                }
                else{

                }
            })
        }
    }
   
}
</script>
 
 <template lang="">
    <h1 class="my-4">Quali animali trattiamo?</h1>
    <div class="container my-4">
    <div class="row">
        <div class="col-md-4">
            <div class="card mb-4" style="width: 18rem;">
                <img src="../assets/cane.jpg" class="card-img-top" alt="cane">
                <div class="card-body">
                    <h5 class="card-title">Cane</h5>
                    <p class="card-text">Per i cani offriamo:<br>- Visite mediche di routine: Esami, vaccinazioni e prevenzione<br>- Chirurgia e interventi: Sterilizzazione, tumori, fratture<br>- Trattamenti specializzati ed emergenza: Cure avanzate, diagnostica, assistenza urgente</p>
                    <a href="#" class="btn btn-primary">Contattaci</a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card mb-4" style="width: 18rem;">
                <img src="../assets/gatto.jpg" class="card-img-top" alt="gatto">
                <div class="card-body">
                    <h5 class="card-title">Gatto</h5>
                    <p class="card-text">Per i gatti offriamo:<br>- Visite mediche: Esami, vaccinazioni, prevenzione per la salute dei gatti<br>- Chirurgia: Sterilizzazione, rimozione di tumori, interventi vari<br>- Trattamenti specializzati: Cure avanzate, diagnostica, assistenza urgente per gatti malati o feriti</p>
                    <a href="#" class="btn btn-primary">Contattaci</a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card mb-4" style="width: 18rem;">
                <img src="../assets/roditore.jpg" class="card-img-top" alt="roditore">
                <div class="card-body">
                    <h5 class="card-title">Roditore</h5>
                    <p class="card-text">Per i roditori offriamo:<br>- Cure per roditori: Visite sanitarie, esami, prevenzione<br>- Interventi chirurgici: Sterilizzazione, asportazione tumori, procedure specialistiche<br>- Trattamenti avanzati: Cure specializzate, diagnosi, assistenza d'emergenza per roditori malati o feriti</p>
                    <a href="#" class="btn btn-primary">Contattaci</a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card mb-4" style="width: 18rem;">
                <img src="../assets/uccello.jpg" class="card-img-top" alt="volatile">
                <div class="card-body">
                    <h5 class="card-title">Volatile</h5>
                    <p class="card-text">Per i volatili offriamo:<br>- Cura per gli uccelli: Esami veterinari, monitoraggio della salute, profilassi<br>- Procedure chirurgiche aviarie: Sterilizzazione, rimozione di tumori, interventi specifici<br>- Terapie specializzate: Trattamenti avanzati, diagnosi, assistenza d'emergenza per uccelli malati o feriti</p>
                    <a href="#" class="btn btn-primary">Contattaci</a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card mb-4" style="width: 18rem;">
                <img src="../assets/serpente.jpg" class="card-img-top" alt="rettili">
                <div class="card-body">
                    <h5 class="card-title">Rettile</h5>
                    <p class="card-text">Per i rettili offriamo:<br>- Cura per rettili: Consulti veterinari, esami, prevenzione<br>- Chirurgia per rettili: Sterilizzazione, rimozione di masse, procedure specifiche<br>- Terapie specializzate: Trattamenti avanzati, diagnostica, soccorso per rettili in difficoltà</p>
                    <a href="#" class="btn btn-primary">Contattaci</a>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card mb-4" style="width: 18rem;">
                <img src="../assets/cavallo.jpg" class="card-img-top" alt="cavallo">
                <div class="card-body">
                    <h5 class="card-title">Cavallo</h5>
                    <p class="card-text">Per i cavalli offriamo:<br>- Gestione veterinaria per cavalli: Check-up, esami, prevenzione<br>- Procedure chirurgiche equine: Sterilizzazione, rimozione di masse, interventi specifici<br>- Terapie avanzate: Trattamenti specializzati, diagnostica, assistenza urgente per cavalli con problemi di salute o ferite</p>
                    <!-- <a href="aboutus" class="btn btn-primary">Contattaci</a> -->
                    <router-link to="/aboutus" class="btn btn-primary">Contattaci</router-link>
                </div>
            </div>
        </div>
        
    </div>
</div>

 </template>
 
 <style lang="">
    
 </style>