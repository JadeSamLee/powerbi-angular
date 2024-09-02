import { Component } from '@angular/core';
import { models } from 'powerbi-client';

@Component({
  selector: 'app-powerbi-report',
  templateUrl: './powerbi-report.component.html',
  styleUrls: ['./powerbi-report.component.css']
})
export class PowerbiReportComponent {
  reportId = '<Your Report Id>';
  embedUrl = '<Your Embed Url>';
  accessToken = '<Your Access Token>';

  embedConfig = {
    type: 'report',
    id: this.reportId,
    embedUrl: this.embedUrl,
    accessToken: this.accessToken,
    tokenType: models.TokenType.Embed,
    settings: {
      panes: {
        filters: {
          expanded: false,
          visible: false
        }
      },
      background: models.BackgroundType.Transparent,
    }
  };
}
