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
    <div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center">BoolPetCare</h1>
                </div>
            </div>
        </div>
    </div>
 </template>
 
 <style lang="">
    
 </style>