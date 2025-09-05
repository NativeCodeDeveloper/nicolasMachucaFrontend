"use client"
import Stepper, { Step } from "@/componentes/Stepper"
import Aurora from "@/componentes/Aurora";

export default function Comprar(){
    return(
        <div className="
           ">
                  <div>
                    <Aurora></Aurora>
                  </div>
                   <div>

                   </div>
<div className="">
             <Stepper
  initialStep={1}
  onStepChange={(step) => {
    console.log(step);
  }}
  onFinalStepCompleted={() => console.log("All steps completed!")}
  backButtonText="Previous"
  nextButtonText="Next"
>
  <Step>
    <h2 className="tituloResponsive">👋 ¡Hola! Vamos a crear algo increíble para ti</h2><br /><br />
    <p>Queremos conocerte para que uno de nuestros desarrolladores pueda ayudarte a diseñar tu página web a tu medida. <br /><br />Solo tomará un par de minutos</p>
  </Step>

  <Step>
    <h2 className="tituloResponsive"> ¿Como te llamas? </h2><br /><br />
    <p>Indícanos tu nombre para registrar tus datos de contacto</p><br /><br />
     <input className="inputMoradostep" type="text" name="nombre" id="nombre" placeholder=" Escribe tu nombre" /><br /><br />

  </Step>

  <Step>
    <h2 className="tituloResponsive"> ¿Cómo podemos hablar contigo?</h2><br /><br />
    <p>Necesitamos tus datos para que nuestro equipo se comunique contigo y te explique cómo empezaremos a construir tu página</p><br /><br />
         <input className="inputMoradostep" type="text" name="nombre" id="nombre" placeholder=" Correo y Telefono"/><br /><br />

  </Step>

    <Step>
    <h2 className="tituloResponsive"> 📦 Elige el plan que más se ajuste a ti </h2><br /><br />
    <p>Selecciona el plan que te interesa. Si no estás seguro, nuestro desarrollador te ayudará a elegir el ideal para tu negocio.</p><br /><br />
         <input className="inputMoradostep text-sm" type="text" name="nombre" id="nombre" placeholder=" Selecciona un plan" /><br /><br />

  </Step>


    <Step>
    <h2 className="tituloResponsive"> 💳 Selecciona cómo quieres pagar </h2><br /><br />
    <p> Elige la forma de pago que prefieras. Tu proyecto comenzará tan pronto confirmemos el pago.</p><br /><br />
    <input type="checkbox" name="transferencia" id="transferencias" /><label htmlFor="">  Transferencia Bancaria</label><br />
    <input type="checkbox" name="transferencia" id="transferencias" /><label htmlFor="">  Tarjeta de Credito</label><br />
    <input type="checkbox" name="transferencia" id="transferencias" /><label htmlFor="">  Tarjeta de Debito</label>
  </Step>

     <Step>
    <h2 className="tituloResponsive"> 🎉 ¡Listo! Tu proyecto está en camino </h2><br />
    <p className="text-sm md:text-2xl text-cyan-500 p-0"> Gracias por confiar en nosotros. <br /><br /> En las próximas horas uno de nuestros desarrolladores se pondrá en contacto para comenzar a planificar y diseñar tu página.
Revisa tu correo para confirmar los detalles.
</p>
  </Step>

</Stepper>
</div>

        </div>
    )
}