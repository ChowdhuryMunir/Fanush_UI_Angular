//export class EmployeeDataImportExportModel {
//}
export class EmployeeDataImportExport {
  importExportId: number = 0;
  type: string = ""; // Example: Import, Export
  fileName: string = "";
  filePath: string = "";
  importExportDate: Date = new Date();
  isActive: boolean = false;
}
