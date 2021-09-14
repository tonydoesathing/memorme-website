<template>
    <div id="callToAction" class="fullheight">
        <div class="container padding-top">
            <div class="row title">
                <h2>Save what's important - without the clutter</h2>
            </div>
            <div class="row padding-top">
                <div class="eight columns">
                    <div>
                        <input type="email" v-model="email" placeholder="Email" id="email" name="email">
                    </div>
                </div>
                <div class="four columns">
                    <button class="submit-button" id="submit-button" @click="submitEmail">Request Access</button>
                </div>
                
                
            </div>
        </div>
  
        <div class="padding-top">
            <Clouds2 />
        </div>
        
        <div class="container copyright">
            ©2021 MemorMe Inc. All rights reserved.
        </div>
        
        <div class="modal" v-if="showModal">
            <div v-if="loading" class="loading">
                <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
            <div v-if="!(error==='')" class="error">
                    There has been an error: {{error}}
                    <button @click="closeError">Okay</button>
            </div>
            <div v-if="success" class="success">
                Request received! We'll get in touch with you soon.
                <button @click="closeSuccess">Thanks!</button>
            </div>
        </div>
    </div>
  
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            email:"",
            showModal: false,
            loading: true,
            error: '',
            success: false,
        }
    },
    methods:{
        submitEmail: function(){
            var isEmail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(this.email);
            this.showModal=true;
            let vm = this;
            setTimeout(function(){ 
                
                if(isEmail){
                    axios.get('https://script.google.com/macros/s/AKfycbw8ufcfK3RxeoPzI0irtpjKsfvlvArZHjfXqmNblIpA_LgeqfI/exec',{
                        params: {
                            email:vm.email
                        }
                    })
                        .then((response) => { 
                            vm.loading=false;
                            vm.success=true;})
                        .catch(error => {
                            vm.loading=false;
                            vm.error;})
                }else{
                    vm.loading=false;
                    vm.error="Please enter a valid email"; 
                } 
                
                
            }, 1000);
        },
        closeModal: function(){
            this.showModal=false;
        },
        closeError: function(){
            this.error='';
            this.loading=true;
            this.closeModal();
        },
        closeSuccess: function(){
            this.loading=true;
            this.success=false;
            this.closeModal();
        }
    }
}
</script>
<style>
    #email{
        box-shadow: 1px 4px 11px -8px rgb(95, 95, 95) inset !important;
        border-color: rgb(238, 229, 229);
        font-size: 2rem;
        font-weight: 400;
        width:100%;
        height: 5rem;
    }
    .copyright{
        text-align: right;
        padding: 0.5rem;
    }
    .title>h2{
        padding-left: 1rem;
        padding-right: 1rem;
        line-height: 4rem;
    }

    @keyframes appear {
    0% {
        opacity: 0;
    }
    }
    .modal{
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.4);
        height: 100%;
        width: 100%;
        display: flex;
        vertical-align: middle;
        animation: 1s appear;
    }


    .success{
        animation: 1s appear;
        background-color: white;
        display: flex;
        flex-direction: column;
        padding: 2rem;
        padding-top:2rem;
        margin: auto;
        border-radius: 10px;
        text-align: center;
        max-width: 250px;
        font-weight: 400;
        font-size: 2rem;
    }
    .success>button{
        margin-top: 2rem;
        margin-bottom: 0rem;
    }

    .error{
        animation: 1s appear;
        background-color: white;
        display: flex;
        flex-direction: column;
        padding: 2rem;
        padding-top:2rem;
        margin: auto;
        border-radius: 10px;
        text-align: center;
        max-width: 250px;
        font-weight: 400;
        font-size: 2rem;
    }
    .error>button{
        margin-top: 2rem;
        margin-bottom: 0rem;
    }

    .loading{
        animation: 1s appear;
        min-width: 100px;
        min-height: 100px;
        max-height: 200px;
        max-width: 200px;
        margin: auto;
        background-color: white;
        border-radius: 10px;
        display: flex;
        padding: 2rem;
    }

    .lds-spinner {
    color: official;
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
    vertical-align: middle;
    margin: auto;
    }
    .lds-spinner div {
    transform-origin: 40px 40px;
    animation: lds-spinner 1.2s linear infinite;
    }
    .lds-spinner div:after {
    content: " ";
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: rgb(0, 217, 255);
    }
    .lds-spinner div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
    }
    .lds-spinner div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
    }
    .lds-spinner div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
    }
    .lds-spinner div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
    }
    .lds-spinner div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
    }
    .lds-spinner div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
    }
    .lds-spinner div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
    }
    .lds-spinner div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
    }
    .lds-spinner div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
    }
    .lds-spinner div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
    }
    .lds-spinner div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
    }
    .lds-spinner div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
    }
    @keyframes lds-spinner {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
  }
}

</style>
<style scoped>
    
</style>
