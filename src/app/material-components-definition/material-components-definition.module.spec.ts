import { MaterialComponentsDefinitionModule } from './material-components-definition.module';

describe('MaterialComponentsDefinitionModule', () => {
  let materialComponentsDefinitionModule: MaterialComponentsDefinitionModule;

  beforeEach(() => {
    materialComponentsDefinitionModule = new MaterialComponentsDefinitionModule();
  });

  it('should create an instance', () => {
    expect(materialComponentsDefinitionModule).toBeTruthy();
  });
});
