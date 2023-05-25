const testimonialcont = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const usarname =document.querySelector('.usarname');
//const job = document.querySelector('.job');

const testimonialss =[
       {
        text:"Sou de São Paulo, capital, mas não penso em distância quando penso em qualidade. A localização é ótima e atendimento excepcional! Espero voltar mais vezes.",
        photo:"https://lh3.googleusercontent.com/a-/ACB-R5RrfSU-BVJSpmzV5TKZK50uwU7NbYbLSzZdfQKjKA=w56-h56-p-rp-mo-br100",
        name:'Jenyffer Trindade',
        
      },
      {
        text:"Espaço muito bem localizado, funcionários excepcionais. Preços justos, vale muito a pena.",
        photo:"https://lh3.googleusercontent.com/a-/ACB-R5QothNlQodfaWONsVsYr4-Ngjv-6fYa4QddfXaMCQ=w56-h56-p-rp-mo-br100",
        name:'Tayná Moura Araújo',
     
      },
      {
       photo:"https://lh3.googleusercontent.com/a-/ACB-R5RLpUhiqhMKics-AYbykfVkkQd-ChKn-PjDMx-aMbc=w56-h56-p-rp-mo-br100",
       text:"Ótimo,  fiz uma limpeza de pele que ficou parecendo um Photoshop 🤗 …",
       name:'Jhow Gomes',
      },
    ]
     let idx = 1;

     function updateTestimonials(){
      const {name,text,photo}= testimonialss[idx];
       
       testimonial.innerHTML = text
       userImage.src = photo
       usarname.innerHTML = name
       
       idx++

       if(idx > testimonialss.length -1){
        idx = 0
       }

     }
     setInterval(updateTestimonials,4000)
