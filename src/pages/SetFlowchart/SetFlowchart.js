import { default as el1 } from "../../flowcharts/elements/Flowchart1";

// /classes.push(el1[28]);
export const setFlowchart = (data) => {
  let classes = [];
  el1[26]["data"]["label"] =
    "Start Here! You can click on CSC 126 or MTH 123 to add your first class!";
  classes.push(el1[26]);
  if (data["CSC 126"].isTaken || data["MTH 123"].isTaken) {
    classes.push(el1[0]);
    classes.push(el1[3]);
    classes.push(el1[27]);
    classes.push(el1[33]);
    classes.push(el1[34]);
  }
  if (data["MTH 230 & 229"].isTaken || data["MTH 231 & 229"].isTaken) {
    classes.push(el1[4]);
    classes.push(el1[5]);
    classes.push(el1[6]);
    classes.push(el1[32]);
    classes.push(el1[35]);
    classes.push(el1[36]);
  }
  if (data["MTH 232"].isTaken) {
    classes.push(el1[7]);
    classes.push(el1[28]);
    classes.push(el1[37]);
    classes.push(el1[46]);
  }
  if (data["200 level elective*"].isTaken) {
    classes.push(el1[1]);
    classes.push(el1[30]);
  }
  if (data["CSC 211"].isTaken) {
    classes.push(el1[2]);
    classes.push(el1[31]);
  }
  if (data["CSC 220"].isTaken) {
    classes.push(el1[10]);
    classes.push(el1[40]);
  }
  if (data["CSC 228"].isTaken) {
    classes.push(el1[8]);
    classes.push(el1[38]);
  }
  if (data["CSC 326"].isTaken) {
    classes.push(el1[9]);
    classes.push(el1[39]);
  }
  if (data["CSC 330"].isTaken) {
    classes.push(el1[17]);
    classes.push(el1[49]);
  }
  if (data["CSC 315"].isTaken) {
    classes.push(el1[18]);
    classes.push(el1[50]);
  }
  if (data["CSC 332 & 305"].isTaken) {
    classes.push(el1[20]);
    classes.push(el1[21]);
    classes.push(el1[22]);
    classes.push(el1[53]);
    classes.push(el1[54]);
    classes.push(el1[55]);
  }
  if (data["CSC 346 & 347"].isTaken) {
    classes.push(el1[11]);
    classes.push(el1[12]);
    classes.push(el1[13]);
    classes.push(el1[41]);
    classes.push(el1[42]);
    classes.push(el1[43]);
  }
  if (data["CSC 382"].isTaken) {
    classes.push(el1[16]);
    classes.push(el1[48]);
    classes.push(el1[47]);
  }
  if (data["400 level elective*"].isTaken) {
    classes.push(el1[23]);
    classes.push(el1[56]);
  }
  if (data["CSC 430"].isTaken) {
    classes.push(el1[25]);
    classes.push(el1[58]);
    classes.push(el1[60]);
  }
  if (data["CSC 446"].isTaken) {
    classes.push(el1[19]);
    classes.push(el1[51]);
  }
  if (data["CSC 490"].isTaken) {
    classes.push(el1[24]);
    classes.push(el1[57]);
    classes.push(el1[29]);
  }
  return classes;
};
