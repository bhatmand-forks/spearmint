
export interface AccTestCaseState {
  modalOpen: boolean;
  describeId: number;
  itId: number;
  statementId: number;
  propId: number;
  describeBlocks: DescribeBlocks
  itStatements: ItStatements;
  fileName: string;
  filePath: string;
}
export interface DescribeBlocks {
  byId: Object; 
  allIds: Array<string>;
}
export interface ItStatements {
  byId: Object;
  allIds: Object;
}
export interface CustomInput {
  id: number;
  type: string;
  name: string;
  placeholder: string;
  defaultValue: string;
  label: string;
  bold: boolean;
}

export interface Action {
  type: string;
  id?: string;
  draggableStatements?: Array<string>;
  index?: number;
  text?: string;
  itId?: number;
  describeId?: number | string;
  reorderedDescribe?: Object;
  //reoderedIt?: 
  fileName?: string;
  filePath?: string;
  describeBlocks: any[];

}





