import { Application } from '../constants';

/**
 * Title Service
 *
 * Service to change the app title. This abstracts the document.title
 * API, so that a standard format can be applied.
 */
export class TitleService {
  public static setTitle(title: string) {
    document.title = `${title} - ${Application.Name}`;
  }
}
