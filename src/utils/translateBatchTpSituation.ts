import { BatchTpSituation } from "./../models/interfaces/global/enum/BatchTpSituation";

export function translateBatchTpSituation(situation: BatchTpSituation) {
  const dictionary = {
    [BatchTpSituation.Finished]: "Finalizado",
    [BatchTpSituation.Started]: "Em andamento",
    [BatchTpSituation.Waiting]: "Aguardando",
  };

  return dictionary[situation];
}
