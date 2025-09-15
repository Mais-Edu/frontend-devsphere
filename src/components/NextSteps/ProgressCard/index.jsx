import React, { useState } from "react";

const ProgressCard = ({ title, color, iconSimbol, percent }) => {
  // Estado para status da tarefa
  const [status, setStatus] = useState("notStarted");

  // Atualiza status automaticamente conforme a % concluída
  React.useEffect(() => {
    const value = parseInt(percent, 10); // remove o % e converte em número
    if (value === 0) setStatus("notStarted");
    else if (value > 0 && value < 100) setStatus("inProgress");
    else if (value >= 100) setStatus("done");
  }, [percent]);

  // Texto amigável para cada status
  const statusText = {
    notStarted: "Não iniciado",
    inProgress: "Em andamento",
    done: "Concluído",
  };

  return (
    <div className="flex gap-5 bg-[#1F2937] items-center p-5 rounded-xl border border-slate-700">
      {/* Ícone com cor de fundo */}
      <div style={{ backgroundColor: color }} className="rounded px-4 py-3">
        {iconSimbol}
      </div>

      {/* Conteúdo */}
      <div className="w-full">
        <h3 className="text-white font-semibold">{title}</h3>

        {/* Barra de progresso */}
        <div className="w-full bg-[#374151] rounded mt-1">
          <div
            style={{ width: percent, backgroundColor: color }}
            className="h-[0.45rem] rounded transition-all duration-500"
          ></div>
        </div>

        {/* Status e percentual */}
        <div className="flex justify-between text-sm mt-1">
          <span className="text-[#9CA3AF]">{statusText[status]}</span>
          <span className="text-[#9CA3AF]">{percent}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;