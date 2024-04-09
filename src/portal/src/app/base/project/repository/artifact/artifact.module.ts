import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { ArtifactListPageComponent } from './artifact-list-page/artifact-list-page.component';
import { ArtifactListTabComponent } from './artifact-list-page/artifact-list/artifact-list-tab/artifact-list-tab.component';
import { ArtifactSummaryComponent } from './artifact-summary.component';
import { ArtifactTagComponent } from './artifact-tag/artifact-tag.component';
import { ArtifactCommonPropertiesComponent } from './artifact-common-properties/artifact-common-properties.component';
import { ArtifactAdditionsComponent } from './artifact-additions/artifact-additions.component';
import { ValuesComponent } from './artifact-additions/values/values.component';
import { SummaryComponent } from './artifact-additions/summary/summary.component';
import { DependenciesComponent } from './artifact-additions/dependencies/dependencies.component';
import { BuildHistoryComponent } from './artifact-additions/build-history/build-history.component';
import { ArtifactVulnerabilitiesComponent } from './artifact-additions/artifact-vulnerabilities/artifact-vulnerabilities.component';
import { ArtifactDefaultService, ArtifactService } from './artifact.service';
import { ArtifactDetailRoutingResolverService } from '../../../../services/routing-resolvers/artifact-detail-routing-resolver.service';
import { ResultBarChartComponent } from './vulnerability-scanning/result-bar-chart.component';
import { ResultSbomComponent } from './sbom-scanning/sbom-scan.component';
import { ResultTipHistogramComponent } from './vulnerability-scanning/result-tip-histogram/result-tip-histogram.component';
import { HistogramChartComponent } from './vulnerability-scanning/histogram-chart/histogram-chart.component';
import { ArtifactInfoComponent } from './artifact-list-page/artifact-list/artifact-info/artifact-info.component';
import { SubAccessoriesComponent } from './artifact-list-page/artifact-list/artifact-list-tab/sub-accessories/sub-accessories.component';
import { ArtifactListPageService } from './artifact-list-page/artifact-list-page.service';
import { CopyArtifactComponent } from './artifact-list-page/artifact-list/artifact-list-tab/copy-artifact/copy-artifact.component';
import { CopyDigestComponent } from './artifact-list-page/artifact-list/artifact-list-tab/copy-digest/copy-digest.component';
import { ArtifactFilterComponent } from './artifact-list-page/artifact-list/artifact-list-tab/artifact-filter/artifact-filter.component';
import { PullCommandComponent } from './artifact-list-page/artifact-list/artifact-list-tab/pull-command/pull-command.component';
import { SbomTipHistogramComponent } from './sbom-scanning/sbom-tip-histogram/sbom-tip-histogram.component';

const routes: Routes = [
    {
        path: ':repo',
        component: ArtifactListPageComponent,
        children: [
            {
                path: 'info-tab',
                component: ArtifactInfoComponent,
            },
            {
                path: 'artifacts-tab',
                component: ArtifactListTabComponent,
            },
            { path: '', redirectTo: 'artifacts-tab', pathMatch: 'full' },
        ],
    },
    {
        path: ':repo',
        component: ArtifactListPageComponent,
        children: [
            {
                path: 'artifacts-tab/depth/:depth',
                component: ArtifactListTabComponent,
            },
        ],
    },
    {
        path: ':repo/artifacts-tab/artifacts/:digest',
        component: ArtifactSummaryComponent,
        resolve: {
            artifactResolver: ArtifactDetailRoutingResolverService,
        },
    },
    {
        path: ':repo/artifacts-tab/depth/:depth/artifacts/:digest',
        component: ArtifactSummaryComponent,
        resolve: {
            artifactResolver: ArtifactDetailRoutingResolverService,
        },
    },
];
@NgModule({
    declarations: [
        ArtifactListPageComponent,
        ArtifactListTabComponent,
        ArtifactSummaryComponent,
        ArtifactTagComponent,
        ArtifactCommonPropertiesComponent,
        ArtifactAdditionsComponent,
        ValuesComponent,
        SummaryComponent,
        DependenciesComponent,
        BuildHistoryComponent,
        ArtifactVulnerabilitiesComponent,
        ResultBarChartComponent,
        ResultSbomComponent,
        SbomTipHistogramComponent,
        ResultTipHistogramComponent,
        HistogramChartComponent,
        ArtifactInfoComponent,
        SubAccessoriesComponent,
        CopyArtifactComponent,
        CopyDigestComponent,
        ArtifactFilterComponent,
        PullCommandComponent,
    ],
    imports: [RouterModule.forChild(routes), SharedModule],
    providers: [
        ArtifactListPageService,
        { provide: ArtifactService, useClass: ArtifactDefaultService },
    ],
})
export class ArtifactModule {}
