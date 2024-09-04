import {aleatorio,nome} from'./aleatorio,js';
import{perguntas}nfrom'./perguntas.js';

const caixaprincipal= document.querySelector(".caixa-principal");
const caixaperguntas= document.querySelector(".caixa-perguntas");
const caixaalternativa= document.querySelector(".caixa-alternativa");
const caixaresultado= document.querySelector(".caixa-resultado");
const textoresultadol= document.querySelector(".caixa-resultado");
const b0taojogarnovamenter= document.querySelector(".novamente-btn");
const botaoinicial= document.querySelector(".inicial-btn");
const telainicial= document.querySelector(".tela-inicial");

let atual=0;
let perguntaatual;
let historiafinal="";

botaoinicial.addEventListener('click',iniciajogo);

function iniciajogo() {
    atual=0;
    telainicial.computedStyleMap.display='nome';
    caixaalternativas.classlist.remove("mostrar_");
    
