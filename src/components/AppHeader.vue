<script>
export default {
    
}
</script>

<template>
    <nav class="navbar navbar-expand-lg mb-4 sticky-top">
        <div class="container-fluid">
            <a class="navbar-brand me-auto" href="#"><img src="../assets/site_logo.png" alt="" width="80px"></a>
            <div class="d-flex justify-content-center w-100">
                <i class="fa-solid fa-paw fa-2xl"> BoolPetCare</i>
            </div>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link class="nav-link active white-space animation" aria-current="page" :to="{name: 'about-us'}"><h4>Chi siamo</h4></router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
    nav{
        background-color: rgb(13, 202, 240)
    }

    .white-space{
        white-space: nowrap;
    }

    .animation{
        box-shadow: inset 0 0 0 0 #54b3d6;
        color: #54b3d6;
        margin: 0 -.25rem;
        padding: 0 .25rem;
        transition: color .3s ease-in-out, box-shadow .3s ease-in-out; 
    }

    .animation:hover{
        box-shadow: inset 150px 0 0 0 #e2e2e2;
        color: white;
    }
</style>