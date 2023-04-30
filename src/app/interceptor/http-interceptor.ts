import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {SpinnerService} from "../service/spinner.service";
import {Observable, tap} from "rxjs";
import {OAuthService} from "angular-oauth2-oidc";

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {

  constructor(private spinnerService: SpinnerService,
              private oAuthService: OAuthService) { }

  // перехватили все http-запросы
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.spinnerService.show(); // показать спиннер
    let tokenizedReq = req.clone({
      setHeaders: {
        'Authorization': `Bearer ${this.oAuthService.getAccessToken()}`
      }
    })
    return next
      .handle(tokenizedReq)
      .pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) { // если пришел ответ - response от сервера
            this.spinnerService.hide(); // когда запрос выполнился - убрать спиннер
          }
        }, (error) => {
          this.spinnerService.hide(); // если возникла ошибка - убрать спиннер
          })
      );
  }
}
