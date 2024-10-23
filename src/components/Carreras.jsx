import Card from "./Card.jsx";
import { datita } from "../scripts/datita.js";

export default function Especializaciones() {
  // Filtramos las carreras
  const filtrarCarreras = (carreras) =>
    carreras.map((carrera) => ({
      codcar: carrera.codcar,
      nomcar: carrera.nombre,
      duracion: carrera.duracion,
      modo: carrera.modo,
      codare: carrera.codare, // Asegúrate de usar el nombre correcto
    }));

  return (
    <div>
      <Section
        id="especializaciones"
        title="Conocé nuestras"
        highlight="ESPECIALIZACIONES"
        carreras={filtrarCarreras(datita)}
      />
    </div>
  );
}

function Section({ id, title, highlight, carreras }) {
  return (
    <div id={id}>
      <h2
        className="bigTitle mt-5 shadow-black xs:text-xs"
      >
        <span style={{ color: "rgb(97, 96, 96)" }}>{title}</span>&nbsp;
        <span>{highlight}</span>:
      </h2>
      <div className="">
        <div className="w-full h-full overflow-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {carreras.map((carrera) => {
            const { codcar, nomcar, codare, modo, duracion } = carrera;
            const modoStr = Array.isArray(modo) ? modo.join(", ") : modo?.toString() || "";
            return (
              <Card
                key={codcar?.toString()}
                codcar={codcar?.toString()}
                nombre={nomcar || ""}
                codare={codare?.toString() || ""}
                modo={modoStr}
                duracion={duracion || ""}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
