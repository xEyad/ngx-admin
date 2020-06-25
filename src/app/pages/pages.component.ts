import { DiskService } from './../services/disk.service';
import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class PagesComponent {

  menu = Array.from( MENU_ITEMS);
  constructor(private disk:DiskService)
  {
    const type = this.disk.currentUserType.toLocaleLowerCase();
    switch (type) {
      case "dataentry":
        this.RemoveGroupsFromMenu(["الرئيسية","أضف ماليات",'أصنع حساب','تعيين كلمة مرور']);
        break;
      case "investor":
        this.RemoveGroupsFromMenu(["أضف ماليات",'أصنع حساب','تعيين كلمة مرور',"أضف أحصائيات","أضف وقت"]);
        break;
      case "employee":
        this.RemoveGroupsFromMenu(["أضف ماليات",'أصنع حساب','تعيين كلمة مرور',"أضف أحصائيات", "الرئيسية"]);
        break;
      default:
        break;
    }
  }
  private RemoveGroupsFromMenu(groupsTitles:string[])
  {
    groupsTitles.forEach(element => {
      this.RemoveGroupFromMenu(element);
    });
  }
  private RemoveGroupFromMenu(groupTitle)
  {
    for (let i = 0; i < this.menu.length; i++) {
      const obj = this.menu[i];
      if(obj.title==groupTitle)
      {
        this.menu.splice(i,1);
        return;
      }
      else if(obj?.children)
      {
        const possibleIndex = obj.children.findIndex((obj)=>{
                            return obj.title==groupTitle;
                          });
        if(possibleIndex!=-1)
        {
          obj.children.splice(possibleIndex,1);
          return;
        }
      }

    }
    return this.menu;
  }
}
