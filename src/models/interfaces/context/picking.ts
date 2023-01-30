import { BatchTpSituation } from "../global/enum/BatchTpSituation";

export interface IBatch {
  code: string;
  cd_order_production: number;
  nr_batch: number;
  nm_formula: string;
  nr_variation: number;
  ds_order_production: string;
  dt_order_production: Date;
  details: IBatchDetail[];
}

export interface IBatchPicking {
  cd_order_production: number;
  nr_batch: number;
  nm_formula: string;
  nr_variation: number;
  ds_order_production: string;
  dt_order_production: Date;
  details: IBatchDetail[];
}

export interface IBatchDetail {
  nm_product: string;
  nm_silo: string;
  ps_bag: number;
  vl_bag_requested: number;
  vl_bag_quantity: number;
  tp_situation: BatchTpSituation;
}

export interface IConfirmBagReaded {
  login_name: string;
  barcode_pallet: string;
  cd_order_production: number;
  barcode_product: string;
}
