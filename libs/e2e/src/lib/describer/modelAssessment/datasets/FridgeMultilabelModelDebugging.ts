// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export const FridgeMultilabelModelDebugging = {
  causalAnalysisData: {
    hasCausalAnalysisComponent: false
  },
  checkDupCohort: true,
  cohortDefaultName: "All data",
  dataBalanceData: {
    aggregateBalanceMeasuresComputed: false,
    distributionBalanceMeasuresComputed: false,
    featureBalanceMeasuresComputed: false
  },
  errorAnalysisData: {
    hasErrorAnalysisComponent: false
  },
  featureImportanceData: {
    hasFeatureImportanceComponent: false
  },
  featureNames: ["image"],
  isMultiLabel: true,
  modelOverviewData: {
    hasModelOverviewComponent: true,
    initialCohorts: [
      {
        metrics: {
          exactMatchRatio: "0.925",
          hammingScore: "0.729"
        },
        name: "All data",
        sampleSize: "10"
      }
    ],
    newCohort: {
      metrics: {
        exactMatchRatio: "1",
        hammingScore: "1"
      },
      name: "CohortCreateE2E-multilabel",
      sampleSize: "3"
    }
  },
  visionDataExplorerData: {
    hasVisionDataExplorerComponent: true,
    errorInstances: 0,
    successInstances: 10
  }
};
