import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-readexcel',
  templateUrl: './readexcel.component.html',
  styleUrls: ['./readexcel.component.css']
})
export class ReadexcelComponent implements OnInit {

  filepath: string = '../assets/files/test.xlsx';

  filelist: any = [];
  file: any;
  raw_data:any;
  filteredArr:any = [];
  showErr:boolean = false;
  searchQuerry:string="";

  dataJson1:any;

  constructor(private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    
  }

  searchData(event: any) {
    this.file = '../assets/files/test.xlsx';
    this.searchQuerry = event.target.value;

    this.http.get(this.file, { responseType: 'blob' }).subscribe((data: any) => {
      const reader: FileReader = new FileReader();


    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
      /* grab first sheet */
      const wsname1: string = wb.SheetNames[1];
      const ws1: XLSX.WorkSheet = wb.Sheets["Sheet1"];

      this.dataJson1 = XLSX.utils.sheet_to_json(ws1,{raw:true,header:["SR.No.","ITEM_CODE","ITEM_NAME","ITEM_DESC"]});
      this.raw_data = this.dataJson1;
      this.raw_data = [];
      this.filteredArr = [];
      this.showErr = false;
      this.filter(this.dataJson1,this.searchQuerry)
    };
    reader.readAsBinaryString(data);
    })
  }


  filter(d:any,inpStr:any){
    for(let i=0;i<d.length;i++){
      if(i>0){
        this.raw_data.push(d[i])
      }
    }

    for (let j of this.raw_data){
      if(j.ITEM_NAME.toLowerCase().startsWith(inpStr.toLowerCase())){
        this.filteredArr.push(j)
      }
    }

    if(this.filteredArr.length === 0){
      this.showErr = true
    }
  }

  openAbout(){
    this.router.navigate(['/about-me'])
  }

}

// rajatpatodi02@gmail.com
// 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