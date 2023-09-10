'use strict';

const Excel = require('exceljs');

const createExcel = async ({ serviceName, excelHeader, excelBody }) => {
  const path = `/tmp/${serviceName}.xlsx`;
  const workbook = new Excel.Workbook();
  const worksheet = workbook.addWorksheet(`${serviceName}_${Date.now()}`);

  worksheet.columns = excelHeader;

  worksheet.addRows(excelBody);
  await workbook.xlsx.writeFile(path);

  return path;
};

module.exports = {
  createExcel,
};