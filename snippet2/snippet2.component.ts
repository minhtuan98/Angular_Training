import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-snippet2',
  templateUrl: './snippet2.component.html',
  styleUrls: ['./snippet2.component.css']
})
export class Snippet2Component implements OnInit {
  FilterStatus = 'SeeAll';
  newEn = "";
  newVn = "";
  showForm = false;
  
 arrWords = [
 { id: 1, en: 'action', vn: 'hành động', memorized: true },
 { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
 { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
 { id: 4, en: 'active', vn: 'chủ động', memorized: true },
 { id: 5, en: 'bath', vn: 'tắm', memorized: false },
 { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  Showtudong(memorized: boolean){
    const Seeall = this.FilterStatus == 'All';
    const Remember = this.FilterStatus =='memorized_true' && memorized;
    const Forget = this.FilterStatus == 'memorized_false' && !memorized;
    return Seeall || Remember || Forget;
  }
  Xoa(id){
   const index = this.arrWords.findIndex( word => word.id === id);
    this.arrWords.splice(index,1);
  }
  add()
  {
    this.arrWords.unshift(
      {
        id : this.arrWords.length + 1,
        en : this.newEn,
        vn : this.newVn,
        memorized: false
      }
    )
    this.newEn = "";
    this.newVn = "";
    this.showForm = false;
  }
}
