export class ExcelService{
  constructor ($log, xlsx) {
    'ngInject';
    this.$log = $log;    
    this.xlsx = xlsx;
  }
  
  read(data){
    var wb = this.xlsx.read(data,{type: 'binary'});
    this.$log.info(wb);
    return wb;
  }
}
