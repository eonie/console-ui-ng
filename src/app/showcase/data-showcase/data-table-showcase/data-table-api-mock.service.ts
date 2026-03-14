import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';



@Injectable()
export class DataTableApiMockService {
    users: {
        id: number;
        name: string;
        age: number;
        address: string;
    }[];

    constructor() {
        this.initData();
    }

    private initData() {
        this.users = [];
        for (let i = 0; i < 30; i++) {
            this.users.push({
                id: i,
                name: `Edward King ${i}`,
                age: 32,
                address: `London, Park Lane no. ${i}`,
            });
        }
    }

    getPrev(x): Observable<any[]> {
        let prevTen = this.users.slice(0, x);

        return of(prevTen);
    }

    getPrevTen(): Observable<any[]> {
        let prevTen = this.users.slice(0, 10);

        return of(prevTen);
    }

    getPage(params): Observable<any> {
        let page = params.page || 0;
        let list = this.users.slice(page * 10, (page + 1) * 10);

        let data = { total: 30, page: page, size: 10, content: list };

        return of(data);
    }

    getPageDelay(params): Observable<any> {
        let page = params.page || 0;
        let list = this.users.slice(page * 10, (page + 1) * 10);

        let data = { total: 30, page: page, size: 10, content: list };

        return of(data).pipe(delay(3000));
    }

    getOne(id): Observable<any> {
        let u = this.users.find(it => it.id == id);

        return of(u);
    }

}
