export class ToolsController{
  
  constructor ($log, $q, excelService) {
    'ngInject';
    this.excelService = excelService;
    this.$log = $log;
    this.$q = $q;
    this.files = [];
    this.workbooks = [];
  }
  
  init(){
  
  }
  
  uploadFiles(files){
    this.$log.info(files);
    this.$log.info(this.files);
    this.loading = true;
    var i, f;
    var promises = [];
    for (i = 0, f = files[i]; i != files.length; ++i) {
      var reader = new FileReader();
      var defer = this.$q.defer();
      promises.push(defer.promise);
      reader.onload = ((defer) => {
        return (e) => {
          var data = e.target.result;
          this.workbooks.push(this.excelService.read(data));
          this.$log.info('resolve')
          defer.resolve();
        };
      }) (defer);
      reader.readAsBinaryString(f);
    }
    this.$q.all(promises).then(() => {
      this.$log.info('loaded')
      this.loading = false;
    });
  }  
}
