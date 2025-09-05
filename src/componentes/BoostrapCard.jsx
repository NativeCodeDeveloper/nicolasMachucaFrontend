export default function BoostrapCard({ titulo, cuerpo1, cuerpo2, cuerpo3, cuerpo4, cuerpo5, cuerpo6 }) {
  return (
    <div className="card w-75 bg-dark text-white">
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <ul className="list-group list-group-flush">
          {cuerpo1 && <li className="list-group-item bg-dark text-white">{cuerpo1}</li>}
          {cuerpo2 && <li className="list-group-item bg-dark text-white">{cuerpo2}</li>}
          {cuerpo3 && <li className="list-group-item bg-dark text-white">{cuerpo3}</li>}
          {cuerpo4 && <li className="list-group-item bg-dark text-white">{cuerpo4}</li>}
          {cuerpo5 && <li className="list-group-item bg-dark text-white">{cuerpo5}</li>}
          {cuerpo6 && <li className="list-group-item bg-dark text-white">{cuerpo6}</li>}
        </ul>
        <a href="#" className="btn btn-primary mt-3">
          Comprar
        </a>
      </div>
    </div>
  );
}