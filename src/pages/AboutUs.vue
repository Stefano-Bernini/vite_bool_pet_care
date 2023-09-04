<script>
export default {
    name: "AboutUs"
    
}
</script>

<template>
    <section>
        <div class="container py-5">
            <div class="row align-items-center">
                <div class="col-6 text-end">
                    <img src="../assets/veterinari.jpg" alt="veterinari" width="400px">
                </div>
                <div class="col-6 text-center">
                    <h3>Chi Siamo</h3>
                    <p>Benvenuti a BoolPetCare, una clinica veterinaria dedicata alla salute e al benessere di sei diverse categorie di animali: cani, gatti, roditori, volatili, rettili e cavalli. Con oltre 20 anni di esperienza nel settore, siamo una squadra di esperti appassionati degli amici a quattro zampe e non solo.</p>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container py-5">
            <div class="row align-items-center">
                <div class="col-6 text-center">
                    <h3>La Nostra Struttura</h3>
                    <p>Presso BoolPetCare, offriamo un ambiente moderno e ben attrezzato, con reparti specifici per ogni specie. Ogni area è progettata per garantire il massimo comfort e sicurezza per i nostri pazienti. Utilizziamo le tecnologie mediche più avanzate per diagnosi precise e trattamenti efficaci, sempre tenendo conto delle esigenze uniche di ciascuna specie.</p>
                </div>
                <div class="col-6 text-start">
                    <img src="../assets/struttura.jpg" alt="veterinari" width="500px">
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container py-5">
            <div class="row align-items-center">
                <div class="col-6 text-center">
                    <img src="../assets/servizi.jpg" alt="veterinari" width="450px">
                </div>
                <div class="col-6 text-start">
                    <h3>I Nostri Servizi e Missione</h3>
                    <p>La nostra missione è assicurare che i vostri animali vivano una vita sana e felice. Siamo anche qui per supportarvi come proprietari, rispondendo alle vostre domande e fornendo preziosi consigli sulla cura e l'alimentazione. Grazie per aver scelto BoolPetCare come vostro partner nella cura dei vostri amati animali. Siamo ansiosi di conoscerli e di lavorare insieme per garantire loro una vita lunga e prospera.</p>
                </div>
            </div>
        </div>
    </section>
    <hr>
    <h1>Contattaci</h1>
    <p class="text-center w-responsive mx-auto mb-5">Se hai qualsiasi domanda non esitare a contattarci!</p>
    <section class="mb-4 ps pe">
        <div class="row">
            <div class="col-md-9 mb-md-0 mb-5">
                <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <label class="mt-3" for="name">Nome</label>
                                <input type="text" id="name" name="name" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <label class="mt-3" for="email">Email</label>
                                <input type="text" id="email" name="email" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="md-form mb-0">
                                <label class="mt-3" for="subject">Oggetto</label>
                                <input type="text" id="subject" name="subject" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="md-form">
                                <label class="mt-3" for="message">Il tuo messaggio</label>
                                <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            </div>
                        </div>
                    </div>
                </form>
                <div class="text-center text-md-left mt-3">
                    <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Invia</a>
                </div>
                <div class="status"></div>
            </div>
            <div class="col-md-3 text-center">
                <ul class="list-unstyled mb-0">
                    <li><i class="fas fa-map-marker-alt fa-2x"></i>
                        <p>Roma, CA 00100, Italia</p>
                    </li>

                    <li><i class="fas fa-phone mt-4 fa-2x"></i>
                        <p>+ 06 00000000</p>
                    </li>

                    <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                        <p>ambulatoriogatto@gmail.com</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    .ps{
        padding-left: 400px;
    }

    .pe{
        padding-right: 400px;
    }
</style>