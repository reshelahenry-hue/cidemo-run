import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["tests/multiselectdropdown.spec.ts"],
  fullyParallel:true,//if true means it will run in parallel execution,if true means it will run in serial execution
  workers:8,
  
  use:{
    headless:true,
    screenshot:"on",
    video:"on"
  },
  reporter:[["dot"],["json",{
    outputFile:"jsonReports/jsonReport.json"
  }],["html",{
    open:"never"
  }]]
};

export default config;

