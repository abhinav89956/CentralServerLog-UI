import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface LogItem {

  id?: number;
  message?: string;
  created_At?: string;
  log_Name?: string;
  event?: string;
  description?: string;
  subject_Ref?: string;
  api_Action_Type?: string;
  [key: string]: any;
}

export interface GetLogsResponse {
  success: boolean;
  message: string;
  data: LogItem[];
}

@Injectable({
  providedIn: 'root'
})
export class ActivitylogserviceService {
 
  private apiUrl = 'https://localhost:7163/api/Log/GetLogs'; 


  constructor(private http: HttpClient) { }

  getLogs(pageNumber: number = 1, pageSize: number = 50, search?: string, fromDate?: string, toDate?: string): Observable<GetLogsResponse> {
    let params = new HttpParams()
      .set('pageNumber', pageNumber)
      .set('pageSize', pageSize);

    if (search) {
      params = params.set('search', search);
    }
    if (fromDate) {
      params = params.set('fromDate', fromDate);
    }
    if (toDate) {
      params = params.set('toDate', toDate);
    }

    return this.http.get<GetLogsResponse>(this.apiUrl, { params });
  }
}
