const Card = ({ codcar, codare, nombre, modo, duracion }) => {
  /* const nombreClasses =
    nombre && nombre.split(" ").length > 5 ? "text-[0.8rem]" : "text-base"; */

  return (
    <a href={`/landing/ingreso-carreras-home/${codcar}`}>
      <div className="flex justify-center" style={{ transform: 'scale(0.8)' }}>
        <div className="max-w-xl h-full w-[300px] rounded-2xl overflow-hidden shadow-lg relative transition-transform hover:scale-105 hover:shadow-xl border-2">
          {/* Parte 1: Imagen */}
          <div className="relative h-32 lg:h-48">
            <img src={`/landing/public/cards/${codcar}.webp`} alt={`${nombre}`} className="absolute w-full h-full object-cover object-center" />
          </div>
          <img
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-[100%] lg:-translate-y-[40%] w-14 h-10 lg:w-20 lg:h-16"
            src={`/landing/ingreso-carreras-ucasal/iconoCarrera/${codare ? (codare === "30" ? "13" : codare) : "default"}.svg`}
            alt="icono carta"
          />
          {/* Parte 3: Título */}
          <div className="px-2 py-4 bg-white flex items-center justify-center h-28">
            <div className="font-semibold text-center text-sm">
              {nombre || ""}
            </div>
          </div>
          <div className="py-2 bg-[#ee1818] w-full h-full">
            <div className="grid grid-cols-2 gap-2 text-center">
              <div className="text-white flex flex-col col-span-1">
                <span className="rounded-full px-1 text-xs font-light">
                  Modalidad
                </span>
                <span className="rounded-full px-1 text-sm font-bold">
                  {modo?.includes("7")
                    ? "Digital"
                    : modo?.includes("1")
                    ? "Presencial"
                    : "Presencial y Digital"}
                </span>
              </div>
              <div className="text-white flex flex-col col-span-1 border-l-2">
                <span className="rounded-full px-1 text-xs font-light">
                  Duración
                </span>
                <span className="rounded-full px-1 text-sm font-bold">
                  {duracion}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;