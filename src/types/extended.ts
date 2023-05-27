/*
 * @adonisjs/mail
 *
 * (c) AdonisJS
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { MailDriversListContract, MailEventData, MailerService, MailersList } from './main.js'

declare module '@adonisjs/core/types' {
  export interface ContainerBindings {
    mail: MailerService
  }

  export interface EventsList {
    'mail:sent': MailEventData<MailersList extends MailDriversListContract ? MailersList : never>
  }
}
