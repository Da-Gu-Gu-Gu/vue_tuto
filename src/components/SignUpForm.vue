<template>
    <form class="wrapper" @submit.prevent="submit">
       <h3>SignUp Form</h3>
       <label for="email" class="label">  Email</label>
       <input type="email" id="email" class="input" v-model="email" required />
          <label for="name" class="label">Name</label>
       <input type="text" id="name" class="input" v-model="name" required >
       <p v-if="errMesg" class="err">{{errMesg}}</p>
          <label for="password" class="label">Password</label>
       <input type="password" class="input" v-model="password" required >
          <label for="role" class="label">Select</label>
        <select v-model="role" class="input">
            <option value="Web Developer">Developer</option>
            <option value="Web Designer">Designer</option>
        </select>
        <div class="input checkbox">
        <input type="checkbox" name="accept" v-model="accept" />
        Accept terms and conditions
        </div>
        <label for="skill" class="label">Skills</label>
       <input type="text" class="input" @keyup.enter="skillsHandler" v-model="skill" required >
        <div v-for="skill in skills" v-bind:key="skill">
            <p class="skill">{{skill}} <span @click="deleteSkillHandler(skill)">🌸</span>  </p>
        </div>
        <div class="submit">
            <button type="submit">Create Account</button>
        </div>
    </form>
</template>

<script>
export default {
    name:'SignUpForm',
    data(){
        return{
            email:"",
            password:"",
            name:"",
            role:"",
            accept:false,
            skills:[],
            skill:"",
            errMesg:null
        }
    },
    methods:{
        skillsHandler(){
        
                this.skills.push(this.skill)
                this.skill=""
            
        },
        deleteSkillHandler(x){
            this.skills=this.skills.filter(y=>y!==x)
        },
        submit(){
            console.log('submit')
            this.name.length<5? this.errMesg="Name at least 5 characters":this.errMesg=null
        }
    }
}
</script>

<style>
    .wrapper{
        margin:0 auto;
        width: 500px;
        padding:10px;
        border-radius: 10px;
        background-color:#eee;
    }
    .label{
        display: block;
        margin-top: 10px;
        margin-bottom: 10px;
        text-align: left;
    }
    .input{
        outline: none;
        display: block;
        width: 100%;
        height: 30px;
        border-radius: 5px;
    }
    .checkbox{
      
        display: flex;
        align-items: center;
        justify-content: start;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .skill{
        text-align: left;
    }
    button{
        background:blue;
        padding:10px;
        color:white;
        border-radius: 10px;
        margin-top: 20px;
        outline: none;
        border: none;
    }
    .err{
        color:red;
    }
</style>