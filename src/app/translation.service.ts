import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  private translations: any = {};

  constructor(public translate: TranslateService) {
    this.translate.setDefaultLang('fr');
    this.translate.use('fr');
    this.translate.onLangChange.subscribe(() => {
      this.translate.getTranslation(this.translate.currentLang).subscribe(translations => {
        this.translations = translations;
      });
    });
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}