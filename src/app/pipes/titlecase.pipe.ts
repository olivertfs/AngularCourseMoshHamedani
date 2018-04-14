import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitlecasePipe implements PipeTransform {

  transform(value: string) {
    if (!value) {
      return null;
    }



    const words = value.split(' ');

    for (let index = 0; index < words.length; index++) {
      const word = words[index];
      if (index > 0 && this.isPreposition(word)) {
        words[index] = word.toLowerCase();
      } else {
        words[index] = this.toTitleCase(word);
      }
    }

    return words.join(' ');
  }

  private isPreposition(value: string): boolean {
    const prepositions = [
      'the',
      'of'
    ];

    return prepositions.includes(value.toLowerCase());
  }

  private toTitleCase(value: string): string {
    return value.substr(0, 1).toUpperCase() + value.substr(1).toLowerCase();
  }

}
