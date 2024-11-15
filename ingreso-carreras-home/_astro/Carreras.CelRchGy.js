import{r as y}from"./index.DhYZZe0J.js";var d={exports:{}},t={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g=y,b=Symbol.for("react.element"),v=Symbol.for("react.fragment"),I=Object.prototype.hasOwnProperty,h=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function m(r,e,a){var l,n={},s=null,o=null;a!==void 0&&(s=""+a),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(l in e)I.call(e,l)&&!f.hasOwnProperty(l)&&(n[l]=e[l]);if(r&&r.defaultProps)for(l in e=r.defaultProps,e)n[l]===void 0&&(n[l]=e[l]);return{$$typeof:b,type:r,key:s,ref:o,props:n,_owner:h.current}}t.Fragment=v;t.jsx=m;t.jsxs=m;d.exports=t;var i=d.exports;const A=({codcar:r,codare:e,nombre:a,modo:l,duracion:n})=>i.jsx("a",{href:`/landing/ingreso-carreras-home/${r}`,children:i.jsx("div",{className:"flex justify-center",style:{transform:"scale(0.8)"},children:i.jsxs("div",{className:"max-w-xl h-full w-[300px] rounded-2xl overflow-hidden shadow-lg relative transition-transform hover:scale-105 hover:shadow-xl border-2",children:[i.jsx("div",{className:"relative h-32 lg:h-48",children:i.jsx("img",{src:`/landing/public/cards/${r}.webp`,alt:`${a}`,className:"absolute w-full h-full object-cover object-center"})}),i.jsx("img",{className:"absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[100%] lg:-translate-y-[40%] w-14 h-10 lg:w-20 lg:h-16",src:`/landing/ingreso-carreras-ucasal/iconoCarrera/${e?e==="30"?"13":e:"default"}.svg`,alt:"icono carta"}),i.jsx("div",{className:"px-2 py-4 bg-white flex items-center justify-center h-28",children:i.jsx("div",{className:"font-semibold text-center text-sm",children:a||""})}),i.jsx("div",{className:"py-2 bg-[#ee1818] w-full h-full",children:i.jsxs("div",{className:"grid grid-cols-2 gap-2 text-center",children:[i.jsxs("div",{className:"text-white flex flex-col col-span-1",children:[i.jsx("span",{className:"rounded-full px-1 text-xs font-light",children:"Modalidad"}),i.jsx("span",{className:"rounded-full px-1 text-sm font-bold",children:l?.includes("7")?"Digital":l?.includes("1")?"Presencial":"Presencial y Digital"})]}),i.jsxs("div",{className:"text-white flex flex-col col-span-1 border-l-2",children:[i.jsx("span",{className:"rounded-full px-1 text-xs font-light",children:"Duración"}),i.jsx("span",{className:"rounded-full px-1 text-sm font-bold",children:n})]})]})})]})})}),E=[{codcar:9,tipcar:"Pregrado",nombre:"Tecnicatura Universitaria en Secretariado Ejecutivo",modo:[7],duracion:"2 Años",codare:12,porque:`<div class="hidden duration-700 ease-in-out" data-carousel-item>
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl">Primer Año</h1>
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] list-disc my-1">
    <li>Herr.tecnol. I</li>
    <li>Problemat. Integr</li>
    <li>Comp.y Prod.Textos</li>
    <li>Contex.y Adm.Organ</li>
    <li>Filosofia</li>
    <li>Herr.tecnol. II</li>
    <li>Marco Jur. Organiza</li>
    <li>Tall de Comuc.</li>
    <li>Gest.Inform.y Docum</li>
  </ul>
</div>
<div class="hidden duration-700 ease-in-out" data-carousel-item>
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl">Segundo Año</h1>
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] list-disc my-1">
    <li>Teologia</li>
    <li>Relac.Públ.y Mark</li>
    <li>Lengua Inglesa I</li>
    <li>Sist.Proc.Administ</li>
    <li>Com.Digit.y Man.Red</li>
    <li>Lengua Inglesa II</li>
    <li>Estrat.E Innovaci.</li>
    <li>Func.y Téc.Secretar</li>
    <li>Res.Probl.y Mejora</li>
    <li>Doc.Soc.Iglesia</li>
  </ul>
</div>
<div class="hidden duration-700 ease-in-out" data-carousel-item>
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl">Tercer Año</h1>
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] list-disc my-1">
    <li>Prac.Profesional</li>
    <li>Etica Profesional</li>
    <li>Lengua Inglesa III</li>
  </ul>
</div>
<!-- Slider indicators -->
<div class="absolute z-30 flex space-x-5 -translate-x-1/2 bottom-5 left-1/2">
    <button type="button" class="w-4 h-4 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
    <button type="button" class="w-4 h-4 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
    <button type="button" class="w-4 h-4 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide_to="2"></button>
</div>`,description:'<li class="texto-seccion-2"> <span class="lista-carrera">Descripción de la carrera:</span> El Tec. en Secretariado Ejecutivo está preparado para llevar a cabo funciones imprescindibles para rangos medios y altos. Su función se vincula directamente a la organización de tareas, al manejo del tiempo, agendas, entrevistas, viajes  y cualquier otra actividad propia del ámbito laboral.</li><br><li class="texto-seccion-2"> <span class="lista-carrera">Salida Laboral:</span> El Tec. en Secretariado Ejecutivo podrá desempeñarse en organizaciones privadas, estatales, o nacionales y en cualquier rubro que su actividad demande.</li>',resolucion_ministerial:"545/2023",carga_horaria:"1795 hrs",perfil_egresado:"<li>El técnico en Secretariado Ejecutivo poseerá las habilidades necesarias para la planeación, desarrollo y control de las actividades inherentes al funcionamiento de la oficina, aplicando métodos y estrategias innovadoras y asistiendo la gestión administrativa de los niveles directivos de cualquier organización pública o privada.</li>"},{codcar:10,tipcar:"Grado",nombre:"Lic. en Economía",modo:[1,7],duracion:"4 Años",codare:12,porque:`<div class="hidden duration-700 ease-in-out" data-carousel-item>
  <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl">1° Año</h3>
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] [&>li]:my-1" style="list-style-type: disc">
    <li>Historia Económica</li>
    <li>Matemáticas I</li>
    <li>Introducción a la Economía I</li>
    <li>Administración I</li>
    <li>Contabilidad I</li>
    <li>Geografía Económica</li>
    <li>Matemáticas II</li>
    <li>Geometría Analítica</li>
    <li>Introducción a la Economía II</li>
    <li>Administración II</li>
    <li>Contabilidad II</li>
  </ul>
</div>
<div class="hidden duration-700 ease-in-out" data-carousel-item>
  <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl">2° Año</h3>
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] [&>li]:my-1" style="list-style-type: disc">
    <li>Inglés Técnico</li>
    <li>Matemáticas III</li>
    <li>Microeconomía</li>
    <li>Contabilidad III</li>
    <li>Derecho Constitucional</li>
    <li>Matemática Financiera</li>
    <li>Macroeconomía</li>
    <li>Administración Tributaria</li>
    <li>Contabilidad IV</li>
    <li>Derecho Político</li>
  </ul>
</div>
<div class="hidden duration-700 ease-in-out" data-carousel-item>
  <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl">3° Año</h3>
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] [&>li]:my-1" style="list-style-type: disc">
    <li>Comercio Internacional</li>
    <li>Costos</li>
    <li>Microeconomía Avanzada</li>
    <li>Estadística</li>
    <li>Análisis e Interpretación de Estados Contables</li>
    <li>Metodología de la Investigación</li>
    <li>Sociología Económica</li>
    <li>Matemáticas para Economistas</li>
    <li>Ciclos Económicos</li>
    <li>Finanzas Públicas y Política Fiscal</li>
  </ul>
</div>
<div class="hidden duration-700 ease-in-out" data-carousel-item>
  <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl">4° Año</h3>
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] [&>li]:my-1" style="list-style-type: disc">
    <li>Ética Profesional</li>
    <li>Desarrollo Económico</li>
    <li>Política Económica</li>
    <li>Economía Cuantitativa I</li>
    <li>Administración Financiera</li>
    <li>Antropología Económica</li>
    <li>Teoría Monetaria</li>
    <li>Sistemas Económicos Comparados</li>
    <li>Economía Cuantitativa II</li>
    <li>Estructura Económica</li>
    <li>Contabilidad Nacional</li>
  </ul>
</div>`,description:"El licenciado en <b>economía</b> es un profesional que está capacitado para realizar todo tipo de evaluación y diagnóstico regional, sectorial o global vinculado al ámbito económico. Tiene conocimientos sobre la administración de las riquezas y entendimiento sobre los fenómenos micro y macroeconómicos.<br>Como profesional puede desempeñarse laboralmente en bancos, sectores financieros, industriales y también en sectores públicos o privados prestando servicios como consultor, analista financiero, asesor fiscal, entre otras funciones. También estará habilitado para intervenir en proyectos de investigación que contribuyan al desarrollo del área.",resolucion_ministerial:"2409/16",carga_horaria:"2625 hrs",perfil_egresado:"<li>Aplicar los conceptos e instrumentos analíticos y empíricos para una adecuada comprensión de la economía moderna.</li><li>Interpretar el funcionamiento de la economía en sus distintos niveles de agregación tanto en el ámbito público como privado para asesorar en la toma de decisiones de índole económica y para diseñar políticas y orientar al desarrollo económico sustentable.</li><li>Analizar y explicar los aspectos económicos de los fenómenos sociales.</li><li>Integrar equipos de trabajos multidisciplinarios para el análisis, solución y seguimiento de problemas complejos.</li><li>Poseer actitud para el aprendizaje y capacitación continuos con el objeto de generar y difundir investigaciones en el área de ciencias económicas.</li>"},{codcar:11,tipcar:"Grado",nombre:"Lic. en Administración de Empresas",modo:[1,2,7],duracion:"4 Años",codare:12,porque:'<div class="hidden duration-700 ease-in-out" data-carousel-item> <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 1° Año </h3> <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-base" style="list-style-type: disc"> <li>Filosofía</li> <li>Historia Económica</li> <li>Matemáticas I</li> <li>Introducción a la Economía I</li> <li>Administración I</li> <li>Contabilidad I</li> <li>Derecho Civil I</li> <li>Geografía Económica</li> <li>Matemáticas II</li> <li>Introducción a la Economía II</li> <li>Administración II</li> <li>Contabilidad II</li> <li>Derecho Civil II</li> </ul> </div> <div class="hidden duration-700 ease-in-out" data-carousel-item> <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 2° Año </h3> <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc"> <li>Teología</li> <li>Inglés Técnico</li> <li>Matemáticas III</li> <li>Microeconomía</li> <li>Administración III</li> <li>Contabilidad III</li> <li>Derecho Constitucional</li> <li>Matemática Financiera</li> <li>Macroeconomía</li> <li>Sistemas de Información</li> <li>Contabilidad IV</li> <li>Derecho Administrativo</li> </ul> </div> <div class="hidden duration-700 ease-in-out" data-carousel-item> <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 3° Año </h3> <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc"> <li>Doctrina Social de la Iglesia</li> <li>Costos y Presupuestos</li> <li>Comercialización I</li> <li>Estadística</li> <li>Administración Financiera I</li> <li>Análisis e Interpretación de Estados Contables</li> <li>Derecho Comercial I</li> <li>Metodología de la Investigación</li> <li>Comercialización II</li> <li>Administración Financiera II</li> <li>Planeamiento Estratégico</li> <li>Derecho Comercial II</li> </ul> </div> <div class="hidden duration-700 ease-in-out" data-carousel-item> <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 4° Año </h3> <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-xs lg:text-base" style="list-style-type: disc"> <li>Trabajo Final de Graduación</li> <li>Ética Profesional</li> <li>Régimen Tributario</li> <li>Métodos y Modelos Decisionales</li> <li>Administración de la Producción y de las Operaciones</li> <li>Gestión de las Personas en las Organizaciones I</li> <li>Derecho del Trabajo y de la Seguridad Social</li> <li>Seminarios de Actualización y Tendencias Profesionales</li> <li>Formulación y Evaluación de Proyectos</li> <li>Control de Gestión</li> <li>Dirección Estratégica</li> <li>Gestión de las Personas en las Organizaciones II</li> </ul> </div>',description:"La licenciatura en <b>administración de empresas</b> tiene como objetivo formar profesionales capacitados para la comprensión de las funciones de una organización. Está habilitado para la planificación, dirección y control de cualquier empresa.<br>Podrá desempeñarse profesionalmente en cualquier organización, tanto en empresas públicas como privadas, nacionales e internacionales, en instituciones educativas y culturales; así como también en forma independiente en consultorías.",nom_landing:"estudiar-lic-administracion-empresas-distancia",resolucion_ministerial:"2412/16",carga_horaria:"3075 hrs",perfil_egresado:"<li>Detectar y analizar problemas en distintos tipos de organizaciones e intervenir en diferentes niveles de decisión.</li><li>Elaborar diagnósticos en cualquier tipo de organización y diseñar estructuras y procedimientos para la optimización de diferentes funciones.</li><li>Liderar, desarrollar y coordinar las funciones de planeamiento, organización, dirección y control.</li><li>Diseñar, implementar y dirigir procedimientos y sistemas de información para facilitar la gestión y la toma de decisiones.</li><li>Definir, implementar y coordinar políticas y estrategias de comercialización, producción, recursos humanos y de obtención y uso de recursos financieros.</li><li>Dirigir, desarrollar y coordinar acciones destinadas a la elaboración de planeamientos estratégicos en todo tipo de organización para optimizar los recursos disponibles y el control de las operaciones, generando los cambios necesarios para adecuarse al contexto o modificarlo.</li>"},{codcar:14,tipcar:"Grado",nombre:"Contador Público",modo:[1,2,7],duracion:"4 Años",codare:12,porque:'<div class="hidden duration-700 ease-in-out" data-carousel-item> <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 1° Año </h3> <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm [&>li]:my-1" style="list-style-type: disc"> <li> Filosofía </li> <li> Historia Económica </li> <li> Matemáticas I </li> <li> Introducción a la Economía I </li> <li> Administración I </li> <li> Contabilidad I </li> <li> Derecho Civil I </li> <li> Geografía Económica </li> <li> Matemáticas II </li> <li> Introducción a la Economía II </li> <li> Administración II </li> <li> Contabilidad II </li> <li> Derecho Civil II </li> </ul> </div> <div class="hidden duration-700 ease-in-out" data-carousel-item> <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 2° Año </h3> <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] [&>li]:my-1" style="list-style-type: disc"> <li> Teología </li> <li> Inglés Técnico </li> <li> Matemáticas III </li> <li> Economía I </li> <li> Contabilidad III </li> <li> Derecho Constitucional </li> <li> Matemática Financiera </li> <li> Economía II </li> <li> Gestión de Empresas </li> <li> Contabilidad IV </li> <li> Derecho Administrativo </li> </ul> </div> <div class="hidden duration-700 ease-in-out" data-carousel-item> <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 3° Año </h3> <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] [&>li]:my-1" style="list-style-type: disc"> <li>Doctrina Social de la Iglesia </li> <li>Costos y Presupuestos </li> <li>Finanzas Públicas </li> <li>Estadística </li> <li>Administración Financiera I </li> <li>Análisis e Interpretación de Estados Contables </li> <li>Derecho Comercial I </li> <li>Metodología de la Investigación </li> <li>Administración Financiera II </li> <li>Contabilidad Pública </li> <li>Contabilidad Gerencial </li> <li>Derecho Comercial II </li> <li>Derecho Tributario </li> </ul> </div> <div class="hidden duration-700 ease-in-out" data-carousel-item> <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 4° Año </h3> <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] [&>li]:my-1" style="list-style-type: disc"> <li>Ética Profesional </li> <li>Sistemas Informáticos </li> <li>Auditoría I </li> <li>Actuación Profesional </li> <li>Teoría y Técnica Impositiva I </li> <li>Derecho del Trabajo y de la Seguridad Social </li> <li>Auditoría de Sistemas </li> <li>Auditoría II </li> <li>Teoría y Técnica Impositiva II </li> <li>Derecho Concursal </li> </ul> </div>',description:"El <b>contador</b> tendrá conocimientos en materia contable, impositiva y financiera de una empresa. Cuenta con las competencias para analizar e interpretar con criterio las diferentes situaciones y escenarios económicos de las diferentes entidades.<br> El egresado podrá desempeñarse en organismos del sector público como privado, pueden trabajar de manera independiente o autónoma. Están capacitados para asumir funciones como asesor financiero o auditor. ",nom_landing:"estudiar-contador-distancia",resolucion_ministerial:"2835/94",carga_horaria:"2965 hrs",perfil_egresado:"<li>El egresado contará con una sólida formación en contabilidad, costos, impuestos, auditoría y gestión de organizaciones.</li> <li>Estará capacitado para actuar como perito judicial y podrá ejercer como asesor o auditor en el sector público o privado.</li>"},{codcar:15,tipcar:"Grado",nombre:"Lic. en Comercialización",modo:[1,7],duracion:"4 Años",codare:12,porque:'<div class="hidden duration-700 ease-in-out" data-carousel-item> <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 1° Año </h3> <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-xs lg:text-xl" style="list-style-type: disc"> <li>Inglés</li> <li>Informática</li> <li>Microeconomía</li> <li>Análisis Cuantitativo</li> <li>Fundamentos de Marketing</li> <li>Innovación y Creatividad Empresarial</li> <li>Estrategias de Textos Comerciales</li> <li>Tecnología de la Información y la Comunicación (TIC)</li> <li>Macroeconomía</li> <li>Comportamiento del Consumidor</li> <li>Estrategias de Producto y Servicios</li> <li>Administración Estratégica</li> </ul> </div> <div class="hidden duration-700 ease-in-out" data-carousel-item> <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 2° Año </h3> <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-xs lg:text-xl" style="list-style-type: disc"> <li>Filosofía</li> <li>Antropología del Consumidor</li> <li>Metodología de la Investigación</li> <li>Estadística</li> <li>Gestión de Procesos y Calidad</li> <li>Sistemas de Información Contable</li> <li>Teología</li> <li>Estrategias de Distribución</li> <li>Sistema de Información Financiera</li> <li>Investigación de Mercados I</li> <li>Neuromarketing</li> <li>Aspectos Legales de los Negocios</li> </ul> </div> <div class="hidden duration-700 ease-in-out" data-carousel-item> <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 3° Año </h3> <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-base" style="list-style-type: disc"> <li>Costos y Presupuestos</li> <li>Negocios Internacionales</li> <li>Investigación de Mercado II</li> <li>Técnicas de Ventas</li> <li>Estrategias de Comunicación</li> <li>Endomarketing</li> <li>Doctrina Social de la Iglesia</li> <li>Estrategias de Precio</li> <li>Inteligencia y Negociación Empresarial</li> <li>Escenarios de Negocios</li> <li>Marketing Personal</li> <li>Marketing Digital</li> <li>Diseño Gráfico y Publicitario</li> </ul> </div> <div class="hidden duration-700 ease-in-out" data-carousel-item> <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 4° Año </h3> <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc"> <li>Ética Profesional</li> <li>Formulación y Evaluación de Proyectos</li> <li>Marketing Estratégico</li> <li>Plan de Marketing</li> <li>Social Media Marketing</li> <li>Seminario de Actualización</li> <li>Trabajo Final de Graduación</li> <li>Plan de Negocio Digital</li> <li>Marketing Sectorial</li> <li>Taller de Emprendedurismo</li> </ul> </div>',description:"La licenciatura en <b>Comercialización</b> te brinda las competencias para diseñar y desarrollar estrategias y acciones comerciales, analizando los fenómenos del consumo con la finalidad de posicionar a la organización en los mercados nacionales e internacionales, a través de herramientas innovadoras del marketing digital.",nom_landing:"estudiar-lic-comercializacion-distancia",resolucion_ministerial:"362/21",carga_horaria:"2820 hrs",perfil_egresado:"<li>Desempeñar y dirigir tareas de comercialización en emprendimientos de tipo económico, industrial o comercial.</li><li>Realizar y dirigir tareas de búsqueda y procesamiento de datos e investigación de mercados.</li><li>Diseñar estrategias competitivas de productos y de precios.</li><li>Planificar ventas de empresas o emprendimientos comerciales, supervisando la publicidad correspondiente.</li><li>Dirigir, diseñar y ejecutar planes de distribución de productos comercializables.</li><li>Organizar tareas de comercialización internacional, estudiando las condiciones de los mercados y las estrategias correspondientes.</li><li>Realizar análisis, estudios y proyectos sobre oportunidad o conveniencia de mercado para exportación e importación.</li><li>Efectuar asesoramiento específico sobre mercados, productos y servicios a las representaciones diplomáticas argentinas en el exterior o embajadas extranjeras acreditadas ante la República.</li><li>Realizar estudios y proyectos de promoción y políticas industriales, mineras, agropecuarias, comerciales, energéticas, de transporte y de infraestructura en sus aspectos y posibilidades de comercialización.</li><li>Efectuar análisis, estudios y estrategias sobre desarrollo y lanzamiento o discontinuación de productos y servicios.</li><li>Realizar análisis y estudios referentes a políticas y métodos de comercialización de productos y servicios.</li><li>Efectuar análisis y estudios sobre la estructura de costos de comercialización de productos y servicios.</li><li>Realizar análisis y estudios referentes a políticas y fijación de precios de productos y servicios.</li><li>Realizar análisis y estudios referentes a publicidad, promoción y desarrollo de canales de distribución de productos y servicios, así como las estrategias y políticas correspondientes.</li><li>Realizar peritajes en cuestiones de comercialización de todos los fueros en el orden judicial.</li>"},{codcar:16,tipcar:"Grado",nombre:"Abogacía",modo:[1,2,7],duracion:"5 Años",codare:13,porque:'<div class="hidden duration-700 ease-in-out" data-carousel-item> <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 1° Año </h3> <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm [&>li]:my-1" style="list-style-type: disc"> <li>Introducción a la Filosofía</li> <li>Historia Constitucional Argentina</li> <li>Introducción al Derecho</li> <li>Derecho Privado Parte General</li> <li>Sociología</li> <li>Derecho Romano</li> <li>Derecho Político</li> <li>Lógica y Argumentación Jurídica</li> </ul> </div> <div class="hidden duration-700 ease-in-out" data-carousel-item> <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 2° Año </h3> <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] [&>li]:my-1" style="list-style-type: disc"> <li>Teología I</li> <li>Derecho Penal Parte General</li> <li>Teoría General de las Obligaciones</li> <li>Constitución, Derechos Humanos y Garantías</li> <li>Metodología de la Investigación</li> <li>Economía Política</li> <li>Derecho de DAños y Responsabilidad</li> <li>Derecho Constitucional del Poder</li> </ul> </div> <div class="hidden duration-700 ease-in-out" data-carousel-item> <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 3° Año </h3> <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] [&>li]:my-1" style="list-style-type: disc"> <li>Teología II</li> <li>Derecho Penal Parte Especial</li> <li>Derecho Procesal Civil I</li> <li>Teoría General de Contratos</li> <li>Derecho Empresarial</li> <li>Derecho Procesal Civil II</li> <li>Derecho Comercial de los Usuarios y Consumidores</li> <li>Derecho Ambiental y de los Recursos Naturales</li> <li>Seminario Electivo I</li> <li>Contratos en Particular</li> </ul> </div> <div class="hidden duration-700 ease-in-out" data-carousel-item> <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 4° Año </h3> <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] [&>li]:my-1" style="list-style-type: disc"> <li>Derecho Procesal Penal I</li> <li>Derecho Administrativo</li> <li>Derechos Reales</li> <li>Práctica Profesional I</li> <li>Doctrina Social de la Iglesia</li> <li>Derecho Procesal Penal II</li> <li>Derecho Societario</li> <li>Derecho Individual y Colectivo del Trabajo y de la Seguridad Social</li> <li>Derecho Internacional Público y de la Integración</li> <li>Métodos Participativos de Resolución de Conflictos</li> </ul> </div> <div class="hidden duration-700 ease-in-out" data-carousel-item> <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 5° Año </h3> <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] [&>li]:my-1" style="list-style-type: disc"> <li>Práctica Profesional II</li> <li>Filosofía del Derecho</li> <li>Derecho de Familia</li> <li>Derecho Concursal</li> <li>Derecho Público Provincial y Municipal</li> <li>Derecho Financiero y Tributario</li> <li>Ética Profesional</li> <li>Derecho Internacional Privado</li> <li>Derecho Sucesorio</li> <li>Seminario Electivo II</li> </ul> </div>',description:"La carrera de <b>abogacía</b> te capacita y brinda herramientas para mediar, interceder y asesorar a personas físicas y jurídicas en situaciones de variada complejidad.<br> El egresado será un experto en <b>derecho</b> y podrá solucionar problemáticas jurídicas y velar por una sociedad más justa y equitativa.<br>Los <b>profesionales</b> podrán ejercer como jueces, magistrados y también ocupar cargos directivos; así como también actuar como consultores o asesores jurídicos en instituciones públicas o en empresas privadas.",nom_landing:"estudiar-derecho-abogacia-distancia",resolucion_ministerial:"1435/18",carga_horaria:"2864 hrs",perfil_egresado:"<li>Prestar servicios profesionales a la sociedad y para la sociedad.</li><li>Ver al derecho como una herramienta para la convivencia humana y a la justicia como el destino normal del derecho.</li><li>Tener fe en la libertad sin la cual no hay ni derecho, ni justicia, ni paz.</li><li>Reciclar sus conocimientos, enriquecer sus experiencias, acrecentar la profundidad de sus pensamientos y acumular enseñanza de sus errores y dificultades.</li><li>Ser celoso auxiliar de la justicia con una incondicionada indignación y desprecio por la injusticia, la corrupción y la mentira.</li><li>Tener profundo conocimiento de la ley, la doctrina, la jurisprudencia y los procedimientos, garantizando a la sociedad el imperio del derecho.</li><li>Ser protagonista del presente y artífice del futuro, con el objetivo apasionante de hacer posible la justicia entre los hombres.</li>"},{codcar:17,tipcar:"Grado",nombre:"Lic. en Relaciones Internacionales",modo:[1,7],duracion:"4 Años",codare:13,porque:'<div class="hidden duration-700 ease-in-out" data-carousel-item> <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 1° Año </h3> <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] [&>li]:my-1" style="list-style-type: disc"> <li>Historia Universal Contemporánea</li> <li>Inglés I</li> <li>Computación I</li> <li>Economía I</li> <li>Introducción al Derecho</li> <li>Introducción a las Ciencias Políticas</li> <li>Introducción a las Relaciones Internacionales</li> <li>Historia Constitucional Argentina</li> <li>Filosofía I</li> <li>Metodología y Técnicas de la Investigación I</li> </ul> </div> <div class="hidden duration-700 ease-in-out" data-carousel-item> <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 2° Año </h3> <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] [&>li]:my-1" style="list-style-type: disc"> <li>Historia Contemporánea de América</li> <li>Inglés II</li> <li>Computación II</li> <li>Economía II</li> <li>Derecho Constitucional</li> <li>Relaciones Internacionales I</li> <li>Ciencias Políticas I</li> <li>Metodología y Técnica de la Investigación II</li> <li>Derecho Internacional Público I</li> <li>Filosofía II</li> <li>Derecho de los Recursos Naturales y Medio Ambiente</li> </ul> </div> <div class="hidden duration-700 ease-in-out" data-carousel-item> <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 3° Año </h3> <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] [&>li]:my-1" style="list-style-type: disc"> <li>Sociología General y Argentina</li> <li>Economía III</li> <li>Teoría de las Relaciones Internacionales</li> <li>Elementos del Derecho Civil, Comercial y Empresarial en las Relaciones Internacionales</li> <li>Ciencias Políticas II</li> <li>Teología I</li> <li>Inglés III</li> <li>Derecho Internacional</li> <li>Derecho Internacional Público II</li> <li>Teología II</li> <li>Portugués I</li> </ul> </div> <div class="hidden duration-700 ease-in-out" data-carousel-item> <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 4° Año </h3> <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] [&>li]:my-1" style="list-style-type: disc"> <li>Doctrina Social de la Iglesia</li> <li>Geopolítica</li> <li>Trabajo Final</li> <li>Derecho Internacional Privado</li> <li>Relaciones Internacionales II</li> <li>Política Exterior Argentina</li> <li>Seminario (Problemas Económicos Argentinos Contemporáneos)</li> <li>Portugués II</li> <li>Estrategia I</li> <li>Seminario Problemática Política Exterior Actual en la Argentina</li> <li>Estrategia II</li> </ul> </div>',description:"La <b>licenciatura</b> te brinda conocimientos en procesos políticos, económicos, culturales y sociales. Los profesionales adquieren competencias para preservar la armonía entre diferentes naciones y la resolución de problemas. Son los encargados de <b>promover el diálogo entre gobiernos, organismos y el sector privado</b>.<br> En el campo laboral pueden desempeñarse en el sector público y privado, en organismos no gubernamentales (ONGs) o en organismos internacionales. Además pueden ejercer la docencia y desempeñarse en la investigación.",nom_landing:"estudiar-lic-comercializacion-distancia",resolucion_ministerial:"176/96",carga_horaria:"3210 hrs",perfil_egresado:"<li>Evaluar críticamente los elementos y factores que influyen en los procesos de toma de decisiones en materia de política exterior.</li><li>Asesorar a instituciones públicas y a empresas privadas sobre la dinámica de las relaciones internacionales entre Estados, entre bloques económicos, agentes económicos internacionales y organizaciones internacionales no gubernamentales sin fin de lucro.</li><li>Analizar los factores que influyen sobre la configuración del entramado internacional contemporáneo, las causas que determinan su crisis y los elementos que permiten intuir el futuro de las relaciones.</li><li>Analizar los principales problemas económicos y políticos de las organizaciones públicas y privadas de carácter nacional e internacional que determinan y viabilizan su inserción en los principales espacios de intercambio internacional.</li><li>Efectuar seguimiento de la evolución de los procesos de integración regional y subregional en materia económica, cultural, social y política, y determinar las claves para la inserción provechosa y dinámica de Argentina en el moderno escenario internacional.</li><li>Desarrollar competencias, conductas y aptitudes de cooperación, comunicación y colaboración en cambiantes entornos internacionales, multiculturales y multilingües que favorezcan el intercambio de Argentina con el resto de los agentes internacionales y ensanchen sus horizontes.</li><li>Desarrollar especializaciones de carácter regional que permitan profundizar estudios específicos sobre diferentes áreas económicas y culturales del planeta.</li><li>Analizar los fenómenos transfronterizos de Argentina y asesorar a instituciones públicas y privadas respecto de las causas y los efectos de las migraciones transfronterizas sobre los mercados de trabajo locales.</li><li>Ejercer la función diplomática o consular y desempeñar distintos cargos jerárquicos en organismos internacionales.</li><li>Desempeñar cargos ejecutivos de distintos niveles en empresas multinacionales y extranjeras con sucursales o subsidiarias en nuestro país o el extranjero.</li>"},{codcar:30,tipcar:"Grado",nombre:"Lic. en Relaciones Públicas e Institucionales",modo:[1,7],duracion:"4 Años",codare:12,porque:`\r
  <div class="hidden duration-700 ease-in-out" data-carousel-item>\r
    <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 1° Año </h3>\r
    <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] [&>li]:my-1" style="list-style-type: disc">\r
      <li>Filosofía</li>\r
      <li>Comprensión y producción de textos</li>\r
      <li>Principios de economía</li>\r
      <li>Introducción a la administración de las organizaciones</li>\r
      <li>Introducción a las relaciones públicas</li>\r
      <li>Psicología social y organizacional</li>\r
      <li>Historia social y económica</li>\r
      <li>Tecnología de la información y de la comunicación I</li>\r
      <li>Redacción y estilo</li>\r
      <li>Teoría de la comunicación</li>\r
    </ul>\r
  </div>\r
\r
  <div class="hidden duration-700 ease-in-out" data-carousel-item>\r
    <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 2° Año </h3>\r
    <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] [&>li]:my-1" style="list-style-type: disc">\r
      <li>Introducción al pensamiento cristiano</li>\r
      <li>Lengua inglesa I</li>\r
      <li>Marketing</li>\r
      <li>Comunicación organizacional</li>\r
      <li>Ceremonial y protocolo</li>\r
      <li>Lengua inglesa II</li>\r
      <li>Tecnología de la información y de la comunicación II</li>\r
      <li>Estadística</li>\r
      <li>Oratoria</li>\r
      <li>Publicidad y promoción</li>\r
    </ul>\r
  </div>\r
\r
  <div class="hidden duration-700 ease-in-out" data-carousel-item>\r
    <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 3° Año </h3>\r
    <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] [&>li]:my-1" style="list-style-type: disc">\r
      <li>Doctrina social cristiana</li>\r
      <li>Medios digitales</li>\r
      <li>Producción y organización de eventos</li>\r
      <li>Identidad e imagen corporativa</li>\r
      <li>Diseño gráfico</li>\r
      <li>Seminario de integración y práctica</li>\r
      <li>Gestión del personal</li>\r
      <li>Administración de las relaciones públicas</li>\r
      <li>Opinión pública</li>\r
      <li>Gestión comunitaria cultural</li>\r
    </ul>\r
  </div>\r
\r
  <div class="hidden duration-700 ease-in-out" data-carousel-item>\r
    <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 4° Año </h3>\r
    <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] [&>li]:my-1" style="list-style-type: disc">\r
      <li>Trabajo final de graduación</li>\r
      <li>Ética y responsabilidad social</li>\r
      <li>Metodología de la investigación</li>\r
      <li>Semiótica</li>\r
      <li>Taller de Community Manager</li>\r
      <li>Relaciones internacionales</li>\r
      <li>Seminarios de actualización y tendencias profesionales</li>\r
      <li>Estrategias de negociación</li>\r
      <li>Dirección estratégica de las relaciones públicas</li>\r
      <li>Asuntos públicos</li>\r
    </ul>\r
  </div>\r
\r
  <!-- Slider indicators -->\r
  <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>\r
  </div>`,description:"La licenciatura forma profesionales capacitados para planificar y ejecutar estrategias de gestión en una empresa u organización con el fin de optimizar la imagen institucional y mejorar las relaciones comunicacionales tanto internas como externas. <br>El profesional está habilitado para desarrollar tareas de gestión de intereses, de asuntos públicos, comunicación institucional e interna, comunicación política y de bien público entre otras. <br>Como egresado puede desempeñarse en instituciones públicas y privadas, consultoras especializadas, empresas y organizaciones de la sociedad civil.",resolucion_ministerial:"1559/17",carga_horaria:"2615 hrs",perfil_egresado:"El egresado de esta carrera será un profesional competente y creativo para interrelacionar a una organización con sus públicos, y mejorar la imagen institucional. Estará capacitado para: <li>Planificar, desarrollar y evaluar acciones para optimizar la imagen y las relaciones de la organización.</li> <li>Seleccionar y adecuar mensajes y medios en función de los objetivos institucionales.</li> <li>Organizar reuniones, encuentros, campañas y acciones comunitarias.</li> <li>Brindar asesoramiento en ceremonial y protocolo.</li>"},{codcar:58,tipcar:"Grado",nombre:"Lic. en Ciencia de Datos",modo:[7],duracion:"4 Años",codare:14,porque:`<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 1° Año </h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc;">\r
    <li>Álgebra Lineal</li>\r
    <li>Cálculo Diferencial e Integral I</li>\r
    <li>Programación I</li>\r
    <li>Introducción a la Estructura de Datos</li>\r
    <li>Doctrina Social de la Iglesia</li>\r
    <li>Geometría Analítica</li>\r
    <li>Cálculo Diferencial e Integral II</li>\r
    <li>Programación II</li>\r
    <li>Análisis de Algoritmos Computacionales</li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 2° Año </h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc;">\r
    <li>Matemática Discreta</li>\r
    <li>Base de Datos Estructurados</li>\r
    <li>Computación Concurrente</li>\r
    <li>Probabilidad y Estadística Científica</li>\r
    <li>Ética Profesional</li>\r
    <li>Modelos y Simulación</li>\r
    <li>Base de Datos No Estructurados</li>\r
    <li>Análisis de Datos Masivos</li>\r
    <li>Gestión Empresarial</li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 3° Año </h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc;">\r
    <li>Fundamentos de Inteligencia Artificial</li>\r
    <li>Programación para Ciencia de Datos</li>\r
    <li>Análisis de Datos Estratégicos</li>\r
    <li>Modelos de Gran Escala</li>\r
    <li>Simulación Estocástica</li>\r
    <li>Plataformas de Computación en la Nube</li>\r
    <li>Macrodatos I</li>\r
    <li>Herramientas de Visualización de Estructura de Datos</li>\r
    <li>Minería de Datos</li>\r
    <li>Investigación Operativa</li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 4° Año </h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc;">\r
    <li>Prueba de Suficiencia en Idioma Inglés</li>\r
    <li>Metodologías de Investigación</li>\r
    <li>Macrodatos II</li>\r
    <li>Administración de Proyectos IT</li>\r
    <li>Inteligencia Empresarial y Análisis de Negocio</li>\r
    <li>La Dirección Estratégica Basada en Ciencias de Datos</li>\r
    <li>Trabajo Final</li>\r
    <li>Sistemas Inteligentes</li>\r
    <li>Análisis de Datos Aplicados a la Industria</li>\r
    <li>Neurociencias y Ciencia de Datos</li>\r
    <li>Normas y Regulaciones para la Utilización de Datos</li>\r
  </ul>\r
</div>\r
<!-- Slider indicators -->\r
<div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>\r
</div>`,description:`Esta carrera,  te llevará a dominar el análisis y procesamiento de datos para que puedas liderar los nuevos retos tecnocientíficos que el mundo necesita. <br>\r
\r
La ciencia de datos, es una combinación de varias disciplinas que se centran en el análisis de datos y en la búsqueda de soluciones a través de técnicas de Inteligencia Artificial que aportan soluciones a todos los niveles.<br>\r
\r
El científico de datos tiene un perfil profesional que requiere, entre otras, de competencias en matemáticas, estadística y programación. Podrás:<br>\r
\r
- Diseñar y aplicar metodologías que permitan el análisis estratégico y estadístico de los datos<br>\r
- Utilizar, programar y parametrizar herramientas informáticas de estadística avanzada para el análisis de datos<br>\r
- Manipular, explorar, limpiar y preparar cualquier fuente de datos antes de su procesamiento.<br>\r
-Identificar y analizar los diferentes sistemas de información de empresa, a partir de: métodos y técnicas de análisis de datos, la formulación de preguntas e hipótesis y la obtención de conclusiones útiles para el negocio.<br>`,resolucion_ministerial:"RESOL-2024-507-APN-SE#MCH",carga_horaria:"3020 hrs",perfil_egresado:"El egresado de esta Licenciatura en Ciencia de Datos será un profesional capaz de: <li>Colaborar en proyectos de relevamiento de problemas del mundo real utilizando aplicaciones de Ciencias de Datos.</li> <li>Integrar equipos para analizar procesos funcionales de organizaciones y establecer proyectos de diseño aplicados a la Ciencia de Datos.</li> <li>Asistir en estudios técnico-económicos de factibilidad relacionados con el almacenamiento y uso de datos.</li> <li>Desempeñar tareas de asesoramiento en metodologías y métricas de procesamiento de datos orientadas a la seguridad de los macro datos.</li> <li>Colaborar en auditorías de sistemas de procesamiento de datos.</li> <li>Participar en investigaciones científicas básicas y aplicadas en temas de Ciencias de Datos.</li>"},{codcar:96,tipcar:"Pregrado",nombre:"Tecnicatura Universitaria en Gestión de Calidad",modo:[1,7],duracion:"2 Años",codare:12,porque:`<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 1° Año </h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] [&>li]:my-1" style="list-style-type: disc">\r
    <li>FILOSOFIA</li>\r
    <li>ANALISIS MATEMAT.</li>\r
    <li>ANÁLISIS DE COSTOS</li>\r
    <li>ADMIN.ESTRATEGICA</li>\r
    <li>INTROD.A LA CALIDAD</li>\r
    <li>BUEN.PRAC.MANUFACTUR</li>\r
    <li>TEOLOGIA</li>\r
    <li>BUEN.PRACTIC AGRICOL</li>\r
    <li>SIST.GEST.AMBIENTAL</li>\r
    <li>COST.REL.CALIDAD</li>\r
    <li>ESTADÍSTICA I (DESCR)</li>\r
    <li>SIST.GEST.SALU Y SEG</li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 2° Año </h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] [&>li]:my-1" style="list-style-type: disc">\r
    <li>INFORMATICA</li>\r
    <li>ESTADÍSTICA II (INFE)</li>\r
    <li>AUDITORIA OPERATIVA</li>\r
    <li>HERRAM . CALIDAD I</li>\r
    <li>SIST.GEST.CALIDAD</li>\r
    <li>DERECHO CONSUMIDOR</li>\r
    <li>INGLES</li>\r
    <li>REQUIS.LABOR.ENSAY Y</li>\r
    <li>HERRAM. CALIDAD II</li>\r
    <li>NORMAS IRAM SECT I</li>\r
    <li>SATISFACC. CLIENTES</li>\r
    <li>SIST.INTEGRAD.GESTIO</li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 3° Año </h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] [&>li]:my-1" style="list-style-type: disc">\r
    <li>TRABAJO FINAL INTEG.</li>\r
    <li>SEMINARIO TRAB.FINAL</li>\r
    <li>RESP.SOC. EMPRESARIA</li>\r
    <li>NORMAS IRAM SECT II</li>\r
    <li>NORMAS IRAN SECT III</li>\r
    <li>MEJORA CONTINUA</li>\r
    <li>HACCP</li>\r
  </ul>\r
</div>`,description:"La carrera de Técnico Universitario en Gestión de Calidad pretende formar profesionales competentes y actualizados que puedan insertarse en el mercado laboral tanto del ámbito público como privado. <br>Nuestros egresados tendrán el dominio de los conocimientos pragmáticos para actuar con eficiencia y versatilidad en: la implementación de Sistemas de Gestión de Calidad, Sistemas de Gestión Ambiental, Sistemas de Gestión de Salud y Seguridad Ocupacional, Sistema Integrado de Gestión, Buenas Prácticas de Manufactura y Buenas Prácticas Agrícolas.",resolucion_ministerial:"319",carga_horaria:"1685 hrs",perfil_egresado:"El Técnico Universitario en Gestión de Calidad es un profesional con conocimientos y habilidades técnicas y administrativas para asistir y colaborar en la gestión de los sistemas de gestión de calidad con una visión integral y estratégica. Será capaz de: <li>Asistir en el diseño, planificación y puesta en marcha de los sistemas de gestión de calidad de acuerdo a los objetivos y políticas formuladas en las organizaciones.</li> <li>Implementar y ejecutar los procesos de calidad de acuerdo a las normas internas y a las establecidas por los organismos competentes para el proceso de certificación y mantenimiento.</li> <li>Sistematizar las operaciones para hacer más eficientes los procesos.</li> <li>Controlar el cumplimiento de los requisitos normativos y operativos establecidos en la información documentada.</li> <li>Asistir en la realización de auditorías internas.</li> <li>Intervenir en estudios de impacto de la gestión de calidad en el entorno específico de las organizaciones.</li> <li>Colaborar en la capacitación del personal para que se adapten a las nuevas exigencias tecnológicas y desempeñen sus funciones con mayor motivación y compromisos para lograr mejoras en los procesos.</li> <li>Asistir y colaborar en las tareas inherentes a su cargo con todos los niveles de la organización.</li>"},{codcar:113,tipcar:"Grado",nombre:"Lic. en Gestión Educativa",modo:[1,7],duracion:"2 Años",codare:20,porque:`<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl">1° Año</h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] list-disc my-1" style="list-style-type: disc">\r
   <li>Pensamiento Científico</li>\r
  <li>Sujeto y Sociedad</li>\r
  <li>Mediación y Conflicto</li>\r
  <li>Humanismo y Doctrina Social</li>\r
  <li>Metodología de la Investigación I</li>\r
  <li>Diseño y Gestión Curricular</li>\r
  <li>Relaciones Humanas e Institucionales</li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl">2° Año</h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] list-disc my-1" style="list-style-type: disc">\r
    <li>Seminario de Tesis I</li>\r
  <li>Gestión de TICs</li>\r
  <li>Planeamiento Estratégico</li>\r
  <li>Modelos de Organización y Administración</li>\r
  <li>Ética y Deontología Profesional</li>\r
  <li>Política Educativa</li>\r
  <li>Evaluación y Calidad Educativa</li>\r
  <li>Gestión de Recursos Humanos (Sem. Opt.)</li>\r
  <li>Seminario de Tesis II</li>\r
  <li>Economía de la Educación</li>\r
  </ul>\r
</div>\r
<!-- Slider indicators -->\r
<div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">\r
  <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>\r
  <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>\r
</div>`,description:"<b><li>Profesores con 3, 4 o más Años de formación y 1800 o más hs. reloj</b></li><br>La licenciatura en <b>Gestión Educativa</b> te capacita para desempeñar tareas de gestión y asesoría en instituciones educativas de todos los niveles.  <br>El profesional podrá ocupar cargos directivos en establecimientos educativos de todos los niveles públicos o privados. También podrá ejercer la docencia en materias relacionadas con la gestión educativa así como elaborar proyectos educativos en organizaciones públicas o empresas privadas. ",resolucion_ministerial:"1082/11",carga_horaria:"1200 hrs",perfil_egresado:"El egresado de esta carrera estará capacitado para: <li>Conducir, coordinar, orientar y participar en equipos de trabajos educativos.</li> <li>Organizar y optimizar los recursos disponibles a favor de la gestión administrativa y académica de instituciones educativas privadas o públicas, de educación formal o no formal.</li> <li>Diseñar, implementar y evaluar propuestas curriculares para los ámbitos de educación formal y no formal.</li> <li>Investigar, administrar y gestionar acciones educativas en torno a información, medios y recursos.</li> <li>Asesorar en el diseño e implementación de proyectos institucionales de atención y contención de la diversidad social y cultural.</li> <li>Intervenir estratégicamente en la resolución de situaciones problemáticas.</li>"},{codcar:133,tipcar:"Grado",nombre:"Lic. en Administración Agropecuaria",modo:[1,7],duracion:"4 Años",codare:12,porque:`<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 1° Año </h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc">\r
    <li>Producción Agropecuaria I</li>\r
    <li>Filosofía</li>\r
    <li>Matemática</li>\r
    <li>Economía I</li>\r
    <li>Contabilidad I</li>\r
    <li>Teología</li>\r
    <li>Producción Agropecuaria II</li>\r
    <li>Economía II</li>\r
    <li>Administración I</li>\r
    <li>Contabilidad II</li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 2° Año </h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-base" style="list-style-type: disc">\r
    <li>Doctrina Social de la Iglesia</li>\r
    <li>Tecnología I</li>\r
    <li>Comercialización I</li>\r
    <li>Estadística Aplicada</li>\r
    <li>Administración II</li>\r
    <li>Agroindustrias</li>\r
    <li>Tecnología II</li>\r
    <li>Ética Profesional</li>\r
    <li>Trabajo Final de Integración</li>\r
    <li>Comercialización II</li>\r
    <li>Administración Financiera I</li>\r
    <li>Práctica Profesional</li>\r
    <li>Derecho I</li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 3° Año </h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc">\r
    <li> Producción Agropecuaria III</li>\r
    <li> Sistemas de Costos Agropecuarios</li>\r
    <li> Economía III</li>\r
    <li> Métodos y Modelos Decisionales</li>\r
    <li> Derecho II</li>\r
    <li> Sanidad y Calidad Vegetal</li>\r
    <li> Sanidad y Calidad Animal</li>\r
    <li> Metodología de la Investigación</li>\r
    <li> Administración Financiera II</li>\r
    <li> Gestión de los Recursos Humanos</li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 4° Año </h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc">\r
    <li> Recursos forestales</li>\r
    <li> Investigación de mercados</li>\r
    <li> Agronegocios I</li>\r
    <li> Sistemas de información gerencial</li>\r
    <li> Teoría y técnica impositiva</li>\r
    <li> Tesina de licenciatura</li>\r
    <li> Ecología y medio ambiente</li>\r
    <li> Formulación y evaluación de proyectos</li>\r
    <li> Control de gestión</li>\r
    <li> Agronegocios II </li>\r
  </ul>\r
</div>`,description:"La licenciatura forma profesionales capacitados en la planificación, gestión y análisis de empresas del <b>sector agropecuario y agroindustrial</b>.  <br>El profesional cuenta con las herramientas y habilidades necesarias para planear y gestionar proyectos agrícolas, pecuarios, ganaderos, forestales y ambientales. <br>El egresado puede desarrollar actividades en el área agropecuaria y está habilitado para brindar asesoramiento a productores y a establecimientos agrícolas- ganaderos; además puede realizar investigaciones científicas que contribuyan al sector.",resolucion_ministerial:"2412/16",carga_horaria:"3075 hrs",perfil_egresado:"El licenciado en Administración Agropecuaria será un profesional con conocimientos y capacidades gerenciales para la toma de decisiones relativas a la producción y comercialización de productos agropecuarios en los mercados nacionales e internacionales. También podrá desarrollar negocios agro-empresariales con una visión estratégica que le permita prever los cambios del entorno, asumir riesgos razonables y aprovechar las oportunidades. <li>Será capaz de:</li> <li>Planear, organizar y dirigir empresas agropecuarias y agroindustriales.</li> <li>Realizar estudios para desarrollar mercados agropecuarios nacionales e internacionales.</li> <li>Desarrollar estrategias de comercialización en empresas del mercado vinculadas con las ramas de insumos agropecuarios y productos diferenciados.</li> <li>Formular y evaluar proyectos de inversión, de agronegocios y de diversificación productiva de la empresa agropecuaria.</li> <li>Desarrollar actividades de extensión relacionadas con la gestión rural.</li> <li>Realizar investigaciones científicas aplicadas al área administración agropecuaria.</li> <li>Brindar asesoramiento integral a productores y establecimientos agrícolas–ganaderos.</li>"},{codcar:138,tipcar:"Grado",nombre:"Lic. en Higiene y Seguridad en el Trabajo",modo:[1,7],duracion:"4 Años",codare:14,porque:`<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 1° Año </h3>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] [&>li]:my-1" style="list-style-type: disc">\r
    <li>Psicología Laboral</li>\r
    <li>Sociología y Ética</li>\r
    <li>Álgebra</li>\r
    <li>Organización Industrial</li>\r
    <li>Medicina Laboral, Biomecánica y Fisiología del Trabajo</li>\r
    <li>Seguridad Industrial I (Organización y Prevención- Normas Auditoria)</li>\r
    <li>Relaciones Humanas I</li>\r
    <li>Toxicología Laboral y Control de Contaminantes</li>\r
    <li>Tratamientos de Residuos I</li>\r
    <li>Física I</li>\r
    <li>Seguridad Industrial II</li>\r
    <li>Seguridad Industrial III</li>\r
    <li>Relaciones Humanas II</li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 2° Año </h3>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-xs [&>li]:my-1" style="list-style-type: disc">\r
    <li>Estudio del Trabajo</li>\r
    <li>Ambiente del Trabajo I (Iluminación y Color - Colores de Seguridad)</li>\r
    <li>Química I</li>\r
    <li>Estadísticas y Costos Aplicados a la Higiene y Seguridad</li>\r
    <li>Higiene Industrial (Ruido y Vibraciones)</li>\r
    <li>Ergonomía</li>\r
    <li>Metodología de la Investigación</li>\r
    <li>Trabajo de Campo Integrador</li>\r
    <li>Ambiente del Trabajo II (Ventilación - Control de la Contaminación y Carga Térmica)</li>\r
    <li>Selección y Capacitación</li>\r
    <li>Derecho Laboral</li>\r
    <li>Seguridad Industrial IV (Incendio y Explosión - Evacuación)</li>\r
    <li>Seguridad Industrial V (Protección Personal - Protección Radiológica)</li>\r
    <li>Análisis de Riesgos</li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 3° Año </h3>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] [&>li]:my-1" style="list-style-type: disc">\r
    <li>Filosofía</li>\r
    <li>Tratamientos de Residuos II</li>\r
    <li>Ambiente del Trabajo III</li>\r
    <li>Inglés I</li>\r
    <li>Sistemas de Representación y Fundamentos de Informática I</li>\r
    <li>Física II</li>\r
    <li>Gestión Ambiental I</li>\r
    <li>Análisis Matemático</li>\r
    <li>Química II</li>\r
    <li>Sistemas de Representación y Fundamentos de Informática II</li>\r
    <li>Administración Estratégica</li>\r
    <li>Recursos Humanos</li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 4° Año </h3>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] [&>li]:my-1" style="list-style-type: disc">\r
    <li>Teología</li>\r
    <li>Gestión Ambiental II</li>\r
    <li>Inglés II</li>\r
    <li>Termodinámica</li>\r
    <li>Tecnología de Materiales</li>\r
    <li>Seguridad en el Manejo</li>\r
    <li>Doctrina Social</li>\r
    <li>Didáctica de la Educación Laboral</li>\r
    <li>Tesis</li>\r
    <li>Incendios</li>\r
    <li>Introducción a la Dirección Financiera</li>\r
    <li>Formulación y Evaluación de Proyectos</li>\r
    <li>Máquinas y Herramientas</li>\r
  </ul>\r
</div>`,description:"La <b>licenciatura</b> te capacita para el control de riesgos en el trabajo así como en la prevención de accidentes y enfermedades laborales. <br>El profesional cuenta con los conocimientos necesarios para la reducción de emergencias e incidencias laborales y para el mejoramiento de las condiciones de trabajo para promover el bienestar de los empleados.   <br>El graduado está habilitado para desempeñarse dentro de una empresa, organización, institución pública o privada.",resolucion_ministerial:"534/2022",carga_horaria:"2680 hrs",perfil_egresado:"El egresado de esta carrera estará formado integralmente para: <li>Diseñar, implementar y liderar Programas de Gestión para la Prevención y Protección de los Riesgos derivados de la actividad del ser humano en ámbitos laborales, focalizados en la integridad de la persona, y en el cuidado de los recursos materiales y ambientales que le rodean.</li> <li>Contribuir mediante modernas herramientas de gestión, a la mejora del desempeño y comportamiento seguro de los componentes de una organización.</li> <li>Emitir juicios de valor fundados, por medio de Certificación Profesional, en aspectos inherentes a la Higiene y Seguridad en el Trabajo.</li> <li>Analizar, evaluar y controlar situaciones en las que existan contaminantes químicos, biológicos, físicos y ergonómicos en ambientes laborales.</li> <li>Diseñar e implementar programas de capacitación a todos los estamentos de una organización, en materia de concientización para la prevención y protección de riesgos laborales.</li> <li>Caracterizar puestos de trabajo en función de los riesgos laborales.</li> <li>Elaborar normas y especificaciones técnicas, referidas a Higiene y Seguridad en el Trabajo, respecto de la metodología de trabajo y para la utilización y comercio de máquinas, herramientas, equipos e instrumentos de empleo en la industria de todo tipo.</li> <li>Alcanzar la capacidad de anticiparse al hecho derivado del ambiente laboral y competente para prevenir, reducir, aislar y proteger la vida humana.</li>"},{codcar:161,tipcar:"Pregrado",nombre:"Tecnicatura en Gestión de Bancos, Empresas Financieras y de Seguros",modo:[7],duracion:"3 Años",codare:12,porque:`<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl">1° Año</h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc">\r
    <li>Matemática</li>\r
    <li>Economía</li>\r
    <li>Administración de Organizaciones</li>\r
    <li>Instituciones de Derecho Civil y Comercial</li>\r
    <li>Filosofía</li>\r
    <li>Sistema Financiero</li>\r
    <li>Marco Legal de los Seguros</li>\r
    <li>Matemática Financiera</li>\r
    <li>Contabilidad Aplicada</li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl">2° Año</h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-base" style="list-style-type: disc">\r
    <li>Estadística</li>\r
    <li>Teología</li>\r
    <li>Seguros Patrimoniales I (Seguros de Cosas)</li>\r
    <li>Análisis de Estados Contables</li>\r
    <li>Productos y Servicios del Sistema Financiero</li>\r
    <li>Administración Financiera</li>\r
    <li>Calidad y Experiencia en Clientes</li>\r
    <li>Seguros Patrimoniales II (Seguros de Responsabilidad Civil)</li>\r
    <li>Estrategias de Marketing</li>\r
    <li>Doctrina Social de la Iglesia</li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl">3° Año</h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc">\r
    <li>Seguros sobre Personas</li>\r
    <li>Mercado de Capitales</li>\r
    <li>Venta Consultiva</li>\r
    <li>Gestión y Control Financiero</li>\r
    <li>Ética Profesional</li>\r
    <li>Operaciones Financieras</li>\r
    <li>Transformación Digital y Omnicanalidad</li>\r
    <li>Dirección Estratégica</li>\r
    <li>Inglés Técnico</li>\r
    <li>Práctica Profesional (1)</li>\r
  </ul>\r
</div>`,description:"La carrera te capacita para operar los procesos administrativos para una gestión integral de las transacciones de entidades financieras y de seguros.<br> Como profesional egresado tendrás los conocimientos necesarios para participar en la formulación, coordinación, ejecución de planes y proyectos vinculados al área. Podrás intervenir en la comercialización de productos y servicios financieros y de seguros.<br> Estarás habilitado para asistir a los clientes sobre las distintas transacciones y productos o servicios que ofrecen las entidades de ambos sectores. Como también colaborar en el diagnóstico de situaciones problemáticas y propuestas de soluciones en las distintas áreas funcionales de los bancos, entidades financieras y de seguros.",resolucion_ministerial:"1618/23",carga_horaria:"2195 hrs",perfil_egresado:"El egresado de esta tecnicatura será capaz de: <li>Operar los procesos administrativos para una gestión integral de las transacciones de entidades financieras y de seguros.</li> <li>Participar en la formulación, coordinación y ejecución de planes y proyectos generales en el ámbito financiero y del negocio del seguro.</li> <li>Intervenir en la comercialización de productos y servicios financieros y de seguros.</li> <li>Asesorar a partir de las necesidades del cliente, sobre las distintas transacciones y productos o servicios que ofrecen las entidades de ambos sectores.</li> <li>Asistir a todos los niveles de las organizaciones en el relevamiento, procesamiento y análisis de información para el planeamiento, dirección, control y la toma de decisiones, utilizando las herramientas de la transformación digital.</li> <li>Colaborar en el diagnóstico de situaciones problemáticas y propuestas de soluciones en las distintas áreas funcionales de los bancos, entidades financieras y de seguros.</li> <li>Seleccionar tecnologías que sirvan para mejorar y optimizar la eficiencia de los sistemas y procedimientos administrativos.</li>"},{codcar:185,tipcar:"Grado",nombre:"Lic. en Gestión Eficiente de la Energía",modo:[7],duracion:"4 Años",codare:15,porque:`<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 1° Año </h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc;">\r
    <li>Energía y Sostenibilidad</li>\r
        <li>Ingeniería Energética</li>\r
        <li>Filosofía</li>\r
        <li>Fundamentos de Física</li>\r
        <li>Introducción a la Matemática</li>\r
        <li>Procesos de Cambio Social</li>\r
        <li>Introducción a la Energía</li>\r
        <li>Doctrina Social de la Iglesia</li>\r
        <li>Análisis de Ciclo de Vida (Materiales y Energía)</li>\r
        <li>Teología</li>\r
        <li>Práctica de Integración: Gestión Energética en Distintos Establecimientos</li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
     <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 2° Año </h1>\r
      <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc;">\r
       <li>Introducción a los Mecanismos de Conservación y Uso Eficiente de la Energía</li>\r
        <li>Enfoques y Herramientas de Modelación Energética y de Materiales</li>\r
        <li>Tecnologías de Eficiencia Energética</li>\r
        <li>Energías Renovables</li>\r
        <li>Introducción a los Métodos de Diseño, Cálculo y Evaluación de Eficiencia Energética</li>\r
        <li>Eficiencia Energética en Sistemas de Transporte</li>\r
        <li>Eficiencia Energética y Optimización de Procesos Productivos</li>\r
        <li>Eficiencia Energética en Edificios</li>\r
        <li>Eficiencia Energética en el Sector Agropecuario</li>\r
        <li>Estrategias y Herramientas de Comunicación</li>\r
        <li>Práctica de Integración: Planes de Eficiencia Energética para Distintos Tipos de Establecimientos e Instituciones</li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
      <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 3° Año </h1>\r
      <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc;">\r
        <li>Legislación Energética</li>\r
        <li>Economía y Mercados Energéticos</li>\r
        <li>Formulación de Proyectos</li>\r
        <li>Seminario de Diseño de Edificios Sustentables</li>\r
        <li>Seminario de Cálculo y Evaluación de Eficiencia Energética</li>\r
        <li>Estándares y Sistemas de Certificación</li>\r
        <li>Gestión de Cadenas de Valor</li>\r
        <li>Diseño de Sistemas Eficientes</li>\r
        <li>Integración de la Eficiencia Energética en el Diseño Urbanístico</li>\r
        <li>Evaluación Económica, Ambiental y Social de Proyectos</li>\r
        <li>Ética</li>\r
        <li>Práctica de Integración: Asistencia Técnica a Municipios Provinciales</li>\r
      </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
      <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 4° Año </h1>\r
      <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc;">\r
        <li>Planificación Urbana Sustentable</li>\r
        <li>Gestión de Proyectos</li>\r
        <li>Integración de Eficiencia Energética y Energía Renovable</li>\r
        <li>Metodología de la Investigación</li>\r
        <li>Prácticas de Divulgación Social</li>\r
        <li>Práctica de Integración: Proyectos en Parques Industriales, Instituciones Educativas y Zonas Turísticas Locales</li>\r
        <li>Práctica Pre-Profesional Supervisada</li>\r
        <li>Trabajo Final de Graduación</li>\r
      </ul>\r
</div>\r
<!-- Slider indicators -->\r
<div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>\r
</div>`,resolucion_ministerial:"566/21",carga_horaria:"2835 hrs",perfil_egresado:"El licenciado en Gestión Eficiente de la Energía será un profesional dotado de habilidades técnicas, de gestión y creatividad, con capacidad para brindar propuestas y soluciones innovadoras de eficiencia energética en diferentes sectores y sistemas socio-económicos y preparado para asesorar y colaborar en forma transversal con especialistas de distintas disciplinas y diferentes actores sociales. <br> Será capaz de: <li>Desarrollar e implementar estrategias, políticas, procesos organizativos, programas, proyectos y soluciones para el uso eficiente de la energía en los diferentes sectores y sistemas socio-económicos.</li> <li>Formular y gestionar proyectos y planes de eficiencia energética para edificios, sistemas de transporte y sistemas productivos.</li> <li>Asesorar a instituciones públicas y privadas en el diseño, implementación y evaluación de estrategias"},{codcar:186,tipcar:"Grado",nombre:"Lic. en Entrenamiento Deportivo (Ciclo de Complementación)",modo:[1,7],duracion:"2 ½ Años",codare:17,porque:`<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl">1° Año</h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] list-disc my-1" style="list-style-type: disc">\r
   <li>Metodología de la Investigación</li>\r
  <li>Suplementación Deportiva</li>\r
  <li>Entrenamiento Deportivo General y Específico</li>\r
  <li>Evaluaciones Deportivas</li>\r
  <li>Ética Profesional</li>\r
  <li>Nutrición Aplicada al Entrenamiento Deportivo</li>\r
  <li>Informática Aplicada al Entrenamiento Deportivo</li>\r
  <li>Organización, Planificación y Control del Entrenamiento Deportivo</li>\r
  <li>Endocrinología Aplicada al Entrenamiento Deportivo</li>\r
  <li>Fisiología y Bioquímica Aplicada a la Nutrición y el Deporte</li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl">2° Año</h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] list-disc my-1" style="list-style-type: disc">\r
    <li>Psicología Deportiva</li>\r
  <li>Neurociencias y Entrenamiento Deportivo</li>\r
  <li>Trabajo Final Integrador</li>\r
  <li>Legislación Deportiva</li>\r
  </ul>\r
</div>\r
<!-- Slider indicators -->\r
<div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">\r
  <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>\r
  <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>\r
</div>`,description:"La licenciatura forma profesionales capacitados en el <b>entrenamiento deportivo</b>, brinda herramientas y conocimientos para contribuir al desarrollo del deporte y mejorar la calidad de vida de las personas. <br>El profesional cuenta con las habilidades para desempeñarse laboralmente en todos los niveles educativos, también en gimnasios, clubes e instituciones vinculadas con el área.También puede gestionar y conducir proyectos relacionados al entrenamiento y actividad física.",resolucion_ministerial:"548/2020",carga_horaria:"1305 hrs",perfil_egresado:"El graduado de la carrera puede ejercer su profesión en distintos ámbitos, desarrollando los siguientes conocimientos: <li>Participar en la programación, diseño, gestión y evaluación de proyectos de investigación de carácter interdisciplinario en donde se integre el entrenamiento deportivo.</li> <li>Asesorar e intervenir en la programación y gestión de planes y proyectos institucionales relacionados con el entrenamiento deportivo en ámbitos formales y no formales.</li> <li>Proyectar, diseñar, evaluar y ejecutar programas de capacitación que integren el entrenamiento deportivo.</li> <li>Orientar respecto de las adecuaciones metodológicas acordes con las características morfofuncionales de los individuos y grupos.</li>"},{codcar:187,tipcar:"Grado",nombre:"Lic. en Lenguajes Expresivos (Ciclo de Complementación)",modo:[1,7],duracion:"2 ½ Años",codare:17,porque:`<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl">1° Semestre</h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] list-disc my-1" style="list-style-type: disc">\r
    <li>Cuerpo, Educación y Sociedad</li>\r
    <li>Investigación Socio Antropológica</li>\r
    <li>Pedagogía del Juego</li>\r
    <li>Metodología de la Investigación</li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl">2° Semestre</h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] list-disc my-1" style="list-style-type: disc">\r
    <li>Arte Expresión Corporal Danza</li>\r
    <li>Arte, Comunicación y Expresión Literaria</li>\r
    <li>Arte y Expresión Musical</li>\r
    <li>Arte y Expresión Teatral</li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl">3° Semestre</h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] list-disc my-1" style="list-style-type: disc">\r
    <li>La Creatividad en el Aprendizaje</li>\r
    <li>Juegoteca y Espacios de Infancias</li>\r
    <li>Trabajo Final Integrador</li>\r
  </ul>\r
</div>\r
<!-- Slider indicators -->\r
<div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>\r
</div>`,description:"La licenciatura brinda a los docentes herramientas para construir espacios tanto en aulas como en instituciones, que promuevan el desarrollo de estrategias de intervención didáctica sustentadas en marcos artísticos y comunicacionales. <br>Tiene como objetivo lograr que el sujeto de aprendizaje se constituya en un verdadero interlocutor con su producción. Es decir un sujeto que desde la mirada dialógica sea capaz de construir y reconstruir sentidos.<br>Como graduados están habilitados para la dirección y gestión de proyectos de investigación referidos al <b>lenguaje expresivo</b>. Podrán desempeñarse en equipos interdisciplinarios en establecimientos educativos, organizaciones e instituciones no formales. ",resolucion_ministerial:"3437/2021",carga_horaria:"1305 hrs",perfil_egresado:"El egresado de la Licenciatura en Lenguajes Expresivos de la UCASAL es un profesional capacitado para explorar, analizar y aplicar diversas formas de expresión artística y comunicacional, como el teatro, la danza, la música, y las artes visuales. Este ciclo de complementación curricular está diseñado para aquellos que ya tienen una base en disciplinas afines, permitiéndoles profundizar y expandir su comprensión de los lenguajes expresivos en contextos educativos, terapéuticos y culturales. <br> ¿Qué hace un Licenciado en Lenguajes Expresivos? <li>Utiliza diversas formas artísticas como herramientas de expresión y comunicación, tanto en la educación como en el ámbito terapéutico y social.</li> <li>Facilita procesos de desarrollo personal y colectivo a través del arte, promoviendo el bienestar emocional, físico y social.</li> <li>Diseña y desarrolla proyectos educativos, culturales o terapéuticos, empleando lenguajes artísticos como la música, la danza, el teatro o las artes plásticas.</li> <li>Interviene en espacios culturales y comunitarios, promoviendo la inclusión y el desarrollo a través de actividades artísticas y expresivas.</li>"},{codcar:194,tipcar:"Grado",nombre:"Lic. en Educación Física (Ciclo de Complementación)",modo:[7],duracion:"2 ½ Años",codare:17,description:"Podrás asesorar en la enseñanza de temas relacionados con la Educación Física y el Deporte; diseñar desarrollar y evaluar planes, programas, proyectos y eventos relativos a la actividad física; gestionar y asesorar clubes, centros, organizaciones e instituciones dedicadas a la Actividad Física, el Deporte y la Recreación; integrar, proyectos  institucionales y equipos interdisciplinarios.",porque:`<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
    <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl">PRIMER AÑO</h1>\r
    <ul class="mx-20 sm:mx-32 lg:mx-48 text-sm lg:text-[1em] list-disc my-1" style="list-style-type: disc">\r
       <li>Humanismo y Doctrina Social</li>\r
  <li>Planeamiento y Gestión de Políticas en Educación Física y Deport</li>\r
  <li>Sistema Educativo</li>\r
  <li>Metodología de la Investigación</li>\r
  <li>Fisiología de la Actividad Física y Entrenamiento Deportivo</li>\r
  <li>Gimnasia y Deportes para Personas con Necesidades Especiales</li>\r
  <li>Corrientes Didácticas Contemporáneas</li>\r
  <li>Proyecto de Tesis</li>\r
  <li>Organización, Planificación y Control del Deporte y la Actividad</li>\r
    </ul>\r
  </div>\r
  <div class="hidden duration-700 ease-in-out" data-carousel-item>\r
    <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl">SEGUNDO AÑO</h1>\r
    <ul class="mx-20 sm:mx-32 lg:mx-48 text-sm lg:text-[1em] list-disc my-1" style="list-style-type: disc">\r
       <li>Nutrición Deportiva</li>\r
  <li>Descripción, Estadística y Metrología Deportiva</li>\r
  <li>Análisis de la Estrategia de los Deportes</li>\r
  <li>Tesis (Trabajo Final)</li>\r
    </ul>\r
  </div>\r
  <!-- Slider indicators -->\r
  <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>\r
  </div>`,resolucion_ministerial:"2345/2013",carga_horaria:"1280 hrs",perfil_egresado:"El graduado de la carrera puede ejercer su profesión en distintos ámbitos, desarrollando los siguientes conocimientos: <li>Programar, diseñar y ejecutar la dirección y gestión de proyectos de investigación ligados a la Educación Física.</li> <li>Participar en la programación, diseño, gestión y evaluación de proyectos de investigación de carácter interdisciplinario.</li> <li>Asesorar e intervenir en la programación y gestión de planes y proyectos institucionales relacionados con la educación física y el deporte en ámbitos formales y no formales.</li> <li>Proyectar, diseñar, ejecutar la gestión y evaluar programas de capacitación ligados a la educación física y el deporte.</li>"},{codcar:196,tipcar:"Grado",nombre:"Lic. en Seguridad (Ciclo de Complementación)",modo:[7],duracion:"2 Años",codare:13,description:`<li class="texto-seccion-2"> <span class="lista-carrera">Descripción de la carrera:</span> Un Lic. en Seguridad trabaja ideando planes de acción en seguridad pública y privada. Su objetivo es prevenir y evitar situaciones o acciones intencionales que puedan ocasionar riesgos para la vida, las cosas, los bienes o las personas.\r
                                <span><br></span>\r
<br>\r
El Lic. en Seguridad actúa antes, durante y después de un momento de crisis. Su vocación se vincula de forma directa a la mejora en la seguridad de los espacios, en un contexto de garantía de derechos y democracia.\r
\r
                            </li>\r
                            <br>\r
                            <li class="texto-seccion-2"> <span class="lista-carrera">Salida Laboral:</span> El Lic. en Seguridad estará preparado para ocupar cargos jerárquicos dentro de las fuerzas, también podrá desenvolverse en ámbitos públicos como privados en todo lo concerniente  a la seguridad.\r
                            </li>`,porque:`<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 1° Año </h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc;">\r
    <li> Doctrina Social de la Iglesia </li>\r
                    <li> Seminario I: Legislación sobre Seguridad </li>\r
                    <li> Introducción a la Seguridad </li>\r
                    <li> Derecho Constitucional </li>\r
                    <li> Derecho Procesal Civil, Comercial y Laboral </li>\r
                    <li> Psicología Criminal </li>\r
                    <li> Seminario II: Ética Profesional </li>\r
                    <li> Sociología Criminal </li>\r
                    <li> Seguridad Privada </li>\r
                    <li> Medicina del Trabajo </li>\r
                    <li> Criminalística </li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
     <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 2° Año </h1>\r
      <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc;">\r
       <li>Seminario III: Seguridad Vial </li>\r
                    <li>Estadística Aplicada </li>\r
                    <li>Criminología </li>\r
                    <li>Introducción a la Ciencia Política </li>\r
                    <li>Seguridad Pública </li>\r
                    <li>Relaciones Interpersonales e Institucionales </li>\r
                    <li>Trabajo Final Integrador </li>\r
                    <li>Seminario IV: Taller de Seguridad Informática </li>\r
                    <li>Economía </li>\r
                    <li>Planeamiento y Organización en Seguridad </li>\r
                    <li>Seguridad Bancaria </li>\r
                    <li>Seguridad Industrial </li>\r
  </ul>\r
</div>\r
<!-- Slider indicators -->\r
<div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>\r
</div>`,resolucion_ministerial:"1414/2013",carga_horaria:"1400 hrs",perfil_egresado:"El egresado de esta carrera estará capacitado como profesional para: <li>Realizar investigaciones y asesorar acerca de situaciones y acciones intencionales que puedan ocasionar riesgos para la vida, los bienes, las personas y las instituciones (con excepción de los siniestros).</li> <li>Planificar, implementar y evaluar sistemas de control destinados a evitar estas situaciones.</li> <li>Investigar situaciones y acciones intencionales que puedan ocasionar accidentes o enfermedades profesionales y proponer medidas correctivas.</li> <li>Controlar y evaluar los equipos de protección personal y colectiva destinados a la prevención de situaciones y acciones intencionales que puedan afectar la seguridad de edificios y vehículos (con excepción de los siniestros).</li> <li>Programar, organizar, evaluar y controlar las medidas de seguridad destinadas a evitar situaciones y acciones riesgosas en el circuito administrativo, en las instituciones bancarias y vehículos transportadores de bienes.</li> <li>Programar, organizar y controlar las medidas de seguridad destinadas a la prevención de acciones intencionales que puedan ocasionar riesgos en un contexto de emergencia y catástrofe.</li> <li>Asesorar en la elaboración e implementación de normas y políticas destinadas a la prevención de estas acciones.</li> <li>Participar en la implementación de programas de capacitación destinados a la prevención.</li> <li>Realizar arbitrajes y peritajes relativos a la determinación de áreas y factores de riesgo y medidas de seguridad adoptadas a nivel individual e institucional, cualquiera sea su ámbito (con excepción de los siniestros).</li>"},{codcar:214,tipcar:"Grado",nombre:"Lic. en Comercio Internacional",modo:[1,7],duracion:"4 Años",codare:12,porque:`<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 1° Año </h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc">\r
    <li>Historia Política y Económica Universal</li>\r
    <li>Inglés I</li>\r
    <li>Microeconomía</li>\r
    <li>Introducción al Comercio Exterior</li>\r
    <li>Análisis Cuantitativo</li>\r
    <li>Fundamentos de Marketing</li>\r
    <li>Geografía Económica</li>\r
    <li>Inglés II</li>\r
    <li>Informática</li>\r
    <li>Macroeconomía</li>\r
    <li>Introducción a la Administración</li>\r
    <li>Logística y Transporte I</li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 2° Año </h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-xs lg:text-base" style="list-style-type: disc">\r
    <li>Filosofía</li>\r
    <li>Inglés de Comercio Exterior I</li>\r
    <li>Importación</li>\r
    <li>Estadística</li>\r
    <li>Gestión de Calidad</li>\r
    <li>Sistemas de Información Contable</li>\r
    <li>Introducción al Derecho</li>\r
    <li>Teología</li>\r
    <li>Inglés de Comercio Exterior II</li>\r
    <li>Matemática Financiera</li>\r
    <li>Investigación de Mercados Internacionales</li>\r
    <li>Exportación</li>\r
    <li>Logística y Transporte II</li>\r
    <li>Aspectos Legales de los Negocios</li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 3° Año </h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-xs lg:text-base" style="list-style-type: disc">\r
    <li>Metodología de la Investigación</li>\r
    <li>Portugués I</li>\r
    <li>Costos y Presupuestos</li>\r
    <li>Economía Internacional</li>\r
    <li>Clasificación Arancelaria y Valoración Aduanera</li>\r
    <li>Marketing Internacional</li>\r
    <li>Doctrina Social de la Iglesia</li>\r
    <li>Trabajo de Aplicación</li>\r
    <li>Portugués II</li>\r
    <li>Régimen Tributario e Impositivo del Comercio Exterior</li>\r
    <li>Integración y Cooperación Internacional</li>\r
    <li>Aspectos Financieros y Bancarios</li>\r
    <li>Marketing Digital</li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 4° Año </h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc">\r
    <li>Ética Profesional</li>\r
    <li>Alianzas Estratégicas para el Comercio Exterior</li>\r
    <li>Agronegocios</li>\r
    <li>Formulación y Evaluación de Proyectos de Comercio Exterior</li>\r
    <li>Logística Comercial</li>\r
    <li>Derecho Penal y Contencioso Aduanero</li>\r
    <li>Seminario de Actualización</li>\r
    <li>Taller de Investigación</li>\r
    <li>Negociación Internacional</li>\r
    <li>Taller de Emprendedurismo</li>\r
  </ul>\r
</div>`,description:"El <b>comercio internacional</b> es una actividad que busca favorecer el crecimiento de la economía a través de la importación y exportación de mercaderías a diferentes países. La licenciatura te brinda conocimientos para gestionar y atender las operatorias de comercio exterior y las posibilidades de expansión internacional. <br>El graduado podrá desempeñar su <b>carrera profesional</b> en los sectores internos de las empresas que realicen exportaciones e importaciones de sus productos o en puestos de trabajo internacional como agencias aduanales.",resolucion_ministerial:"576/20",carga_horaria:"2965 hrs",perfil_egresado:"El licenciado en Comercio Internacional será un experto en las operatorias de importación y exportación de productos, en los procesos de internacionalización de las empresas y promoción de exportaciones, en el análisis de mercados y de productos y en la formulación y evaluación de proyectos de comercio exterior. Estará capacitado para: <li>Actuar en la actividad pública y privada, ya sea en empresas exportadoras/importadoras o de servicios tales como bancos y entidades financieras, empresas de logística y transporte internacional, empresas de servicios aduaneros y organismos nacionales e internacionales.</li> <li>Elaborar estudios e investigaciones de mercado para concretar eficazmente las operaciones de importación y exportación.</li> <li>Diseñar procesos logísticos, determinar las condiciones más eficientes de contratación de transportes internacionales y la cobertura de los riesgos comerciales y contractuales de las mercancías objeto de la operatoria.</li> <li>Reconocer la organización del espacio político y económico a nivel mundial y las variables que inciden en el comportamiento de los mercados así como los flujos financieros internacionales, las normativas e instituciones vinculadas a las relaciones económicas y comerciales entre los estados y entre particulares.</li> <li>Determinar la función del riesgo comercial y económico financiero como base para establecer cursos de acción a seguir en materia de contrataciones internacionales de bienes, de servicios, de complementación económica y de inversión, a nivel de una organización o del país.</li> <li>Actuar como perito en comercio internacional en el ámbito judicial.</li>"},{codcar:244,tipcar:"Pregrado",nombre:"Corredor Inmobiliario y Martillero Público",modo:[1,7],duracion:"2 ½ Años",codare:13,porque:`<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 1° Año </h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-xs lg:text-xl" style="list-style-type: disc">\r
    <li>Filosofía </li>\r
    <li>Matemática y estadística </li>\r
    <li>Informática </li>\r
    <li>Principios de remates y corretajli>\r
    <li>Principios de tasación </li>\r
    <li>Derecho privado I (Civil) </li>\r
    <li>Teología </li>\r
    <li>Introducción matemática financi</li>\r
    <li>Contabilidad y administración </li>\r
    <li>Derecho privado II (Contratos y obligaciones) </li>\r
    <li>Derecho privado III (Derecho comercial) </li>\r
    <li>Topografía y geodesia </li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 2° Año </h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-xs lg:text-xl" style="list-style-type: disc">\r
    <li>Negociación Comercial </li>\r
    <li>Tasación y Venta de Inmuebles </li>\r
    <li>Remates y Subastas </li>\r
    <li>Aspectos Financieros de Negocios Inmobiliarios </li>\r
    <li> Marketing Inmobiliario </li>\r
    <li>Principios de Derecho Procesal </li>\r
    <li>Principios de Arquitectura, Construcción y Urbanismo </li>\r
    <li>Ética y Práctica Profesional </li>\r
    <li>Tasación y Venta de Bienes Muebles y Semovientes </li>\r
    <li>Evaluación de Proyectos Inmobiliarios </li>\r
    <li>Administración de Consorcios </li>\r
    <li> Elementos de Derecho Registral </li>\r
  </ul>\r
</div>`,description:"El <b>Corredor Inmobiliario y Martillero Público</b> está capacitado para la venta y subasta de bienes; puede intervenir en operaciones inmobiliarias como en la compra-venta de inmuebles, contratos de alquiler y en su procedimiento de valuación.<br>El profesional está habilitado para desempeñarse laboralmente en el ámbito mobiliario e inmobiliario. Podrá realizar tareas de corretaje y tasación para organismos públicos y privados.  Podrá intervenir en el gerenciamiento, administración y en la gestión integral de la actividad inmobiliaria. ",resolucion_ministerial:"813/18",carga_horaria:"1600 hrs",perfil_egresado:"El corredor inmobiliario y martillero público egresado de UCASAL podrá: <li>Actuar en el gerenciamiento, administración y gestión integral de la actividad inmobiliaria.</li> <li>Operar, asesorar e interpretar en la gestión de créditos para operaciones inmobiliarias, compra – venta de hacienda, bienes muebles y otro tipo de objetos susceptibles de tener valor.</li> <li>Participar en peritajes referidos a valores de colocación y de realización de bienes.</li> <li>Realizar tasaciones o subastas para organismos públicos y privados.</li> <li>Actuar como auxiliar de justicia en la ejecución de sentencias de remates y gestionar las exigencias legales de inscripción de dominio, gravámenes, certificaciones registrales y todo otro requisito establecido por la legislación.</li>"},{codcar:250,tipcar:"Grado",nombre:"Lic. en Administración de Negocios Digitales",modo:[7],duracion:"4 Años",codare:12,porque:`<div>\r
  <div class="w-100">\r
    <div\r
      class="row align-items-stretch justify-content-center pt-3"\r
    >    \r
      <div class="col-12 col-sm-6 borde_tabla min_40 flexbox">\r
        <div class="container">\r
          <h1\r
            class="plan_anio text-center"\r
            style="color: #ee1818;"\r
          >\r
            1° AÑO\r
          </h1>\r
          <p class="plan-estudio-text">\r
FILOSOFÍA<br/>\r
MATEMÁTICA I<br/>\r
ECONOMÍA I<br/>\r
ADMINISTRACIÓN I<br/>\r
<b>HERRAMIENTAS INFORMÁTICAS I</b><br/>\r
CONTABILIDAD I<br/>\r
MATEMÁTICA II<br/>\r
ECONOMÍA II<br/>\r
ADMINISTRACIÓN II<br/>\r
<b>HERRAMIENTAS INFORMÁTICAS II</b><br/>\r
          </p>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="w-100">\r
    <div\r
      class="row align-items-stretch justify-content-center pt-3"\r
    >\r
     \r
      <div class="col-12 col-sm-6 borde_tabla min_40 flexbox">\r
        <div class="container">\r
          <h1\r
            class="plan_anio text-center"\r
            style="color: #ee1818;"\r
          >\r
            2° AÑO\r
          </h1>\r
          <p class="plan-estudio-text">            \r
TEOLOGÍA<br/>\r
INSTITUCIONES DE DERECHO CIVIL Y COMERCIAL<br/>\r
MATEMÁTICA FINANCIERA<br/>\r
CONTABILIDAD II<br/>\r
FUNDAMENTOS DE MARKETING<br/>\r
INGLÉS TÉCNICO<br/>\r
ADMINISTRACIÓN III<br/>\r
DERECHO DEL TRABAJO Y LA SEGURIDAD SOCIAL<br/>\r
ESTADÍSTICA I<br/>\r
<b>COMERCIO ELECTRÓNICO</b><br/>\r
          </p>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="w-100">\r
    <div\r
      class="row align-items-stretch justify-content-center pt-3"\r
    >\r
     \r
      <div class="col-12 col-sm-6 borde_tabla min_40 flexbox">\r
        <div class="container">\r
          <h1\r
            class="plan_anio text-center"\r
            style="color: #ee1818;"\r
          >\r
            3° AÑO\r
          </h1>\r
          <p class="plan-estudio-text">\r
DOCTRINA SOCIAL DE LA IGLESIA<br/>\r
COSTOS<br/>\r
CONTABILIDAD GERENCIAL<br/>\r
<b>DERECHO SOCIETARIO</b><br/>\r
<b>MARKETING DIGITAL</b><br/>\r
GESTIÓN DE PERSONAS<br/>\r
FINANZAS OPERATIVAS<br/>\r
DIRECCIÓN ESTRATÉGICAS<br/>\r
ESTADÍSTICA II<br/>\r
<b>DESARROLLO DE PRODUCTOS DIGITALES</b><br/>\r
          </p>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
\r
<div>\r
  <div class="w-100">\r
    <div\r
      class="row align-items-stretch justify-content-center pt-3"\r
    >\r
     \r
      <div class="col-12 col-sm-6 borde_tabla min_40 flexbox">\r
        <div class="container">\r
          <h1\r
            class="plan_anio text-center"\r
            style="color: #ee1818;"\r
          >\r
            4° AÑO\r
          </h1>\r
          <p class="plan-estudio-text">\r
                        ÉTICA PROFESIONAL<br/>\r
                        DIRECCIÓN DE OPERACIONES<br/>\r
                        RÉGIMEN TRIBUTARIO<br/>\r
                        BIG DATA Y ANALITICA DIGITAL<br/>\r
                        FINANZAS CORPORATIBAS<br/>\r
                        MÉTODOS Y MODELOS CUANTITATIVOS<br/>\r
                        INTELIGENCIA APLICADA A LOS NEGOCIOS<br/>\r
                        GESTIÓN DE PROYECTOS Y EMPRENDIMIENTOS<br/>\r
                        CONTROL DE GESTIÓN<br/>\r
                        NEGOCIOS DIGITALES AVANZADOS<br/>\r
                        TRABAJO FINAL DE GRADUACIÓN<br/>\r
          </p>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>`,description:"La licenciatura en <strong>Administración de Negocios Digitales</strong> te capacita para crear, gestionar y liderar modelos de negocio en la nueva economía, para lograr mayor competitividad, promoviendo la innovación tecnológica constante. Como profesional de esta carrera, podrás evaluar e implementar sistemas de procesamiento de datos e información para el control y la toma de decisiones administrativas. Además, detectar oportunidades para emprender nuevos negocios y/o desarrollar nuevos productos.",resolucion_ministerial:"3793/21",carga_horaria:"2820 hrs",perfil_egresado:"El Licenciado en Administración de Negocios Digitales es un profesional educado con conocimientos y capacidades que configuran el siguiente perfil: <li>Promueve la innovación tecnológica dentro y fuera de la organización incorporando a la cultura digital para lograr una mayor competitividad.</li> <li>Diseña y desarrolla negocios aplicando la tecnología y metodologías de trabajo innovadoras.</li> <li>Desarrolla estrategias para la integración de la tecnología en todas las áreas de la organización con la innovación en la gestión de sistemas y procesos administrativos internos.</li> <li>Lidera equipos interdisciplinarios para transformar organizaciones de la mano de la tecnología siendo un mediador entre las personas responsables de los negocios con los perfiles técnicos que se desempeñan en la organización.</li>"},{codcar:336,tipcar:"Grado",nombre:"Lic. en Recursos Humanos",modo:[1,7],duracion:"4 Años",codare:12,porque:'<div class="hidden duration-700 ease-in-out" data-carousel-item> <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 1° Año </h3> <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-xs lg:text-xl" style="list-style-type: disc"> <li>Filosofía</li> <li>Psicología I</li> <li>Comprensión y Producción de Textos</li> <li>Principios de Economía</li> <li>Introducción a la Administración de las Organizaciones</li> <li>Historia Social y Económica</li> <li>Tecnologías de Información y Comunicación (TICS)</li> <li>Sistemas Administrativocontables</li> <li>Introducción a los Recursos Humanos</li> <li>Redacción y Estilo</li> <li>Introducción a las Relaciones Públicas</li> </ul> </div> <div class="hidden duration-700 ease-in-out" data-carousel-item> <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 2° Año </h3> <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc"> <li>Introducción al Pensamiento Cristiano</li> <li>Psicología II</li> <li>Economía Laboral</li> <li>Derecho del Trabajo</li> <li>Teorías de la Comunicación</li> <li>Sistemas de Información y Control</li> <li>Costos y Control Presupuestario</li> <li>Estadística Aplicada</li> <li>Desarrollo Organizacional</li> <li>Derecho Procesal Laboral, Arbitraje y Conflicto Laboral</li> </ul> </div> <div class="hidden duration-700 ease-in-out" data-carousel-item> <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 3° Año </h3> <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-xs lg:text-xl" style="list-style-type: disc"> <li>Doctrina Social Cristiana</li> <li>Sociología del Trabajo</li> <li>Reclutamiento y Selección</li> <li>Administración de Remuneraciones y Beneficios I</li> <li>Higiene, Seguridad en el Trabajo</li> <li>Metodología de la Investigación I</li> <li>Prueba de Suficiencia de Lengua Inglesa</li> <li>Análisis Financiero</li> <li>Capacitación y Desarrollo</li> <li>Administración Estratégica</li> <li>Estrategias de Negociación y Resolución de Conflictos</li> <li>Administración de Remuneraciones y Beneficios II</li> </ul> </div> <div class="hidden duration-700 ease-in-out" data-carousel-item> <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 4° Año </h3> <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc"> <li>Ética Profesional y Responsabilidad Social</li> <li>Metodología de la Investigación II</li> <li>Dirección de Marketing</li> <li>Dirección y Planificación Estratégica de Recursos Humanos</li> <li>Relaciones Laborales</li> <li>Seminario de Actualización</li> <li>Trabajo Final de Graduación</li> <li>Gestión de Calidad</li> <li>Recursos Humanos Basados en Competencias</li> <li>Auditoría de Recursos Humanos</li> </ul> </div>',description:"El licenciado en <b>recursos humanos</b> es el mediador entre el personal de una organización y la empresa. Recluta, contrata, evalúa y capacita a los empleados.<br> Es un profesional interesado por la faceta humana de las organizaciones y está dedicado a mejorar las relaciones interpersonales, creando buenos ambientes de trabajo, resolviendo problemas laborales y atendiendo las necesidades del personal.<br> Puede desempeñarse laboralmente desde el interior de una empresa formando parte del departamento de recursos humanos, como también brindando servicios en una consultora de forma independiente.",nom_landing:"estudiar-lic-rrhh-distancia",resolucion_ministerial:"2279/13",carga_horaria:"2850 hrs",perfil_egresado:"<li>Formular políticas para la administración de recursos humanos en el marco de la planificación estratégica de las organizaciones.</li><li>Planificar, dirigir y evaluar programas de selección, desarrollo y capacitación del personal, como así también diseñar y aplicar sistemas de evaluación de desempeño.</li><li>Elaborar y administrar sistemas de remuneraciones.</li><li>Coordinar las relaciones laborales internas y externas de una organización.</li><li>Asesorar integralmente a empresas e instituciones en el área de Recursos Humanos.</li>"},{codcar:355,tipcar:"Grado",nombre:"Escribanía",modo:[1,7],duracion:"4 ½ Años",codare:13,porque:`<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 1° Año </h3>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] [&>li]:my-1" style="list-style-type: disc">\r
    <li>Introducción al Derecho </li>\r
                    <li>Derecho Privado Parte General </li>\r
                    <li>Historia Constitucional Argentina </li>\r
                    <li>Introducción a la Filosofía </li>\r
                    <li>Teología I </li>\r
                    <li>Derecho Constitucional, Derechos Humanos y Garantías </li>\r
                    <li>Metodología de la Investigación </li>\r
                    <li>Sociología </li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
     <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 2° Año </h3>\r
      <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] [&>li]:my-1" style="list-style-type: disc">\r
       <li>Teología I</li>\r
                    <li>Teoría General de las Obligaciones</li>\r
                    <li>Elementos del Derecho Penal</li>\r
                    <li>Teología II</li>\r
                    <li>Derecho Empresarial</li>\r
                    <li>Economía Política</li>\r
                    <li>Derecho de DAños y Responsabilidad</li>\r
                    <li>Derecho Comercial y de los Usuarios y Consumidores</li>\r
                    <li>Derecho Ambiental y de los Recursos Naturales</li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
      <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 3° Año </h3>\r
      <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] [&>li]:my-1" style="list-style-type: disc">\r
        <li>Teoría General de los Contratos</li>\r
                    <li>Teoría Gral. del Proceso y Métodos de Resolución de Conflictos</li>\r
                    <li>Derecho Societario</li>\r
                    <li>Derecho Administrativo</li>\r
                    <li>Contratos en Particular</li>\r
                    <li>Derecho de las Nuevas Tecnologías</li>\r
                    <li>Doctrina Social de la Iglesia</li>\r
                    <li>Derecho Internacional</li>\r
                    <li>Redacción Documental y Notarial</li>\r
      </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
      <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 4° Año </h3>\r
      <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] [&>li]:my-1" style="list-style-type: disc">\r
        <li>Derechos Reales</li>\r
                    <li>Derecho Notarial</li>\r
                    <li>Derecho Individual y Colectivo del Trabajo y de la Seguridad Social</li>\r
                    <li>Derecho de Familia</li>\r
                    <li>Derecho Registral</li>\r
                    <li>Ética Profesional</li>\r
                    <li>Derecho Sucesorio</li>\r
                    <li>Derecho Concursal</li>\r
                    <li>Práctica Registral</li>\r
                    <li>Práctica Notarial</li>\r
      </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
      <h3 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 5° Año </h3>\r
      <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-[1em] [&>li]:my-1" style="list-style-type: disc">\r
        <li>Práctica Registral</li>\r
        <li>Práctica Notarial</li>\r
        <li>Derecho Financiero y Tributario</li>\r
      </ul>\r
</div>\r
<!-- Slider indicators -->\r
<div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>\r
</div>`,description:"El <b>escribano</b> es un profesional del derecho que tiene una función pública delegada por el estado. Cuenta con una sólida formación ética para poder dar veracidad y legalidad a los documentos públicos que autoriza.<br>Como profesional se ocupa de contratos, escrituras y otros documentos que se registran legalmente. Puede efectuar tramitaciones ante organismos nacionales, provinciales y municipales.<br>Contará con las competencias necesarias para asesorar en materia notarial e instrumental y podrá ejercer todas las demás funciones que la ley le atribuya.",nom_landing:"estudiar-escribania-distancia",resolucion_ministerial:"RESOL- 2021- 3500- APN – ME",carga_horaria:"2608 hrs",perfil_egresado:"En cuanto al ejercicio de la función notarial, el profesional puede: <li>Confeccionar y autorizar instrumentos públicos que documenten actos, negocios jurídicos y hechos.</li> <li>Asesorar en materia notarial e instrumental, con la formulación en su caso de dictámenes orales y escritos.</li> <li>Redactar documentos privados.</li> <li>Confeccionar y realizar el estudio de títulos dominiales inmobiliarios.</li> <li>Efectuar tramitaciones ante organismos nacionales, provinciales, y municipales, incluso las vinculadas con la inscripción de los documentos notariales en los registros públicos.</li> <li>Ejercer las demás funciones que la ley le atribuya.</li>"},{codcar:360,tipcar:"Pregrado",nombre:"Tecnicatura en Seguridad Informática",modo:[7],duracion:"2 ½ Años",codare:14,porque:`<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 1° Año </h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc;">\r
    <li>Desarrollo de Aplicaciones.</li>\r
                    <li>Componentes Informáticos.</li>\r
                    <li>Almacenamiento de Datos.</li>\r
                    <li>Política y Organización de la Seguridad.</li>\r
                    <li>Formación Integral.</li>\r
                    <li>Tecnología de las Comunicaciones I.</li>\r
                    <li>Evaluación y Tratamiento de los Riesgos.</li>\r
                    <li>Gestión de Activos de TI.</li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
     <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 2° Año </h1>\r
      <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc;">\r
       <li>Tecnología de las Comunicaciones II. </li>\r
                    <li>Servidores. </li>\r
                    <li>Seguridad de los RRHH. </li>\r
                    <li>Protección Física y Ambiental. </li>\r
                    <li>Seguridad del Software. </li>\r
                    <li>Gestión de las Comunicaciones y Operaciones. </li>\r
                    <li>Control de Accesos. </li>\r
                    <li>Forensia Digital. </li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
      <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 3° Año </h1>\r
      <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc;">\r
        <li>Trabajo Final Integrador. </li>\r
                    <li>Prueba de suficiencia de idioma inglés. </li>\r
                    <li>Prueba de suficiencia en matemática y física. </li>\r
                    <li>Adquisición, desarrollo y mantenimiento de Sistemas. </li>\r
                    <li>Gestión de los incidentes. </li>\r
                    <li>Continuidad y Cumplimiento. </li>\r
      </ul>\r
</div>\r
<!-- Slider indicators -->\r
<div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>\r
</div>`,description:"Tecnicatura en Seguridad Informática",resolucion_ministerial:"2239/20",carga_horaria:"1600 hrs",perfil_egresado:"El egresado de esta tecnicatura deberá tener: <li>Actitud analítica y crítica para observar y resolver problemas de la seguridad informática, aún en ambientes de alta incertidumbre.</li> <li>Adaptabilidad a cualquier tipo de organización o situación.</li> <li>Capacidad de rigurosa reflexión para enfrentar los cambios.</li> <li>Hábito para trabajar en equipo interdisciplinarios.</li> El técnico será capaz de atender los requerimientos informáticos que se generen en las empresas o instituciones en las que trabaje y siempre bajo la supervisión del profesional informático responsable del área TIC."},{codcar:361,tipcar:"Pregrado",nombre:"Licenciatura en Criminología",modo:[7],duracion:"2 Años",codare:13,porque:`<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl">1° Año</h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc;">\r
    <li>Sociología del Delito</li>\r
    <li>Doctrina Social de la Iglesia</li>\r
    <li>Psicología Social Aplicada</li>\r
    <li>Corrientes Criminológicas</li>\r
    <li>Ciencias Sociales y Jurídicas Aplicada a la Criminología</li>\r
    <li>Psiquiatría y Psicología Forense</li>\r
    <li>Delito, Contexto Social y Medios de Comunicación</li>\r
    <li>Victimología</li>\r
    <li>Estadística</li>\r
    <li>Criminología</li>\r
    <li>Violencia, Control y Exclusión Social</li>\r
    <li>Metodología en la Investigación Criminal</li>\r
    <li>Delincuencia Organizada y Narcocriminalidad</li>\r
    <li>Medicina Legal y Ciencias Forenses</li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl">2° Año</h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc;">\r
    <li>Psicopatología Criminal</li>\r
    <li>Ética Profesional</li>\r
    <li>Delincuencia Informática</li>\r
    <li>Sistemas de Seguridad Policial y Penitenciario</li>\r
    <li>Análisis Criminal</li>\r
    <li>Principios Constitucionales y Criminología</li>\r
    <li>Derechos Humanos</li>\r
    <li>Trabajo Final Integrador</li>\r
    <li>Diseño, Planificación y Evaluación de Programas y Proyectos</li>\r
    <li>Seminario Trabajo Integrador</li>\r
    <li>Elaboración de Perfiles Criminológicos</li>\r
    <li>Drogadicción Social y Toxicología</li>\r
    <li>Mediación y Resolución de Conflictos</li>\r
    <li>Política Criminal</li>\r
    <li>Metodología de la Investigación Social</li>\r
  </ul>\r
</div>`,description:`Analiza y replantea problemas de seguridad con intervenciones en la interpretación de temas de criminología. \r
Mediante este Ciclo de Complementación Curricular profundiza en situaciones y hechos criminales, mediante métodos y técnicas de identificación de las personas involucradas y de los elementos implicados. \r
Establece perfiles criminológicos, investiga conductas anormales o desviadas y diseña planes, programas o proyectos con la finalidad de prevenir conductas delictivas y reinsertar al individuo a un núcleo social.\r
Como egresado de esta carrera podrás:\r
<br><br>\r
<ul class="texto-seccion-1">\r
  <li>Colaborar al Estado en políticas penitenciarias- Dirigir y participar en equipos interdisciplinarios</li>\r
  <li>Investigar el delito, modus operandi, patrones criminales.</li>\r
  <li>Asesorar a los equipos técnicos de las cámaras y comisiones de legislación en temas criminológicos, penales, criminalísticos, victimológicos, psicológicos y psiquiátricos.</li>\r
</ul>\r
<p class="texto-seccion-1">\r
Requisito de admisión:\r
<br>\r
Podrán ingresar a la carrera quienes tengan título obtenido en el país de Tecnicatura Superior en Criminología o equivalente, otorgado por Universidades o Institutos de formación de las fuerzas policiales, de seguridad o del servicio penitenciario, de dos años de duración o más y con una carga horaria de 1200 horas reloj como mínimo.</p>`,resolucion_ministerial:"977/20",carga_horaria:"2016 hrs",perfil_egresado:`El licenciado en Criminología tendrá un perfil analítico, reflexivo y crítico que le permitirá indagar usando técnicas criminológicas y actuar en los procesos del comportamiento antisocial, la delincuencia y sus efectos, sea a nivel local, nacional, regional e inclusive internacional, tanto en el sector público como el privado, a través del desarrollo de programas para la seguridad pública y ciudadana. \r
\r
En tal sentido, asumirá de manera proactiva e interdisciplinariamente, el desafío de responder ética y competitivamente a las necesidades de la sociedad, respetando su cultura e identidad. Procurará la promoción de nuevas y eficaces estrategias preventivas para la reinserción social y la reducción de la criminalidad, para lograr una sociedad pacífica, justa y segura, dando participación a los estrados judiciales.\r
\r
Esta carrera pretende formar profesionales competentes y actualizados que puedan insertarse en el mercado laboral, tanto del ámbito público como privado, a partir del dominio de conocimientos pragmáticos para actuar con eficiencia y versatilidad en la implementación de programas y políticas criminales para que coadyuven a la prevención de conductas delictivas y antisociales.`},{codcar:363,tipcar:"Pregrado",nombre:"Procuración",modo:[1,7],duracion:"3 Años",codare:13,porque:`<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 1° Año </h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc">\r
    <li>Introducción al Derecho</li>\r
    <li>Derecho Privado Parte General</li>\r
    <li>Historia Constitucional Argentina</li>\r
    <li>Introducción a la Filosofía</li>\r
    <li>Teología I</li>\r
    <li>Derecho Constitucional, Derechos Humanos y Garantías</li>\r
    <li>Lógica y Argumentación Jurídica</li>\r
    <li>Sociología</li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 2° Año </h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc">\r
    <li>Teoría General de las Obligaciones</li>\r
    <li>Elementos del Derecho Penal</li>\r
    <li>Teología II</li>\r
    <li>Derecho Empresarial</li>\r
    <li>Doctrina Social de la Iglesia</li>\r
    <li>Derecho de DAños y Responsabilidad</li>\r
    <li>Derecho Comercial y, de los Usuarios y Consumidores</li>\r
    <li>Teoría General de los Contratos</li>\r
    <li>Derecho de las Nuevas Tecnologías</li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 3° Año </h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-xs lg:text-base" style="list-style-type: disc">\r
    <li>Derecho Administrativo</li>\r
    <li>Derechos Reales</li>\r
    <li>Derecho Individual y Colectivo del Trabajo y de la Seguridad Social</li>\r
    <li>Contratos en Particular</li>\r
    <li>Teoría General de Proceso y Métodos de Resolución de Conflicto</li>\r
    <li>Práctica Profesional</li>\r
    <li>Taller de Redacción y Gestión Documental Administrativa, Notarial y Judicial</li>\r
    <li>Derecho Societario</li>\r
    <li>Derecho de Familia</li>\r
    <li>Derecho Concursal</li>\r
    <li>Derecho Sucesorio</li>\r
  </ul>\r
</div>`,description:"El <b>procurador</b> como profesional estará capacitado para auxiliar en la gestión de los procesos actuando como apoderado de alguna parte ante los tribunales.<br>Cuenta con la habilitación para realizar todo trámite en el ejercicio de esta clase de representación con asistencia letrada en los casos requeridos por la normativa.<br>Estará capacitado para auxiliar en causas judiciales, expedientes administrativos y podrá solicitar los informes de reparticiones públicas.<br>Cuenta con los conocimientos requeridos para asistir a los abogados en la promoción del respeto a la dignidad y derechos fundamentales de las personas, promoviendo la paz social y el bien común político.",resolucion_ministerial:"886/2020",carga_horaria:"1872 hrs",perfil_egresado:"En cuanto al ejercicio de su función, el procurador puede: <li>Auxiliar en la gestión de los procesos actuando como apoderado de alguna parte ante los Tribunales, realizando en su nombre todas las gestiones y trámites que pueden cumplir legalmente en el ejercicio de esta clase de representación, con asistencia letrada en los casos requeridos por la normativa.</li> <li>Auxiliar en causas judiciales y expedientes administrativos, conforme a la normativa procesal vigente en cada jurisdicción, con asistencia letrada en los casos requeridos por ley.</li> <li>Solicitar los informes de reparticiones públicas para los cuales contara con habilitación de conformidad con la ley procesal.</li> <li>Asistir a los abogados en la promoción del respeto a la dignidad y derechos fundamentales de las personas, promoviendo la paz social y el bien común político.</li> <li>Ejercer las demás funciones que la ley le atribuya.</li>"},{codcar:368,tipcar:"Grado",nombre:"Lic. en Administración y Gestión Universitaria (Ciclo de Complementación)",modo:[7],duracion:"2 Años",codare:12,porque:`<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 1° Año </h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc;">\r
    <li>Economía de la Educación</li>\r
    <li>Matemática I</li>\r
    <li>Administración Universitaria</li>\r
    <li>Sistemas Universitarios Comparados</li>\r
    <li>Inglés Técnico</li>\r
    <li>Administración Financiera y Financiamiento Universitario</li>\r
    <li>Gestión de la Información y la Documentación</li>\r
    <li>Metodología de la Investigación</li>\r
    <li>Evaluación y Acreditación Universitaria</li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
     <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 2° Año </h1>\r
      <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc;">\r
       <li>Ética Profesional</li>\r
    <li>Gestión de Proyectos Universitarios</li>\r
    <li>Control de Gestión</li>\r
    <li>Contabilidad II</li>\r
    <li>Seminario de Actualización</li>\r
    <li>Inglés Técnico</li>\r
    <li>Trabajo Final de Graduación</li>\r
  </ul>\r
</div>\r
<!-- Slider indicators -->\r
<div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>\r
</div>`,description:`El sistema educativo universitario demanda actualmente un profesional idóneo que contribuya a la mejora de los procesos que involucran la gestión universitaria.</br></br>\r
 \r
 A través de esta carrera el egresado tendrá la capacidad para realizar diagnósticos y proponer soluciones a los problemas complejos de la organización universitaria. Podrá planear, organizar, dirigir y controlar actividades, procesos y sistemas administrativos.</br></br>\r
 \r
 Formular planes de trabajo para los procesos de evaluación y acreditación universitaria, y en los procesos de calidad y mejora continua.</br></br>\r
 \r
 También elaborar informes para la toma de decisiones utilizando herramientas tecnológicas y digitales actualizadas.`,resolucion_ministerial:"1539/22",carga_horaria:"1235 hrs",perfil_egresado:"<li>Planear, organizar, dirigir y controlar las tareas administrativas relacionadas con las funciones sustantivas y de apoyo de la organización universitaria.</li> <li>Asistir a cada área específica en los aspectos técnicos y administrativos pertinentes.</li> <li>Integrar equipos interdisciplinarios para la formulación, ejecución y evaluación de planes y proyectos para el desarrollo y mejoramiento del sistema universitario.</li> <li>Participar en los procesos de evaluación y acreditación de la institución universitaria.</li> <li>Diseñar e implementar sistemas de control interno para la eficacia y eficiencia de la actividad administrativa universitaria.</li>"},{codcar:378,tipcar:"Grado",nombre:"Tecnicatura Universitaria en Organización y Dirección de Eventos y Ceremonial",modo:[7],duracion:"2 ½ Años",codare:18,porque:`<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 1° Año </h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc;">\r
    <li>Introducción a la Organización de Eventos</li>\r
    <li>Relaciones Públicas</li>\r
    <li>Taller de Comunicación</li>\r
    <li>Fundamentos del Ceremonial</li>\r
    <li>Filosofía</li>\r
    <li>Planificación, Producción y Logística de Eventos</li>\r
    <li>Gastronomía y Hospitalidad</li>\r
    <li>Comunicación Digital y Manejo de Redes</li>\r
    <li>Ceremonial Oficial y Diplomático</li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
     <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 2° Año </h1>\r
      <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc;">\r
       <li>Organización y Ceremonial de Eventos Empresariales y Sociales</li>\r
        <li>Eventos Culturales, Educativos y Académicos</li>\r
        <li>Dirección del Personal</li>\r
        <li>Taller I: Imagen, Sonido y Montaje</li>\r
        <li>Teología</li>\r
        <li>Ceremonial Situado</li>\r
        <li>Megaeventos</li>\r
        <li>Estrategias de Marketing de Servicios</li>\r
        <li>Taller II: Tecnología Aplicada a Eventos</li>\r
        <li>Doctrina Social</li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
      <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 3° Año </h1>\r
      <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc;">\r
        <li>Empresas de Eventos</li>\r
        <li>Eventos Digitales</li>\r
        <li>Ética Profesional</li>\r
        <li>Inglés Técnico</li>\r
        <li>Práctica Profesional</li>\r
      </ul>\r
</div>\r
<!-- Slider indicators -->\r
<div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>\r
</div>`,description:"La carrera forma profesionales capacitados para la planificación, producción y coordinación de eventos públicos y privados.<br>El egresado adquiere habilidades para organizar el ceremonial de actos, reuniones, recepciones y demás eventos aplicando las pautas, los criterios y las normas específicas del protocolo.<br>Tendrá las competencias necesarias para implementar métodos y herramientas para evaluar la calidad y mejorar los procesos de un evento.<br>También podrá asesorar a empresas e instituciones en materia ceremonial y organización de eventos.",resolucion_ministerial:"27/2023",carga_horaria:"1760 hrs",perfil_egresado:"El Técnico Universitario en Dirección de Ceremonial y Organización de Eventos es un profesional preparado con el siguiente perfil:<br><ul><li>Planifica, produce y coordina eventos de distintas características, ámbitos y objetivos comunicacionales.</li><li>Dirige el personal involucrado en las distintas áreas, incentivando el trabajo en equipo, para el desarrollo armónico de los eventos y alcanzar así los objetivos establecidos.</li><li>Aplica con criterio los procedimientos del ceremonial y las normas de protocolo de acuerdo a la naturaleza de cada evento.</li><li>Logra potenciar cada acto como una pieza de comunicación que colabora con los objetivos institucionales.</li><li>Desarrolla la creatividad para generar valor en la producción de un evento con contenidos nuevos y experiencias innovadoras.</li><li>Aplica estrategias de negociación con proveedores de productos y servicios necesarios para el evento, patrocinadores y otros actores externos para lograr eficiencia en la asignación de recursos y determinación de los costos.</li><li>Posee una actitud responsable cooperativa y ética que facilita la integración social.</li></ul>"},{codcar:383,tipcar:"Pregrado",nombre:"Tecnicatura en Operaciones Mineras",modo:[7],duracion:"3 Años",codare:14,description:`La carrera te capacita para seleccionar, operar y mantener los equipos para los procesos industriales del sector.<br>\r
El profesional velará por el cumplimiento de los procedimientos, buenas prácticas y políticas relacionadas a la actividad minera.<br> \r
Como egresado adquiere habilidades para identificar y seleccionar máquinas de uso pesado requeridas en el sector. Podrá efectuar el mantenimiento preventivo y correctivo de componentes de equipo así como también identificar riesgos presentes durante el proceso productivo y administrativo.`,porque:`<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
  <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 1° Año </h1>\r
  <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc;">\r
    <li>Introducción a la Minería</li>\r
    <li>Química para Minería</li>\r
    <li>Introducción a la Termodinámica</li>\r
    <li>Gestión de Mantenimiento</li>\r
    <li>Filosofía</li>\r
    <li>Higiene y Seguridad en el Sector Minero</li>\r
    <li>Manejo de Recurso Humano</li>\r
    <li>Herramientas para la Gestión 1</li>\r
    <li>Máquinas Térmicas</li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
     <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 2° Año </h1>\r
      <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc;">\r
       <li>Estadística Aplicada: Análisis y Procesamiento de Datos</li>\r
    <li>Electricidad y Electrónica Industrial</li>\r
    <li>Gestión de Activos Físicos</li>\r
    <li>Medio Ambiente y Gestión de la Calidad en Minería</li>\r
    <li>Teología</li>\r
    <li>Doctrina Social de la Iglesia</li>\r
    <li>Elementos de Máquinas</li>\r
    <li>Instalaciones Auxiliares</li>\r
    <li>Instrumentación, Control y Automatización</li>\r
  </ul>\r
</div>\r
<div class="hidden duration-700 ease-in-out" data-carousel-item>\r
      <h1 class="text-center ml-[20px] text-[#B3271B] text-2xl"> 3° Año </h1>\r
      <ul class="mx-20 sm:mx-32 lg:mx-48 my-auto text-sm lg:text-xl" style="list-style-type: disc;">\r
        <li>Mecánica de Fluidos Aplicada</li>\r
    <li>Técnicas de Mantenimiento Predictivas</li>\r
    <li>Tribología y Lubricación</li>\r
    <li>Selección de Equipo Pesado Minero</li>\r
    <li>Ética Ambiental</li>\r
    <li>Trabajo Final Integrador</li>\r
    <li>Prueba de Suficiencia en Idioma Inglés</li>\r
    <li>Prueba de Suficiencia en Matemática y Física</li>\r
      </ul>\r
</div>\r
<!-- Slider indicators -->\r
<div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>\r
    <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>\r
</div>`,resolucion_ministerial:"RESOL-2023-1737-APN-ME",carga_horaria:"1760 hrs",perfil_egresado:"El egresado de esta tecnicatura será capaz de: <li>Seleccionar, operar y mantener los equipos establecidos para los procesos industriales del sector, velando por el cumplimiento de los procedimientos, buenas prácticas y políticas relacionadas a la actividad minera.</li> <li>Colaborar en la elaboración de planes de mantenimiento.</li> <li>Aportar al Departamento de Recursos Humanos en cuestiones de manejo de personal.</li> <li>Identificar y seleccionar máquinas de uso pesado requeridas en el sector.</li> <li>Efectuar el mantenimiento preventivo y correctivo de componentes de equipos.</li> <li>Identificar riesgos presentes durante el proceso productivo como así también administrativo.</li>"}];function D(){const r=e=>e.filter(a=>a.modo.includes(7)).map(a=>({codcar:a.codcar,nomcar:a.nombre,duracion:a.duracion,modo:a.modo,codare:a.codare}));return i.jsx("div",{children:i.jsx(C,{id:"carreras",title:"Conocé nuestras",highlight:"CARRERAS",carreras:r(E)})})}function C({id:r,title:e,highlight:a,carreras:l}){return i.jsxs("div",{id:r,children:[i.jsxs("h2",{className:"bigTitle mt-5 shadow-black xs:text-xs",children:[i.jsx("span",{style:{color:"rgb(97, 96, 96)"},children:e})," ",i.jsx("span",{children:a}),":"]}),i.jsx("div",{className:"",children:i.jsx("div",{className:"w-full h-full overflow-auto grid grid-cols-2 lg:grid-cols-4 gap-4",children:l.map(n=>{const{codcar:s,nomcar:o,codare:u,modo:c,duracion:p}=n,x=Array.isArray(c)?c.join(", "):c?.toString()||"";return i.jsx(A,{codcar:s?.toString(),nombre:o||"",codare:u?.toString()||"",modo:x,duracion:p||""},s?.toString())})})})]})}export{D as default};
